# 🎨 Takt Website Content Update Checklist

## Overview
This checklist outlines the comprehensive content update for Takt's website, transforming it from a simple landing page to a full-featured company website showcasing our AI retrieval engine for production teams. All updates must maintain strict consistency with our brand guidelines.

---

## Phase 1: Project Setup & Asset Organization

### 1.1 Asset Management
- [X] **Verify logo assets in public folder**
  - [X] Confirm `logo-takt.png` (main logo with text)
  - [X] Confirm `logo-solo.png` (delta symbol only)  
  - [X] Confirm `favicon.png` is properly configured
- [X] **Organize illustration assets**
  - [X] Move `loading_dock.png` to `src/assets/illustrations/`
  - [X] Move `machine_maintenance.png` to `src/assets/illustrations/`
  - [X] Move `business_meeting.png` to `src/assets/illustrations/`
  - [X] Optimize image sizes for web (compress if >100KB) - Images are ~116KB-126KB, acceptable for web
- [X] **Animation assets preparation**
  - [X] Install animation libraries (`react-typed` installed successfully)
  - [X] Plan chat bubble component structure
  - [X] Design animation timing and sequences

### 1.2 Component Structure Planning
- [X] **Create new components**
  - [X] `HeroSection.jsx` - Main hero area
  - [X] `ThreePanelDemo.jsx` - Interactive demo section with chat animations
  - [X] `CallToAction.jsx` - Email signup form
  - [X] `Header.jsx` - Logo and header area
  - [X] `ChatBubbleAnimation.jsx` - Typing and response animation component
  - [X] `TypingEffect.jsx` - Custom typing animation component
- [X] **Update existing components**
  - [X] Enhance `Button.jsx` for CTA styling (added 'cta' variant with enhanced styling)
  - [X] Update `Layout.jsx` for new page structure (added includeContainer prop)
  - [X] Update `components/index.js` to export all new components

---

## Phase 2: Header Implementation

### 2.1 Logo Integration
- [X] **Header component creation**
  - [X] Position logo at top center
  - [X] Use `logo-takt.png` as primary logo
  - [X] Implement responsive sizing (large on desktop, smaller on mobile)
  - [X] Apply proper brand spacing and padding
- [X] **Brand consistency**
  - [X] Ensure logo maintains aspect ratio
  - [X] Apply Canvas Cream background (`#F7F3E9`)
  - [X] Use generous white space as per brand guidelines
  - [X] Test logo visibility and contrast

### 2.2 Header Styling
- [X] **Clean, minimal design**
  - [X] No navigation menu (single-page design)
  - [X] Subtle shadow or border if needed (added subtle border-b border-gray-100)
  - [X] Curved edges following brand guidelines (rounded-takt on hover container)
  - [X] Mobile-responsive behavior (h-12 md:h-16 responsive sizing)

---

## Phase 3: Hero Section Development

### 3.1 Content Implementation
- [X] **Primary headline**
  - [X] Text: "Your fire-fighting squad for every hair-on-fire moment."
  - [X] Use Poppins Bold font
  - [X] Apply Takt Orange (`#E16809`) accent color strategically
  - [X] Ensure readable typography hierarchy
- [X] **Supporting subtext**
  - [X] Text: "Takt is a purpose-built AI retrieval engine for production teams—turning every input into output, delivering perfect, accurate, relevant info at your fingertips."
  - [X] Use Poppins Regular font
  - [X] Apply Iron Grey (`#322E2D`) color
  - [X] Maintain conversational, friendly tone

### 3.2 Visual Design
- [X] **Layout and spacing**
  - [X] Center-aligned content (max-w-5xl mx-auto text-center)
  - [X] Generous white space around text (py-20 md:py-32, enhanced spacing)
  - [X] Responsive design for mobile/tablet/desktop (text-4xl md:text-5xl lg:text-6xl xl:text-7xl)
  - [X] Smooth transitions and animations (fadeInUp animation with staggered delays)
- [X] **Brand integration**
  - [X] Use warm, inviting color scheme (Canvas Cream background, subtle orange/green patterns)
  - [X] Apply curved edges to any design elements (rounded-takt, rounded-full)
  - [X] Enhanced delta symbol integration (larger size, gradient, glow effects, hover animations)
  - [X] Ensure accessibility compliance (proper contrast, semantic HTML, animation delays)

