# Icon Library Guidelines

## CRITICAL: Use Heroicons as Primary Icon Library

**Consistent, Professional Icons Only - No Emoji-style or AI-looking Icons**

### Primary Library: @heroicons/react

- **Use Heroicons exclusively** for all new icons
- Available in 24x24 (default), 20x20, and 16x16 sizes
- Use `/24/outline` for navigation and UI elements
- Use `/24/solid` for emphasis and CTAs
- Never mix outline and solid in the same context

### Icon Selection Principles

1. **Professional & Medical**: Choose icons that feel clinical and trustworthy

   - ✅ Good: PhoneIcon, CalendarIcon, DocumentTextIcon, ClockIcon
   - ❌ Avoid: SparklesIcon, FaceSmileIcon, ChatBubbleBottomCenterTextIcon

2. **Familiar but Refined**: Icons should be recognizable but not overly simplistic

   - ✅ Good: EnvelopeIcon (for email), MapPinIcon (for location)
   - ❌ Avoid: Basic geometric shapes or overly abstract icons

3. **Consistent Weight**: Maintain visual consistency
   - Don't mix icon libraries in the same component
   - Keep stroke width consistent (use either outline OR solid)
   - Size icons appropriately: w-5 h-5 for inline, w-6 h-6 for buttons

### Approved Icon Mappings

- **Phone/Call**: PhoneIcon (not PhoneArrowUpRightIcon)
- **Calendar/Appointment**: CalendarDaysIcon (not CalendarIcon - too simple)
- **Location**: MapPinIcon (not GlobeAltIcon)
- **Time/Hours**: ClockIcon
- **Email**: EnvelopeIcon
- **Menu**: Bars3Icon (not Bars2Icon - too minimal)
- **Close**: XMarkIcon
- **Check/Success**: CheckCircleIcon
- **Warning**: ExclamationTriangleIcon
- **Info**: InformationCircleIcon
- **User/Patient**: UserIcon (not UserCircleIcon - too playful)
- **Document**: DocumentTextIcon
- **Arrow**: ChevronRightIcon/ChevronDownIcon (not ArrowRightIcon - too basic)

### Migration from Other Libraries

- Replace FontAwesome icons with Heroicons equivalents
- Remove lucide-react in favor of Heroicons
- Keep icon sizing consistent during migration

### Never Use

- ❌ Emoji-style icons (SparklesIcon, FireIcon, HeartIcon)
- ❌ AI-suggestive icons (CpuChipIcon, BeakerIcon)
- ❌ Overly playful icons (GiftIcon, CakeIcon)
- ❌ Mixed icon styles in the same view

# Content & Naming Guidelines

## CRITICAL: Doctor Naming Convention

**IMPORTANT**: Maintain consistency when referring to the dentist:

- **Primary usage**: Always use "Dr. Keith A. Brown DDS" when space permits
- **Secondary usage**: Only use "Dr. Brown" when necessary due to space constraints or after first mention
- **Never use**: "Keith Brown" without title, "Dr. Keith Brown" without middle initial or DDS
- **Examples**:
  - ✅ "Dr. Keith A. Brown DDS has served Naperville..."
  - ✅ "Schedule an appointment with Dr. Keith A. Brown DDS"
  - ✅ "Dr. Keith A. Brown DDS provides... Dr. Brown also offers..."
  - ❌ "Keith Brown provides..."
  - ❌ "Dr. Keith Brown offers..."

# UI Design Guidelines

## CRITICAL: CallRail Dynamic Number Tracking

**IMPORTANT**: This site uses CallRail for dynamic phone number tracking.

## Core Design Principles

### 1. Touch Controls & Hit Targets

- **Minimum touch target size**: 44pt x 44pt (approximately 11mm x 11mm)
- All interactive elements (buttons, links, form inputs) must meet this minimum size for accurate finger tapping
- Applied in hero section: CTA buttons use `py-4` on mobile (16px = ~48pt height)

### 2. Typography & Readability

- **Minimum text size**: 11pt (approximately 15px on web)
- Ensure ample contrast between text and background
- Avoid text overlap - use proper line-height and letter-spacing
- Applied: Using `text-base` (16px) as minimum on mobile, scaling up for larger screens

### 3. Responsive Layout

- Content must fit device screens without horizontal scrolling
- Primary content visible without zooming
- Mobile-first approach with progressive enhancement
- Applied: Using responsive padding and gaps (px-4 sm:px-6 lg:px-8)

### 4. Visual Hierarchy & Spacing

- Create clear visual hierarchy with consistent spacing
- Align related content to show relationships
- Place controls close to the content they modify
- Applied: Consistent gap utilities (gap-4, gap-5, gap-6) throughout components

### 5. Graphics & Images

- Provide high-resolution images (@2x and @3x for Retina displays)
- Maintain proper aspect ratios to avoid distortion
- Applied: Using Next.js Image component with proper aspect ratios

### 6. Depth & Modern Effects

- Use subtle shadows and transforms for depth
- Gradient overlays for visual interest
- Smooth transitions for interactivity
- Applied: shadow-lg, shadow-xl, hover:scale effects on images and buttons

## Design Inspiration (Not Dogma)

### Apple's Liquid Glass Philosophy (2025)

Taking inspiration from Apple's design principles without direct copying:

- **Focus on content**: UI elements should support, not compete with content
- **Subtle depth**: Use shadows and layers sparingly for visual hierarchy
- **Fluid transitions**: Smooth, purposeful animations (but keep them minimal)
- **Adaptive materials**: Elements that respond to context (light/dark modes)

