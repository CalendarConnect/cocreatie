# Component Library Documentation

## Overview
This document maintains comprehensive documentation for all reusable components in the co-creatie.ai project. Each component entry includes usage, props, styling, and examples.

---

## Existing Components (From Template)

### UI Components

#### Button
- **Location**: `/components/ui/button.tsx`
- **Status**: Needs brand alignment
- **Required Updates**: Apply Poppins font, brand colors, spacing

#### Badge
- **Location**: `/components/ui/badge.tsx`
- **Status**: Needs brand alignment
- **Required Updates**: Color scheme, typography

#### Form
- **Location**: `/components/ui/form.tsx`
- **Status**: Needs Dutch localization
- **Required Updates**: Validation messages in Dutch

#### Input
- **Location**: `/components/ui/input.tsx`
- **Status**: Needs styling update
- **Required Updates**: Generous padding, brand focus states

#### Label
- **Location**: `/components/ui/label.tsx`
- **Status**: Needs typography update
- **Required Updates**: Poppins font

### Layout Components

#### Navbar
- **Location**: `/components/navbar.tsx`
- **Status**: Needs complete redesign
- **Required Updates**: Dutch navigation, brand colors, premium feel

#### Footer
- **Location**: `/components/footer.tsx`
- **Status**: Needs localization
- **Required Updates**: Dutch content, brand compliance

#### Container
- **Location**: `/components/container.tsx`
- **Status**: Review spacing
- **Required Updates**: Implement 8px spacing system

### Feature Components

#### Hero
- **Location**: `/components/hero.tsx`
- **Status**: Needs transformation
- **Required Updates**: Dutch messaging, partnership focus

#### Pricing
- **Location**: `/components/pricing.tsx`
- **Status**: Complete redesign needed
- **Required Updates**: €3,500 partnership investment focus

#### Testimonials
- **Location**: `/components/testimonials.tsx`
- **Status**: Replace content
- **Required Updates**: Dutch success stories (Flow & Gwendolyn, Troy & Jeroen)

---

## New Components Needed

### Partnership Components
- **AIPartnerShowcase**: Display AI partner capabilities
- **PartnershipBuilder**: Interactive partner creation
- **SuccessMetrics**: Show partnership ROI

### Dutch-Specific Components
- **DutchCTAButton**: Localized call-to-action
- **PartnershipInvestmentCard**: €3,500 investment presentation
- **DutchTestimonialCard**: Success story format

---

## Component Standards

### TypeScript Interface Pattern
```typescript
interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  // Additional props with descriptions
}
```

### Styling Pattern
```typescript
// Use Tailwind with brand tokens
const baseStyles = "font-poppins px-5 py-2.5"; // Using 20px (2.5 * 8px)
const variants = {
  primary: "bg-gradient-to-r from-[#E3F2FD] to-[#2196F3] text-white",
  secondary: "bg-white border-2 border-[#2196F3] text-[#2C3E50]"
};
```

### Accessibility Requirements
- Proper ARIA labels
- Keyboard navigation support
- Focus indicators matching brand
- Dutch screen reader support

---

## Component Development Workflow

1. **Check existing components** before creating new ones
2. **Apply brand guidelines** to all components
3. **Ensure TypeScript compliance** with proper interfaces
4. **Test accessibility** with Dutch language
5. **Document in this file** with examples

---

## Usage Examples

### Button Component (After Brand Update)
```tsx
import { Button } from "@/components/ui/button";

// Primary partnership CTA
<Button variant="primary" size="large">
  Start jouw AI-partnership
</Button>

// Secondary action
<Button variant="secondary">
  Bekijk voorbeelden
</Button>
```

### Partnership Card (New Component)
```tsx
import { PartnershipCard } from "@/components/partnership-card";

<PartnershipCard
  title="Jouw AI Marketing Partner"
  investment="€3.500"
  features={["24/7 beschikbaar", "Nederlandse taal", "Bewezen resultaten"]}
  onInvest={() => handleInvestment()}
/>
```

---

## New Components Created

### InteractivePartnerDemo
- **Location**: `/components/interactive-partner-demo.tsx`
- **Purpose**: Showcase authentic AI partnership conversations
- **Features**: 
  - Partner switching with animated transitions
  - Four partnership examples with real conversations
  - Responsive grid layout for mobile/desktop
  - Custom color coding for each partnership
  - Framer Motion animations
- **Props**: None (self-contained component)
- **Usage**: 
```tsx
import { InteractivePartnerDemo } from "@/components/interactive-partner-demo";

// In Hero section
<InteractivePartnerDemo />
```

### PricingCalculator (Original)
- **Location**: `/components/pricing-calculator.tsx`
- **Purpose**: Interactive pricing configuration tool
- **Status**: Deprecated - replaced by PricingCalculatorNew
- **Features**: 
  - Base price €2,495 with standard integrations
  - Individual tool selection at €199 each
  - Category-based tool organization
  - Real-time price calculation
  - Selected tools summary display

### PricingCalculatorNew
- **Location**: `/components/pricing-calculator-new.tsx`
- **Purpose**: Three-tier pricing structure with Knowledge Packages
- **Status**: Active - primary pricing component
- **Features**: 
  - Three-tier structure: Base + Knowledge Packages + Extra Integrations
  - Base AI-Partner (€2,495) includes 6 standard integrations
  - Knowledge Packages (€199 each) for specialized expertise
  - Automatic dependency management (packages can require integrations)
  - Visual three-column layout
  - Real-time configuration summary
- **Props**: None (self-contained component)
- **Usage**: 
```tsx
import { PricingCalculator } from "@/components/pricing-calculator-new";

// On pricing page
<PricingCalculator />
```
- **Knowledge Packages**:
  - Automation Excellence (requires n8n)
  - LinkedIn Thought Leadership (requires LinkedIn)
  - Sales Optimization
  - Neuromarketing 2025
  - Content Creation Pro
  - Project Management

### ProcessTimeline
- **Location**: `/components/process-timeline.tsx`
- **Purpose**: Display 2-week implementation process
- **Status**: Redesigned to card-based layout
- **Features**: 
  - 2x2 grid of process phase cards
  - No blue colors (brand compliance)
  - Numbered phases with clear descriptions
  - Responsive grid layout
  - Clean neutral color scheme
- **Props**: None (self-contained component)
- **Usage**: 
```tsx
import { ProcessTimeline } from "@/components/process-timeline";

// Show implementation process
<ProcessTimeline />
```

## Migration Progress

- [x] Update Hero component with brand styling
- [x] Add Poppins font globally
- [x] Implement Dutch content in hero
- [x] Create new partnership-focused component (InteractivePartnerDemo)
- [x] Update pricing components with new structure
- [x] Redesign process timeline to match brand aesthetic
- [x] Update all prices from €3,500 to €2,495
- [x] Implement Knowledge Packages pricing tier
- [ ] Update remaining UI components with brand styling
- [ ] Localize all other text components to Dutch
- [ ] Document all component APIs
- [ ] Add usage examples for each component