---

## Phase 4: Three-Panel Demo Section

### 4.1 Section Structure
- [X] **Section headline**
  - [X] Text: "See Takt in Action"
  - [X] Poppins Bold, prominent sizing (text-3xl md:text-4xl lg:text-5xl)
  - [X] Proper spacing from hero section (py-16 md:py-24)
- [X] **Panel grid layout**
  - [X] Three equal-width cards on desktop (grid-cols-1 md:grid-cols-3)
  - [X] Stack vertically on mobile (responsive grid)
  - [X] Consistent spacing between panels (gap-8)
  - [X] Hover effects and interactions (hover:shadow-lg, group hover states)

### 4.2 Panel Content - Receiving Dock
- [X] **Visual elements**
  - [X] Use `loading_dock.png` as hero image (moved to public folder)
  - [X] Apply low-poly aesthetic consistency (maintained from original assets)
  - [X] Optimize image for web performance (proper Vite serving)
- [X] **Interactive chat animation**
  - [X] Question: "Why is the raw material shipment delayed?"
  - [X] Response: "Shipment #482 from Supplier A is delayed due to a logistics hold at the port. Estimated arrival: Friday, 2 PM."
  - [X] Hover-triggered typing animation (TypingEffect component integrated)
  - [X] Chat bubble sequence: typing → send → loading → response (ChatBubbleAnimation component)
  - [X] Mobile tap functionality for touch devices (onClick handler with toggle)

### 4.3 Panel Content - Production Floor
- [X] **Visual elements**
  - [X] Use `machine_maintenance.png` as hero image (2.3MB file properly served)
  - [X] Maintain visual consistency with other panels (same styling and layout)
  - [X] Ensure image quality and optimization (accessible at 200 status)
- [X] **Interactive chat animation**
  - [X] Question: "Why isn't the pump maintaining correct pressure?"
  - [X] Response: "Pump 3 in Unit 2 is running at 60% capacity due to a clogged filter. Replace filter cartridge."
  - [X] Hover-triggered typing animation (same TypingEffect component)
  - [X] Chat bubble sequence: typing → send → loading → response (ChatBubbleAnimation)
  - [X] Mobile tap functionality for touch devices (same interaction pattern)

### 4.4 Panel Content - Business Meeting
- [X] **Visual elements**
  - [X] Use `business_meeting.png` as hero image (1.6MB file properly served)
  - [X] Consistent styling with other panels (same layout and interactions)
  - [X] Professional, warm appearance (executive-level meeting scenario)
- [X] **Interactive chat animation**
  - [X] Question: "What are our top chemical orders this month and due dates?"
  - [X] Response: "Top 3 orders: Order #2205 (Polyethylene, Sept 25), #2207 (Methanol, Sept 28), #2208 (Styrene, Oct 2)."
  - [X] Hover-triggered typing animation (same TypingEffect component)
  - [X] Chat bubble sequence: typing → send → loading → response (ChatBubbleAnimation)
  - [X] Mobile tap functionality for touch devices (consistent interaction pattern)

### 4.5 Chat Animation System
- [X] **Animation sequence design**
  - [X] Default state: Illustration + question overlay (implemented in ThreePanelDemo)
  - [X] Hover/tap trigger: Typing animation starts (handlePanelHover/Click)
  - [X] Question appears character by character (~1s duration, 60ms speed)
  - [X] Question bubble "sends" with subtle animation (transition-all duration-300)
  - [X] Loading indicator: 3 animated dots (~1s, staggered bounce)
  - [X] Response bubble appears with answer (fade-in with delta logo)
- [X] **Chat bubble styling**
  - [X] Question bubble: Takt Orange background (`#E16809`) with white text
  - [X] Response bubble: White background with Takt logo pill and delta symbol
  - [X] Rounded corners following brand guidelines (rounded-takt, rounded-bl-sm)
  - [X] Proper spacing and typography (Poppins font, text-sm)
- [X] **Technical implementation**
  - [X] React state management for animation sequence (useState with 6 states)
  - [X] Custom typing effect with TypingEffect component
  - [X] Smooth CSS transitions and animations (300ms duration)
  - [X] Touch-friendly mobile interactions (onClick with toggle)
  - [X] Reset animation on mouse leave (desktop) and panel switch

