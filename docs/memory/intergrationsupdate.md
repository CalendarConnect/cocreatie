# Voor Co: Echte ACI.dev Integration Data Implementatie

## HET PROBLEEM
Je hebt nu een mooie pagina, maar met fake/beperkte data. We willen **alle 600+ echte integrations** van ACI.dev tonen.

## STAP 1: Data Ophalen Van ACI.dev Repository

### GitHub Repository Structure
```
https://github.com/aipotheosis-labs/aci/tree/main/backend/apps/
```

**Elke app heeft:**
- `app.json` - App metadata (naam, logo, beschrijving)
- `functions.json` - Functies die de app kan uitvoeren

### Voorbeeld Apps om te Scrapen
```
/backend/apps/gmail/app.json
/backend/apps/slack/app.json
/backend/apps/notion/app.json
/backend/apps/github/app.json
/backend/apps/brave_search/app.json
/backend/apps/hubspot/app.json
/backend/apps/asana/app.json
etc...
```

## STAP 2: Data Extraction Script

### Maak een script: `scripts/extract-aci-integrations.js`

```javascript
const fs = require('fs');
const path = require('path');
const https = require('https');

async function fetchAciIntegrations() {
  // Haal alle app directories op van GitHub
  const appsUrl = 'https://api.github.com/repos/aipotheosis-labs/aci/contents/backend/apps';
  
  const response = await fetch(appsUrl);
  const directories = await response.json();
  
  const integrations = [];
  
  for (const dir of directories) {
    if (dir.type === 'dir') {
      try {
        // Haal app.json op
        const appJsonUrl = `https://raw.githubusercontent.com/aipotheosis-labs/aci/main/backend/apps/${dir.name}/app.json`;
        const appResponse = await fetch(appJsonUrl);
        const appData = await appResponse.json();
        
        // Haal functions.json op
        const functionsJsonUrl = `https://raw.githubusercontent.com/aipotheosis-labs/aci/main/backend/apps/${dir.name}/functions.json`;
        const functionsResponse = await fetch(functionsJsonUrl);
        const functionsData = await functionsResponse.json();
        
        // Combineer data
        const integration = {
          name: appData.name,
          displayName: appData.display_name,
          description: appData.description,
          logo: appData.logo,
          provider: appData.provider,
          categories: appData.categories,
          authType: Object.keys(appData.security_schemes)[0],
          functions: functionsData.map(f => f.name),
          active: appData.active
        };
        
        integrations.push(integration);
        
      } catch (error) {
        console.log(`Error fetching ${dir.name}:`, error.message);
      }
    }
  }
  
  // Sla op als JSON
  fs.writeFileSync('data/aci-integrations.json', JSON.stringify(integrations, null, 2));
  console.log(`Extracted ${integrations.length} integrations`);
}

fetchAciIntegrations();
```

## STAP 3: Integration Data Interface

### TypeScript Interface: `types/integration.ts`

```typescript
export interface Integration {
  name: string;
  displayName: string;
  description: string;
  logo: string;
  provider: string;
  categories: string[];
  authType: 'oauth2' | 'api_key' | 'no_auth';
  functions: string[];
  active: boolean;
}

export interface IntegrationCategory {
  name: string;
  count: number;
  integrations: Integration[];
}
```

## STAP 4: Component Update

### Update je IntegrationsGrid component

```typescript
import { useState, useEffect } from 'react';
import { Integration, IntegrationCategory } from '@/types/integration';