### Our Implementation Approach

- Use subtle shadows and gradients for depth (shadow-lg, shadow-xl)
- Keep animations minimal and purposeful (hover:scale-[1.01], not excessive)
- Focus on content hierarchy over decorative elements
- Maintain consistency across breakpoints

## Component-Specific Guidelines

### Hero Section

- Mobile-first padding: py-2 on mobile, py-8 on tablet, py-12 on desktop
- Image aspect ratios: 3:4 (mobile portrait), 4:3 (desktop landscape)
- CTA buttons: Primary (gradient + shadow), Secondary (subtle border + shadow)
- Typography scale: Progressive enhancement from mobile to desktop

### Buttons & CTAs

- Primary actions: Bold colors with shadows
- Secondary actions: Subtle backgrounds with borders
- All buttons: Minimum 44pt height, clear hover/active states

### Typography Scale

- Mobile: text-2xl for h1, text-base for body
- Tablet: text-3xl for h1, text-lg for body
- Desktop: text-4xl/5xl for h1, text-xl for body

## Accessibility Considerations

- Focus states on all interactive elements
- Sufficient color contrast (WCAG AA minimum)
- Semantic HTML for screen readers
- Descriptive aria-labels where needed

## Testing Checklist

- [ ] All touch targets ≥ 44pt x 44pt
- [ ] Text size ≥ 11pt (15px)
- [ ] No horizontal scrolling on mobile
- [ ] Images maintain aspect ratio
- [ ] Proper contrast ratios
- [ ] Smooth transitions and animations

## Commands to Run After Changes

```bash
npm run lint
npm run typecheck
```

## CallRail Dynamic Number Insertion (DNI) Implementation

### Problem Solved (2025-01-25)
Fixed hydration errors caused by CallRail's dynamic number insertion script mutating phone numbers before React hydration completed. This was causing mismatches between server-rendered HTML and client-side React.

### Key Issues Identified
1. **Hydration Errors**: Server rendered `null`, client rendered phone numbers → mismatch
2. **CallRail Mutations**: Phone digits visible in DOM before hydration allowed CallRail to swap them early
3. **Nested Anchors**: Multiple components had `<a href="tel:">` wrapping `<DisplayNumber asLink={false}>`
4. **Layout Shift**: No space reserved for phone numbers caused content jumping

### Solution: Enhanced DisplayNumber Component

```jsx
"use client";

export default function DisplayNumber({
  officeNumber = telNumber,     // digits only (6303579358)
  displayText = displayNumber,  // formatted ((630) 357-9358)
  className = "",
  showIcon = false,
  iconComponent: Icon = null,
  prefixText = "",              // e.g., "Call Now: "
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    // CRITICAL: Non-numeric spacer prevents CallRail mutations
    return (
      <span
        className={className}
        style={{ display: "inline-block", minWidth: "10ch" }}
        aria-hidden="true"
      />
    );
  }

  // After mount: Always render as anchor with visible digits
  return (
    <a
      href={`tel:${officeNumber}`}
      className={className}
      aria-label={`Call ${displayText}`}
    >
      {showIcon && Icon && <Icon className="w-5 h-5 inline-block flex-shrink-0" />}
      {prefixText && <span>{prefixText}</span>}
      <span className="callrail-phone">{displayText}</span>
    </a>
  );
}
```

### Implementation Rules
1. **NO digits before mount** - Use blank spacer to prevent CallRail mutations
2. **ALWAYS show digits after mount** - CallRail needs visible, contiguous phone number
3. **DisplayNumber handles everything** - No wrapper anchors, it creates the `<a>` tag
4. **Server Components limitation** - Can't pass icon components as props; use prefixText instead

### Components Updated
- `HeroCTA.jsx` - Removed button wrapper
- `EmergencyBanner.jsx` - Fixed nested anchor
- `UnifiedForm.jsx` - Replaced hardcoded phone with DisplayNumber
- `appointment/page.jsx` - Fixed nested anchors (2 instances)
- `emergency/page.jsx` - Fixed nested anchor
- `dental-services/page.jsx` - Fixed nested anchor
- `InsuranceDialog.jsx` - Fixed nested anchor
- `InsuranceCheck.jsx` - Fixed nested anchor

### Testing with CallRail
Use private/incognito window for each test:
- **Organic**: Search Google and click through
- **Google Ads**: Add `?gclid=test`
- **Bing Ads**: Add `?msclkid=test&utm_medium=cpc`
- **Facebook**: Add `?utm_source=facebook`

Verify: Phone swaps correctly, no console hydration warnings

## Header Layout Shift Prevention

### Problem Solved (2025-01-25)
Fixed layout shift in header caused by client-side components (mobile menu toggle and theme toggle) rendering after hydration.

### Solution
Added placeholder elements that reserve the exact same space as the interactive elements before they mount:

1. **HeaderDropDown.jsx** - Added mounted state and placeholder div with same dimensions as menu button
2. **ThemeToggle.jsx** - Returns placeholder div instead of null when not mounted

### Key Pattern
```jsx
// Before mounting - reserve space
if (!mounted) {
  return (
    <div className="min-w-[48px] min-h-[48px]">
      <div className="w-7 h-7" />
    </div>
  );
}

// After mounting - render interactive element
return <Menu.Button>...</Menu.Button>;
```

This prevents the header from jumping when interactive elements load on the client.
- memorize