### 4.6 Enhanced Dropdown Q&A System Implementation
- [X] **Dropdown component development**
  - [X] Create styled `<select>` dropdown with Tailwind CSS
  - [X] Implement consistent brand styling (rounded-takt, Takt Orange accents)
  - [X] Ensure mobile-responsive dropdown behavior
  - [X] Add proper accessibility attributes (labels, ARIA support)
- [X] **Integration with existing animation system**
  - [X] Hook dropdown `onChange` event to trigger animation sequence
  - [X] Update ChatBubbleAnimation component to accept dynamic question/response pairs
  - [X] Maintain existing animation timing and visual design
  - [X] Ensure smooth transitions between different Q&A selections

### 4.7 Expanded Content Implementation - Receiving Dock
- [X] **Multiple Q&A pairs setup**
  - [X] Q1: "Why is the raw material shipment delayed?" → "Shipment #482 from Supplier A is delayed due to a logistics hold at the port. Estimated arrival: Friday, 2 PM."
  - [X] Q2: "Which supplier has the best on-time delivery record?" → "Supplier B: 98% on-time deliveries over the last 6 months."
  - [X] Q3: "Do we have enough Ethylene stock to cover this week's production?" → "Yes, current Ethylene inventory is 3,500 kg, sufficient for 6 days at planned throughput."
- [X] **Content integration**
  - [X] Update ThreePanelDemo component with expanded question arrays
  - [X] Ensure consistent response length and formatting
  - [X] Maintain brand voice across all responses

### 4.8 Expanded Content Implementation - Production Floor
- [X] **Multiple Q&A pairs setup**
  - [X] Q1: "Why isn't the pump maintaining correct pressure?" → "Pump 3 in Unit 2 is running at 60% capacity due to a clogged filter. Replace filter cartridge."
  - [X] Q2: "What's the downtime trend for this machine?" → "This machine has logged 5 hours downtime in the past month, down 40% compared to last month."
  - [X] Q3: "Are there spare pump parts available?" → "Yes, 4 replacement filters and 2 spare pumps are in inventory."
- [X] **Content integration**
  - [X] Update scenario data structure for multiple questions
  - [X] Ensure technical accuracy of production-related responses
  - [X] Maintain conversational, helpful tone

### 4.9 Expanded Content Implementation - Business Meeting
- [X] **Multiple Q&A pairs setup**
  - [X] Q1: "What are our top chemical orders this month and due dates?" → "Top 3 orders: Order #2205 (Polyethylene, Sept 25), #2207 (Methanol, Sept 28), #2208 (Styrene, Oct 2)."
  - [X] Q2: "Which customers contribute the most revenue this quarter?" → "Top 3 customers: ChemCo ($1.2M), Plastix ($900K), GreenChem ($750K)."
  - [X] Q3: "How has production efficiency changed month-over-month?" → "Overall efficiency improved from 82% in August to 88% in September."
- [X] **Content integration**
  - [X] Update business scenario with executive-level questions
  - [X] Format financial and performance data consistently
  - [X] Ensure professional, data-driven response tone

### 4.10 User Experience Enhancement
- [X] **Interaction flow optimization**
  - [X] Default state: Illustration + dropdown with question options
  - [X] Selection trigger: Dropdown onChange → animation sequence start
  - [X] Animation sequence: Selected question types → loading → response appears
  - [X] Reset functionality: Allow users to select different questions
- [X] **Mobile optimization**
  - [X] Ensure dropdown is touch-friendly on mobile devices
  - [X] Optimize spacing and sizing for smaller screens
  - [X] Test dropdown behavior across different mobile browsers
  - [X] Maintain animation performance on mobile devices

### 4.11 Component Architecture Updates
- [X] **Data structure refactoring**
  - [X] Update demoScenarios array to support multiple Q&A pairs per scenario
  - [X] Implement question selection state management
  - [X] Create reusable dropdown component for consistency
  - [X] Ensure backward compatibility with existing animation system
- [X] **Performance optimization**
  - [X] Lazy load animation sequences to improve initial page load
  - [X] Optimize component re-renders when switching between questions
  - [X] Implement proper cleanup for animation timers
  - [X] Test performance with all 9 Q&A combinations

---

## Phase 5: Call to Action Section

