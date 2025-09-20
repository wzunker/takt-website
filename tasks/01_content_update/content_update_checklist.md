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
- [ ] **Primary headline**
  - [ ] Text: "Your fire-fighting squad for every hair-on-fire moment."
  - [ ] Use Poppins Bold font
  - [ ] Apply Takt Orange (`#E16809`) accent color strategically
  - [ ] Ensure readable typography hierarchy
- [ ] **Supporting subtext**
  - [ ] Text: "Takt is a purpose-built AI retrieval engine for production teams—turning every input into output, delivering perfect, accurate, relevant info at your fingertips."
  - [ ] Use Poppins Regular font
  - [ ] Apply Iron Grey (`#322E2D`) color
  - [ ] Maintain conversational, friendly tone

### 3.2 Visual Design
- [ ] **Layout and spacing**
  - [ ] Center-aligned content
  - [ ] Generous white space around text
  - [ ] Responsive design for mobile/tablet/desktop
  - [ ] Smooth transitions and animations
- [ ] **Brand integration**
  - [ ] Incorporate delta symbol (δ) subtly if appropriate
  - [ ] Use warm, inviting color scheme
  - [ ] Apply curved edges to any design elements
  - [ ] Ensure accessibility compliance

---

## Phase 4: Three-Panel Demo Section

### 4.1 Section Structure
- [ ] **Section headline**
  - [ ] Text: "See Takt in Action"
  - [ ] Poppins Bold, prominent sizing
  - [ ] Proper spacing from hero section
- [ ] **Panel grid layout**
  - [ ] Three equal-width cards on desktop
  - [ ] Stack vertically on mobile
  - [ ] Consistent spacing between panels
  - [ ] Hover effects and interactions

### 4.2 Panel Content - Receiving Dock
- [ ] **Visual elements**
  - [ ] Use `loading_dock.png` as hero image
  - [ ] Apply low-poly aesthetic consistency
  - [ ] Optimize image for web performance
- [ ] **Interactive chat animation**
  - [ ] Question: "Why is the raw material shipment delayed?"
  - [ ] Response: "Shipment #482 from Supplier A is delayed due to a logistics hold at the port. Estimated arrival: Friday, 2 PM."
  - [ ] Hover-triggered typing animation
  - [ ] Chat bubble sequence: typing → send → loading → response
  - [ ] Mobile tap functionality for touch devices

### 4.3 Panel Content - Production Floor
- [ ] **Visual elements**
  - [ ] Use `machine_maintenance.png` as hero image
  - [ ] Maintain visual consistency with other panels
  - [ ] Ensure image quality and optimization
- [ ] **Interactive chat animation**
  - [ ] Question: "Why isn't the pump maintaining correct pressure?"
  - [ ] Response: "Pump 3 in Unit 2 is running at 60% capacity due to a clogged filter. Replace filter cartridge."
  - [ ] Hover-triggered typing animation
  - [ ] Chat bubble sequence: typing → send → loading → response
  - [ ] Mobile tap functionality for touch devices

### 4.4 Panel Content - Business Meeting
- [ ] **Visual elements**
  - [ ] Use `business_meeting.png` as hero image
  - [ ] Consistent styling with other panels
  - [ ] Professional, warm appearance
- [ ] **Interactive chat animation**
  - [ ] Question: "What are our top chemical orders this month and due dates?"
  - [ ] Response: "Top 3 orders: Order #2205 (Polyethylene, Sept 25), #2207 (Methanol, Sept 28), #2208 (Styrene, Oct 2)."
  - [ ] Hover-triggered typing animation
  - [ ] Chat bubble sequence: typing → send → loading → response
  - [ ] Mobile tap functionality for touch devices

### 4.5 Chat Animation System
- [ ] **Animation sequence design**
  - [ ] Default state: Illustration + question overlay
  - [ ] Hover/tap trigger: Typing animation starts
  - [ ] Question appears character by character (~1s duration)
  - [ ] Question bubble "sends" with subtle animation
  - [ ] Loading indicator: 3 animated dots (~1s)
  - [ ] Response bubble appears with answer
- [ ] **Chat bubble styling**
  - [ ] Question bubble: Takt Orange background (`#E16809`)
  - [ ] Response bubble: White background with Takt logo pill
  - [ ] Rounded corners following brand guidelines
  - [ ] Proper spacing and typography (Poppins font)
- [ ] **Technical implementation**
  - [ ] React state management for animation sequence
  - [ ] Custom typing effect or `react-typed` library
  - [ ] Smooth CSS transitions and animations
  - [ ] Touch-friendly mobile interactions
  - [ ] Reset animation on mouse leave (desktop)

---

## Phase 5: Call to Action Section

### 5.1 CTA Design
- [ ] **Section styling**
  - [ ] Highlighted background section
  - [ ] Use Takt Orange or Takt Green as accent
  - [ ] Curved edges and soft corners
  - [ ] Generous padding and white space
- [ ] **Content hierarchy**
  - [ ] Headline: "Join the wave of next-gen manufacturing."
  - [ ] Subtext: "Many have already signed up to Takt—don't miss out."
  - [ ] Clear visual hierarchy with typography

### 5.2 Form Implementation
- [ ] **Form fields**
  - [ ] Email input (required, with validation)
  - [ ] Company Name input (required)
  - [ ] Proper form labels and accessibility
  - [ ] Input styling consistent with brand
- [ ] **Submit button**
  - [ ] Text: "Sign Up"
  - [ ] Rounded, prominent styling
  - [ ] Takt Orange background (`#E16809`)
  - [ ] Hover state with Amber Orange (`#CC7A00`)
  - [ ] Loading state during submission
- [ ] **Form validation**
  - [ ] Email format validation
  - [ ] Required field validation
  - [ ] Error message styling
  - [ ] Success confirmation display

### 5.3 Form Backend Integration
- [ ] **Azure integration setup**
  - [ ] Create Azure Function for form processing
  - [ ] Set up Azure Storage Table for email collection
  - [ ] Configure CORS for frontend requests
  - [ ] Implement proper error handling
- [ ] **Success handling**
  - [ ] Confirmation message: "Thanks for your interest, you will hear from us soon."
  - [ ] Form reset after successful submission
  - [ ] Optional: Email confirmation to user

---

## Phase 6: Email Storage & Backend Setup

### 6.1 Azure Storage Solution
- [ ] **Azure Table Storage (Recommended)**
  - [ ] Create Storage Account in existing resource group
  - [ ] Set up Table Storage for structured email data
  - [ ] Configure table schema: Email, CompanyName, Timestamp, Source
  - [ ] More cost-effective than Blob Storage for structured data
  - [ ] Better querying capabilities for email lists
- [ ] **Alternative: Azure Cosmos DB**
  - [ ] Consider if advanced querying needed
  - [ ] Higher cost but more features
  - [ ] JSON document storage

### 6.2 Azure Functions Setup
- [ ] **Function creation**
  - [ ] HTTP trigger function for form submissions
  - [ ] Input validation and sanitization
  - [ ] Rate limiting to prevent spam
  - [ ] Error logging and monitoring
- [ ] **Integration configuration**
  - [ ] Connect to Table Storage
  - [ ] Configure environment variables
  - [ ] Set up CORS for website domain
  - [ ] Test function deployment

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
