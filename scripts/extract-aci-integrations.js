const fs = require('fs');
const path = require('path');

async function fetchAciIntegrations() {
  console.log('Starting ACI.dev integrations extraction...');
  
  try {
    // Fetch all app directories from GitHub
    const appsUrl = 'https://api.github.com/repos/aipotheosis-labs/aci/contents/backend/apps';
    
    console.log('Fetching app directories...');
    const response = await fetch(appsUrl);
    const directories = await response.json();
    
    if (!Array.isArray(directories)) {
      console.error('Failed to fetch directories:', directories);
      return;
    }
    
    console.log(`Found ${directories.length} app directories`);
    
    const integrations = [];
    const errors = [];
    
    // Process each directory
    for (const dir of directories) {
      if (dir.type === 'dir') {
        try {
          process.stdout.write(`Processing ${dir.name}... `);
          
          // Fetch app.json
          const appJsonUrl = `https://raw.githubusercontent.com/aipotheosis-labs/aci/main/backend/apps/${dir.name}/app.json`;
          const appResponse = await fetch(appJsonUrl);
          
          if (!appResponse.ok) {
            throw new Error(`HTTP ${appResponse.status}`);
          }
          
          const appData = await appResponse.json();
          
          // Fetch functions.json
          const functionsJsonUrl = `https://raw.githubusercontent.com/aipotheosis-labs/aci/main/backend/apps/${dir.name}/functions.json`;
          const functionsResponse = await fetch(functionsJsonUrl);
          
          let functionsData = [];
          if (functionsResponse.ok) {
            functionsData = await functionsResponse.json();
          }
          
          // Extract authentication type
          let authType = 'no_auth';
          if (appData.security_schemes) {
            const schemes = Object.keys(appData.security_schemes);
            if (schemes.includes('oauth2')) {
              authType = 'oauth2';
            } else if (schemes.includes('api_key') || schemes.includes('apiKey')) {
              authType = 'api_key';
            }
          }
          
          // Determine categories - map ACI categories to our simplified ones
          let categories = appData.categories || [];
          const categoryMapping = {
            'communication': 'Communicatie',
            'productivity': 'Productiviteit',
            'developer-tools': 'Development',
            'development': 'Development',
            'sales': 'Sales & Marketing',
            'marketing': 'Sales & Marketing',
            'crm': 'Sales & Marketing',
            'search': 'Search & Scraping',
            'scraping': 'Search & Scraping',
            'finance': 'Finance',
            'payment': 'Finance',
            'design': 'Design & Creative',
            'creative': 'Design & Creative',
            'analytics': 'Data & Analytics',
            'data': 'Data & Analytics',
            'automation': 'Automation',
            'database': 'Database',
            'storage': 'Storage',
            'email': 'Email Marketing',
            'social-media': 'Social Media',
            'project-management': 'Project Management',
            'hr': 'HR & Recruiting',
            'support': 'Customer Support',
            'security': 'Security',
            'ai': 'AI & Machine Learning'
          };
          
          // Map categories
          const mappedCategories = categories.map(cat => {
            const lowerCat = cat.toLowerCase();
            for (const [key, value] of Object.entries(categoryMapping)) {
              if (lowerCat.includes(key)) {
                return value;
              }
            }
            return cat;
          });
          
          // If no categories, try to infer from name/description
          if (mappedCategories.length === 0) {
            const name = appData.display_name?.toLowerCase() || '';
            const desc = appData.description?.toLowerCase() || '';
            
            for (const [key, value] of Object.entries(categoryMapping)) {
              if (name.includes(key) || desc.includes(key)) {
                mappedCategories.push(value);
                break;
              }
            }
            
            // Default category if none found
            if (mappedCategories.length === 0) {
              mappedCategories.push('Other');
            }
          }
          
          // Build integration object
          const integration = {
            name: dir.name,
            displayName: appData.display_name || appData.name || dir.name,
            description: appData.description || '',
            logo: appData.logo || `https://raw.githubusercontent.com/aipotheosis-labs/aipolabs-icons/refs/heads/main/apps/${dir.name}.svg`,
            provider: appData.provider || '',
            categories: [...new Set(mappedCategories)], // Remove duplicates
            authType: authType,
            functions: Array.isArray(functionsData) 
              ? functionsData.map(f => f.display_name || f.name || '').filter(Boolean).slice(0, 10)
              : [],
            active: appData.active !== false,
            popular: ['gmail', 'slack', 'notion', 'github', 'hubspot', 'asana', 'google-calendar', 'brave-search', 'vercel', 'supabase'].includes(dir.name)
          };
          
          integrations.push(integration);
          console.log('✓');
          
        } catch (error) {
          console.log('✗');
          errors.push({ app: dir.name, error: error.message });
        }
      }
    }
    
    // Sort integrations: popular first, then alphabetically
    integrations.sort((a, b) => {
      if (a.popular && !b.popular) return -1;
      if (!a.popular && b.popular) return 1;
      return a.displayName.localeCompare(b.displayName);
    });
    
    // Ensure data directory exists
    if (!fs.existsSync('data')) {
      fs.mkdirSync('data');
    }
    
    // Save integrations
    fs.writeFileSync(
      path.join('data', 'aci-integrations.json'),
      JSON.stringify(integrations, null, 2)
    );
    
    // Save errors for debugging
    if (errors.length > 0) {
      fs.writeFileSync(
        path.join('data', 'extraction-errors.json'),
        JSON.stringify(errors, null, 2)
      );
    }
    
    console.log(`\nExtraction complete!`);
    console.log(`- Total integrations: ${integrations.length}`);
    console.log(`- Active integrations: ${integrations.filter(i => i.active).length}`);
    console.log(`- OAuth2 integrations: ${integrations.filter(i => i.authType === 'oauth2').length}`);
    console.log(`- API Key integrations: ${integrations.filter(i => i.authType === 'api_key').length}`);
    console.log(`- Errors: ${errors.length}`);
    
    // Show category distribution
    const categoryCount = {};
    integrations.forEach(i => {
      i.categories.forEach(cat => {
        categoryCount[cat] = (categoryCount[cat] || 0) + 1;
      });
    });
    
    console.log('\nCategory distribution:');
    Object.entries(categoryCount)
      .sort((a, b) => b[1] - a[1])
      .forEach(([cat, count]) => {
        console.log(`- ${cat}: ${count}`);
      });
    
  } catch (error) {
    console.error('Fatal error:', error);
  }
}

// Run the extraction
fetchAciIntegrations();