### 5.1 CTA Design
- [X] **Section styling**
  - [X] Highlighted background section
  - [X] Use Takt Orange or Takt Green as accent
  - [X] Curved edges and soft corners
  - [X] Generous padding and white space
- [X] **Content hierarchy**
  - [X] Headline: "Join the wave of next-gen manufacturing."
  - [X] Subtext: "Many have already signed up to Takt—don't miss out."
  - [X] Clear visual hierarchy with typography

### 5.2 Form Implementation
- [X] **Form fields**
  - [X] Email input (required, with validation)
  - [X] Company Name input (required)
  - [X] Proper form labels and accessibility
  - [X] Input styling consistent with brand
- [X] **Submit button**
  - [X] Text: "Sign Up"
  - [X] Rounded, prominent styling
  - [X] Takt Orange background (`#E16809`)
  - [X] Hover state with Amber Orange (`#CC7A00`)
  - [X] Loading state during submission
- [X] **Form validation**
  - [X] Email format validation
  - [X] Required field validation
  - [X] Error message styling
  - [X] Success confirmation display

### 5.3 Form Backend Integration
- [X] **Azure integration setup**
  - [X] Create Azure Function for form processing
  - [X] Set up Azure Storage Table for email collection
  - [X] Configure CORS for frontend requests
  - [X] Implement proper error handling
- [X] **Success handling**
  - [X] Confirmation message: "Thanks for your interest, you will hear from us soon."
  - [X] Form reset after successful submission
  - [X] Optional: Email confirmation to user

---

## Phase 6: Email Storage & Backend Setup

### 6.1 Azure Storage Solution ✅
- [x] **Azure Table Storage (Recommended)**
  - [x] Create Storage Account in existing resource group
  - [x] Set up Table Storage for structured email data
  - [x] Configure table schema: Email, CompanyName, Timestamp, Source
  - [x] More cost-effective than Blob Storage for structured data
  - [x] Better querying capabilities for email lists

### 6.2 Azure Functions Setup ✅
- [x] **Function creation**
  - [x] HTTP trigger function for form submissions
  - [x] Input validation and sanitization
  - [x] Rate limiting to prevent spam
  - [x] Error logging and monitoring
- [x] **Integration configuration**
  - [x] Connect to Table Storage
  - [x] Configure environment variables
  - [x] Set up CORS for website domain
  - [x] Test function deployment

### 6.3 Optional Email Services
- [ ] **Azure Communication Services**
  - [ ] Set up if auto-confirmation emails needed
  - [ ] Configure email templates
  - [ ] SMTP configuration
- [ ] **Future newsletter integration**
  - [ ] Plan for Mailchimp/SendGrid integration
  - [ ] Export functionality from Azure Storage
  - [ ] GDPR compliance considerations

---

## Phase 7: Chat Animation Development

### 7.1 Animation Library Setup
- [ ] **Library selection and installation**
  - [ ] Install `react-typed` for typing effects (or build custom)
  - [ ] Add animation utilities (Framer Motion optional)
  - [ ] Configure animation dependencies
  - [ ] Test library compatibility with existing setup
- [ ] **Animation timing configuration**
  - [ ] Typing speed: ~50-80ms per character
  - [ ] Pause after question: ~500ms
  - [ ] Loading dots duration: ~1000ms
  - [ ] Response appearance: smooth fade-in (~300ms)

### 7.2 Chat Bubble Component Development
- [ ] **Base ChatBubbleAnimation component**
  - [ ] Props: question, response, isActive, onComplete
  - [ ] State management for animation sequence
  - [ ] Event handlers for hover/tap triggers
  - [ ] Reset functionality for repeated interactions
- [ ] **Styling implementation**
  - [ ] Question bubble: Takt Orange (`#E16809`) background
  - [ ] Response bubble: White with subtle shadow
  - [ ] Takt logo pill integration in response bubble
  - [ ] Consistent padding, margins, and typography
  - [ ] Mobile-responsive bubble sizing

### 7.3 Animation Sequence Logic
- [ ] **State machine implementation**
  - [ ] States: idle, typing, sent, loading, response, complete
  - [ ] Transition triggers and timing
  - [ ] Error handling and fallback states
  - [ ] Memory cleanup and performance optimization
- [ ] **Interactive behaviors**
  - [ ] Desktop: Hover to start, mouse leave to reset
  - [ ] Mobile: Tap to start, tap outside or timeout to reset
  - [ ] Keyboard accessibility (Enter key trigger)
  - [ ] Screen reader compatibility