export default function IntegrationsGrid() {
  const [integrations, setIntegrations] = useState<Integration[]>([]);
  const [categories, setCategories] = useState<IntegrationCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  
  useEffect(() => {
    // Laad de echte data
    import('@/data/aci-integrations.json').then(data => {
      setIntegrations(data.default);
      
      // Groepeer per categorie
      const categoryMap = new Map<string, Integration[]>();
      
      data.default.forEach(integration => {
        integration.categories.forEach(category => {
          if (!categoryMap.has(category)) {
            categoryMap.set(category, []);
          }
          categoryMap.get(category)?.push(integration);
        });
      });
      
      const categoryList = Array.from(categoryMap.entries()).map(([name, integrations]) => ({
        name,
        count: integrations.length,
        integrations
      }));
      
      setCategories(categoryList);
    });
  }, []);
  
  const filteredIntegrations = selectedCategory === 'all' 
    ? integrations 
    : integrations.filter(i => i.categories.includes(selectedCategory));
  
  return (
    <div>
      {/* Category Filter */}
      <div className="mb-8">
        <button 
          onClick={() => setSelectedCategory('all')}
          className={selectedCategory === 'all' ? 'active' : ''}
        >
          Alle ({integrations.length})
        </button>
        {categories.map(category => (
          <button
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            className={selectedCategory === category.name ? 'active' : ''}
          >
            {category.name} ({category.count})
          </button>
        ))}
      </div>
      
      {/* Integration Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredIntegrations.map(integration => (
          <IntegrationCard key={integration.name} integration={integration} />
        ))}
      </div>
    </div>
  );
}
```

## STAP 5: Integration Card Component

### Update IntegrationCard.tsx

```typescript
import { Integration } from '@/types/integration';

interface Props {
  integration: Integration;
}

export default function IntegrationCard({ integration }: Props) {
  const getAuthBadge = (authType: string) => {
    switch (authType) {
      case 'oauth2':
        return <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">OAuth2</span>;
      case 'api_key':
        return <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">API Key</span>;
      case 'no_auth':
        return <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">No Auth</span>;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <img 
          src={integration.logo} 
          alt={integration.displayName}
          className="w-12 h-12 rounded-lg mr-4"
        />
        <div>
          <h3 className="font-semibold text-lg">{integration.displayName}</h3>
          <p className="text-gray-600 text-sm">{integration.provider}</p>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 text-sm">{integration.description}</p>
      
      <div className="flex items-center justify-between">
        {getAuthBadge(integration.authType)}
        <span className="text-xs text-gray-500">
          {integration.functions.length} functies
        </span>
      </div>
      
      <div className="mt-3 flex flex-wrap gap-1">
        {integration.categories.map(category => (
          <span 
            key={category}
            className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
```

## STAP 6: Stats Update

### Update je statistics section

```typescript
// In je stats component
const stats = [
  { label: 'Tools', value: integrations.length },
  { label: 'Categorieën', value: categories.length },
  { label: 'OAuth2', value: integrations.filter(i => i.authType === 'oauth2').length },
  { label: 'API Keys', value: integrations.filter(i => i.authType === 'api_key').length }
];
```

## STAP 7: Search Functionality

### Voeg search toe

```typescript
const [searchTerm, setSearchTerm] = useState('');

const filteredIntegrations = integrations.filter(integration => {
  const matchesSearch = integration.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       integration.description.toLowerCase().includes(searchTerm.toLowerCase());
  
  const matchesCategory = selectedCategory === 'all' || 
                         integration.categories.includes(selectedCategory);
  
  return matchesSearch && matchesCategory;
});
```

## ACTIE ITEMS VOOR CO

1. **Run het extraction script** om alle ACI.dev data op te halen
2. **Update je components** om echte data te gebruiken
3. **Test alle categorieën** en zorg dat filtering werkt
4. **Controleer alle logos** laden correct
5. **Zorg dat statistics** dynamisch worden berekend

## RESULTAAT

Na deze implementatie heb je:
- **Alle 600+ echte integrations** van ACI.dev
- **Echte categorieën** met accurate counts
- **Werkende filtering** per categorie
- **Zoekfunctionaliteit** door alle integrations
- **Dynamische statistieken** gebaseerd op echte data

**Co, run deze implementatie en je hebt een complete, accurate integrations pagina met alle ACI.dev data!**