### 7.4 Content Integration
- [ ] **Question and response content**
  - [ ] Finalize exact wording for all three scenarios
  - [ ] Ensure brand voice consistency (conversational, jargon-free)
  - [ ] Optimize text length for animation timing
  - [ ] Add subtle personality to responses
- [ ] **Loading indicator design**
  - [ ] Three animated dots in Takt Green (`#3E553C`)
  - [ ] Pulsing or bouncing animation
  - [ ] Consistent with overall design system
  - [ ] Accessible alternative text

---

## Phase 8: Brand Consistency Validation

### 8.1 Design System Compliance
- [ ] **Color palette verification**
  - [ ] Takt Orange (`#E16809`) - primary actions
  - [ ] Takt Green (`#3E553C`) - secondary elements
  - [ ] Iron Grey (`#322E2D`) - text
  - [ ] Canvas Cream (`#F7F3E9`) - backgrounds
  - [ ] Accent colors used appropriately
- [ ] **Typography consistency**
  - [ ] Poppins font family throughout
  - [ ] Bold for headers, Regular for body text
  - [ ] Proper font size hierarchy
  - [ ] Readable line spacing and contrast

### 8.2 Visual Language Adherence
- [ ] **Brand principles implementation**
  - [ ] Curved edges and soft corners on all elements
  - [ ] Generous white space throughout
  - [ ] Subtle shadows and gradients
  - [ ] Purposeful, smooth animations
- [ ] **Tone and voice consistency**
  - [ ] Friendly, professional, conversational copy
  - [ ] Jargon-free explanations
  - [ ] Educational and inclusive approach
  - [ ] Warm, welcoming feeling

---

## Phase 9: Responsive Design & Testing

### 9.1 Device Compatibility
- [ ] **Desktop optimization**
  - [ ] 1920px+ displays
  - [ ] Proper scaling for large screens
  - [ ] Hover states and interactions
- [ ] **Tablet optimization**  
  - [ ] 768px-1024px breakpoints
  - [ ] Touch-friendly interactions
  - [ ] Adjusted spacing and sizing
- [ ] **Mobile optimization**
  - [ ] 320px-767px breakpoints
  - [ ] Stack panels vertically
  - [ ] Larger touch targets
  - [ ] Optimized form inputs

### 9.2 Performance Testing
- [ ] **Loading speed optimization**
  - [ ] Image compression and optimization
  - [ ] Lazy loading for images and videos
  - [ ] Minimize CSS and JavaScript
  - [ ] CDN configuration for assets
- [ ] **Cross-browser testing**
  - [ ] Chrome, Firefox, Safari, Edge
  - [ ] Mobile browsers (iOS Safari, Chrome Mobile)
  - [ ] Fallback handling for older browsers

---

## Phase 10: Accessibility & SEO

### 10.1 Accessibility Compliance
- [ ] **WCAG 2.1 AA compliance**
  - [ ] Color contrast ratios meet standards
  - [ ] Keyboard navigation support
  - [ ] Screen reader compatibility
  - [ ] Alt text for all images
- [ ] **Form accessibility**
  - [ ] Proper labels and ARIA attributes
  - [ ] Error message associations
  - [ ] Focus management
  - [ ] Required field indicators

### 10.2 SEO Optimization
- [ ] **Meta tags and structure**
  - [ ] Page title, description, keywords
  - [ ] Open Graph tags for social sharing
  - [ ] Structured data markup
  - [ ] Proper heading hierarchy (H1, H2, etc.)
- [ ] **Content optimization**
  - [ ] Descriptive alt text for images
  - [ ] Semantic HTML structure
  - [ ] Fast loading times
  - [ ] Mobile-friendly design

---

## Phase 11: Deployment & Integration

### 11.1 Azure Static Web Apps Configuration
- [ ] **Build configuration updates**
  - [ ] Update build commands for new components
  - [ ] Configure environment variables
  - [ ] Set up staging environment for testing
- [ ] **Azure Functions integration**
  - [ ] Deploy form processing function
  - [ ] Configure API routes
  - [ ] Test end-to-end functionality

### 11.2 Domain & SSL Verification
- [ ] **Production deployment**
  - [ ] Deploy to taktconnect.com
  - [ ] Verify SSL certificate
  - [ ] Test HTTPS redirects
  - [ ] Confirm CDN performance

---

## Phase 12: Testing & Quality Assurance

### 12.1 Functional Testing
- [ ] **User journey testing**
  - [ ] Complete website navigation
  - [ ] Video modal functionality
  - [ ] Form submission process
  - [ ] Success/error message display
- [ ] **Cross-device testing**
  - [ ] Desktop browsers (Chrome, Firefox, Safari, Edge)
  - [ ] Mobile devices (iOS, Android)
  - [ ] Tablet devices
  - [ ] Different screen resolutions

### 12.2 Content Review
- [ ] **Copy editing**
  - [ ] Proofread all text content
  - [ ] Verify brand voice consistency
  - [ ] Check for typos and grammar
  - [ ] Confirm technical accuracy
- [ ] **Visual review**
  - [ ] Image quality and optimization
  - [ ] Color consistency across devices
  - [ ] Typography rendering
  - [ ] Animation smoothness

---

## Success Criteria

✅ **Website transformation** from landing page to full company site  
✅ **Brand consistency** maintained across all elements  
✅ **Interactive chat animations** with hover/tap functionality working  
✅ **Email collection** system functional with Azure backend  
✅ **Mobile responsiveness** across all devices  
✅ **Performance optimization** meets web standards  
✅ **Accessibility compliance** WCAG 2.1 AA  
✅ **Cross-browser compatibility** verified  

---

## Recommended Animation Libraries & Setup

**Primary Recommendation: Custom Typing Effect + CSS Animations**
- ✅ Full control over animation timing and behavior
- ✅ Lightweight and performant
- ✅ Perfect integration with Tailwind CSS
- ✅ No external dependencies
- ✅ Easy to customize for brand requirements

**Alternative: React-Typed Library**
- ✅ Quick implementation for typing effects
- ✅ Good browser support
- ✅ Customizable speed and behavior
- ⚠️ Additional dependency (~10KB gzipped)

**Technical Specifications:**
- Typing Speed: 50-80ms per character
- Animation Duration: ~3-4 seconds total per sequence
- CSS Transitions: 200-300ms for smooth effects
- State Management: React useState with useEffect
- Touch Events: onClick for mobile, onMouseEnter/Leave for desktop
- Accessibility: ARIA labels and keyboard support

**Performance Considerations:**
- Animations should be GPU-accelerated (transform/opacity)
- Use CSS transitions over JavaScript animations where possible
- Implement proper cleanup to prevent memory leaks
- Test on lower-end mobile devices

---

## Email Storage Recommendation

**Primary Recommendation: Azure Table Storage**
- ✅ Cost-effective for structured data
- ✅ Better than Blob Storage for queryable email lists
- ✅ Integrates well with Azure Functions
- ✅ Scalable and reliable
- ✅ Simple schema: Email, CompanyName, Timestamp, Source

**Implementation:**
1. Azure Storage Account (General Purpose v2)
2. Table Storage for email data
3. Azure Functions for form processing
4. Optional: Azure Communication Services for email confirmations

---

## Estimated Timeline

- **Phase 1-2**: 2-3 days (Setup & Header)
- **Phase 3**: 2-3 days (Hero Section)
- **Phase 4**: 4-5 days (Three-Panel Demo)
- **Phase 5**: 2-3 days (Call to Action)
- **Phase 6**: 2-3 days (Backend Setup)
- **Phase 7**: 2-3 days (Chat Animation Development)
- **Phase 8-12**: 3-4 days (Testing & QA)

**Total Estimated Time**: 17-24 days

---

## Cost Estimate (Monthly)

- Azure Static Web Apps: $0 (Free Tier)
- Azure Functions: $0-5 (Free tier: 1M requests/month)
- Azure Table Storage: $1-3 (per GB stored)
- Azure Communication Services: $0-10 (if email confirmations added)
- **Total Monthly Cost**: ~$1-18

---

## Notes

- All development follows Takt brand guidelines strictly
- Chat animations should feel natural and conversational
- Email collection system is GDPR-compliant ready
- Performance optimization is prioritized throughout
- Accessibility is built-in, not retrofitted
- Mobile-first responsive design approach
- Animations must be smooth on all devices and connection speeds
