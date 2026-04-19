# 🎠 KUTTIES KINGDOM — FIGMA WEBSITE MASTER BUILD PROMPT
### Soft Play Zone | Chennai | Complete Design System & Page Spec

---

## 🎯 PROJECT OVERVIEW

**Client:** Kutties Kingdom — Soft Play Zone  
**Type:** Children's Indoor Play Area  
**Location:** No. 72/128, 1st Floor, Kamarajar Salai, Gandhi Nagar, Kodungaiyur, Chennai – 118  
**Target Audience:** Parents of children aged 2–12 years (Chennai, Kodungaiyur area)  
**Design Language:** Playful Maximalism — vibrant, joyful, safe, energetic  
**Device Targets:** Mobile-first (375px), Tablet (768px), Desktop (1440px)

---

## 🎨 DESIGN SYSTEM

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--royal-purple` | `#5B21B6` | Primary brand, nav bar, CTA sections |
| `--sunshine-yellow` | `#FBBF24` | Highlights, badges, star icons |
| `--bubblegum-pink` | `#F472B6` | Accents, hover states, tags |
| `--sky-blue` | `#38BDF8` | Cloud backgrounds, info sections |
| `--lime-green` | `#84CC16` | CTAs, success states, badges |
| `--candy-red` | `#EF4444` | Alerts, booking button, urgency |
| `--cloud-white` | `#FFFDF7` | Page background |
| `--deep-navy` | `#1E1B4B` | Body text, footer background |
| `--soft-peach` | `#FEF3C7` | Card backgrounds |
| `--rainbow-gradient` | `linear-gradient(90deg, #EF4444, #F97316, #FBBF24, #84CC16, #38BDF8, #818CF8, #F472B6)` | Decorative dividers, text highlights |

### Typography

| Role | Font | Weight | Notes |
|------|------|--------|-------|
| Display / Hero | **Fredoka One** | 900 | Rounded, bubbly — matches brand logo feel |
| Section Headings | **Nunito** | 800 | Friendly, highly legible |
| Body Text | **Nunito** | 400/600 | Warm, readable for parents |
| Badges / Labels | **Nunito** | 700 + uppercase | Compact info callouts |
| Price / Numbers | **Fredoka One** | 700 | Playful numerals |

### Iconography

Use **flat cartoon-style icons** (custom or from Storyset / Freepik flatpack sets):
- Slide, swing, castle, ball pit, socks, crown, rainbow, star, balloon icons
- Avoid flat Material or Lucide icons — they break the playful aesthetic
- All icons: thick stroke, rounded corners, saturated fills matching palette

### Spacing System

Base unit: **8px**  
Scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px  
Border radius: 
- Cards: `24px`
- Buttons: `999px` (pill shape)
- Badges: `12px`
- Images: `32px`

### Shadows

```
--shadow-soft:   0 4px 24px rgba(91, 33, 182, 0.12)
--shadow-card:   0 8px 40px rgba(91, 33, 182, 0.18)
--shadow-pop:    0 16px 64px rgba(251, 191, 36, 0.30)
--shadow-button: 0 6px 0px rgba(91, 33, 182, 0.40)   /* 3D push effect */
```

---

## 🗂️ FIGMA FILE STRUCTURE

```
📁 Kutties Kingdom Website
├── 📄 Cover Page (thumbnail)
├── 📁 Design System
│   ├── Colors
│   ├── Typography
│   ├── Spacing & Grid
│   ├── Components Library
│   └── Animation Notes
├── 📁 Mobile Frames (375px)
│   ├── 01 — Home
│   ├── 02 — About / Our World
│   ├── 03 — Activities
│   ├── 04 — Packages & Pricing
│   ├── 05 — Gallery
│   ├── 06 — Book Now
│   └── 07 — Contact & Map
├── 📁 Tablet Frames (768px)
│   └── [Key pages only: Home, Activities, Book Now]
├── 📁 Desktop Frames (1440px)
│   ├── 01 — Home
│   ├── 02 — About / Our World
│   ├── 03 — Activities
│   ├── 04 — Packages & Pricing
│   ├── 05 — Gallery
│   ├── 06 — Book Now
│   └── 07 — Contact & Map
└── 📁 Prototype Flow
    └── [Desktop full-scroll prototype]
```

---

## 📐 COMPONENT LIBRARY (Build These First)

### C01 — Navigation Bar
- **Height:** 80px desktop / 64px mobile
- **Background:** `--royal-purple` with slight blur (frosted glass on scroll)
- **Left:** Crown + "Kutties Kingdom" wordmark in Fredoka One (white + yellow crown icon)
- **Center (desktop):** Nav links — Home, Activities, Gallery, Packages, Book Now
- **Right:** "Book Now" pill CTA button in `--sunshine-yellow` with `--deep-navy` text
- **Mobile:** Hamburger → full-screen menu slides down with rainbow gradient strip
- **Scroll behavior:** Shrinks to 56px height, adds drop shadow

### C02 — Hero Section
- **Layout:** Full viewport height (100vh)
- **Background:** Sky gradient (`#C7F2FF` → `#E0BBFF`) with floating cloud SVGs
- **Animated elements:**
  - Clouds drift left-to-right (CSS animation, 20s infinite loop)
  - Rainbow arcs in from top on load (stroke-dashoffset animation)
  - Stars twinkle (opacity + scale pulse, staggered delays)
  - Balloons float upward gently (translateY loop)
- **Content:**
  - Pre-headline badge: `👑 Chennai's Favourite Soft Play Zone`
  - H1: "Welcome to Kutties Kingdom!" (Fredoka One, 72px desktop / 40px mobile)
  - Subtitle: "Where Every Day is Playday — Ages 2 to 12 Years"
  - Hours pill row: Mon–Fri 11AM–8PM | Sat–Sun 11AM–9PM
  - CTA: "🎉 Book Your Adventure" (pill button, lime-green, large, with bounce animation)
  - Secondary CTA: "📍 Find Us in Kodungaiyur"
- **Bottom decoration:** Wavy SVG divider in royal purple transitioning to next section
- **Floating cartoon kids** (PNG illustrations) positioned left & right of the hero text

### C03 — Info Strip / Marquee Banner
- **Style:** Horizontal scrolling ticker, `--royal-purple` background
- **Content repeating:** ⭐ SOCKS MANDATORY · 🎠 AGES 2–12 YEARS · 📞 CALL TO BOOK · 🕐 OPEN DAILY ·
- **Font:** Nunito Bold, white text, yellow star emojis
- **Animation:** Infinite left scroll (CSS marquee, 30s loop)

### C04 — "Our World" / About Section
- **Background:** `--cloud-white` with soft purple blob shapes (SVG decorative)
- **Layout (desktop):** 60/40 split — left text, right illustration
- **Left:** 
  - Section tag: `🏰 About Us`
  - H2: "A Magical Kingdom Built for Little Adventurers"
  - Body: 2 paragraphs about the play zone philosophy — safe, fun, parent-friendly
  - 3 icon + text trust badges: ✅ Safe Equipment · ✅ Trained Staff · ✅ Sanitised Daily
- **Right:** Large cartoon castle illustration / collage of kids playing
- **Mobile:** Stacked, illustration on top

### C05 — Activity Cards Grid
- **Section heading:** "🎪 What's Inside the Kingdom?"
- **Background:** Soft peach `--soft-peach`
- **Grid:** 3-column desktop / 2-column tablet / 1-column mobile
- **Each card:**
  - Rounded rect, white background, `--shadow-card`
  - Icon (large, 80px, cartoon-style)
  - Activity name (Nunito 700)
  - Short description (Nunito 400)
  - Color-coded top border strip (one per card — cycles through palette)
- **Activities to include:**
  1. 🛝 Giant Slides
  2. 🎳 Ball Pit
  3. 🧱 Foam Block Building
  4. 🚀 Astronaut Tunnel
  5. 🏰 Soft Castle Climb
  6. 🎨 Art Corner
  7. 🚗 Ride-Ons
  8. 🎪 Trampoline Zone
- **Hover state:** Card lifts (translateY -8px), shadow deepens, icon bounces

### C06 — Hours & Rules Section
- **Background:** `--royal-purple`
- **Layout:** Two column — Hours left, Rules right
- **Hours card:**
  - White card with `--shadow-pop`
  - "🕐 Opening Hours" heading
  - Mon–Fri: 11AM – 8PM
  - Sat–Sun: 11AM – 9PM (highlighted in yellow)
  - "OPEN DAILY" badge in lime green
- **Rules card:**
  - Same styling
  - "📋 Good to Know" heading
  - List: Socks mandatory · Ages 2–12 · No outside food · Adult supervision required · Sanitiser stations available
- **Floating star decorations** around both cards (CSS animated twinkle)

### C07 — Packages & Pricing Section
- **Heading:** "🎟️ Choose Your Adventure"
- **Background:** White with rainbow gradient top border (8px strip)
- **Card layout:** 3 pricing cards (desktop side by side, mobile stacked)
- **Card types:**
  | Package | Price (placeholder) | Duration | Highlight |
  |---------|---------------------|----------|-----------|
  | Kuttie Explorer | ₹XXX | 1 Hour | Best for first-timers |
  | Kuttie Champion | ₹XXX | 2 Hours | Most Popular 🔥 |
  | Kuttie Royal | ₹XXX | Full Day | Best Value 👑 |
- **"Most Popular" card:** Elevated with royal purple background + yellow badge + slight scale(1.05)
- **Each card:** Pill CTA "Book This" in lime green
- **Note below:** "Birthday party packages available — call to enquire!"

### C08 — Photo Gallery Section
- **Heading:** "📸 Peek Inside the Kingdom"
- **Layout:** Masonry grid (Pinterest-style) — 3 col desktop, 2 col tablet
- **Cells:** Rounded `32px`, aspect ratios vary (mix of square, portrait, landscape)
- **Hover:** Image brightens, overlay appears with play icon and caption
- **Bottom CTA:** "See More on Instagram → @KuttiesKingdom" (placeholder handle)
- **Note for designer:** Use placeholder stock images of kids in soft play areas

### C09 — Booking Section / CTA Banner
- **Full-width, high contrast**
- **Background:** `--candy-red` with confetti particle animation (JS canvas or Lottie)
- **Text:**
  - "Ready for the Fun?" (Fredoka One, white, large)
  - "Book your session now — weekends fill up fast!"
- **3 phone number buttons:** Pill-shaped, white background, red text
  - 📞 7829807717
  - 📞 7200007717
  - 📞 7904479774
- **WhatsApp CTA:** Green pill — "💬 Chat on WhatsApp"
- **Animation:** Confetti rains down continuously (subtle, CSS-based)

### C10 — Map & Contact Section
- **Background:** `--deep-navy`
- **Left (desktop):** Embedded Google Maps iframe (Kodungaiyur, Chennai)
- **Right:** Contact details card (white on dark)
  - 📍 Address block
  - 📞 Three phone numbers
  - 🕐 Hours reminder
  - "Get Directions" button → Google Maps link
- **Map card:** Rounded `24px`, border: 3px solid `--sunshine-yellow`

### C11 — Footer
- **Background:** `--deep-navy`
- **Top strip:** Rainbow gradient line (4px)
- **Logo + tagline left**
- **Quick links center:** Home · Activities · Gallery · Book Now · Contact
- **Contact right:** Address + phone
- **Bottom bar:** "© 2025 Kutties Kingdom · Made with ❤️ in Chennai"
- **Floating emoji decorations:** 🎠 🌈 ⭐ 👑

---

## ✨ ANIMATION SPEC

### Page Load Sequence (Hero)
```
0ms    → Nav slides in from top (translateY -100% → 0, ease-out, 400ms)
200ms  → Hero H1 fades + slides up (opacity 0→1, translateY 20px→0, 600ms)
400ms  → Subtitle appears (same motion)
600ms  → CTA buttons appear with bounce (scale 0.8→1.05→1.0, 500ms)
800ms  → Floating illustrations drift in from sides
1000ms → Rainbow arc draws in (stroke-dashoffset animation)
Continuous → Clouds drift, stars twinkle, balloons float
```

### Scroll Animations (Apply to All Sections)
- **Trigger:** Element enters viewport (Intersection Observer)
- **Default:** `opacity: 0, translateY: 30px` → `opacity: 1, translateY: 0` over `500ms ease-out`
- **Cards:** Staggered entrance — each card delayed by `100ms × index`
- **Section headings:** Slide in from left

### Micro-interactions
| Element | Interaction |
|---------|-------------|
| Nav links | Underline expands from center on hover |
| CTA Buttons | `translateY -3px` + shadow deepens on hover; `translateY +3px` on click (3D push) |
| Activity Cards | Float up 8px on hover + icon bounce |
| Phone buttons | Shake animation (wiggle) on hover |
| Gallery images | Scale 1.03 + brightness increase on hover |
| Marquee banner | Pauses on hover |

### Lottie / SVG Animations (Insert)
- Confetti burst on booking section
- Dancing crown icon (loop) in hero
- Balloon cluster floating upward
- Rainbow appearing (draw-on effect)

---

## 📱 RESPONSIVE BREAKPOINT RULES

### Desktop (1440px)
- Max content width: 1200px, centered
- Nav: horizontal links visible
- Hero: text left / illustration right
- Activity grid: 4 columns
- Pricing: 3 cards side by side

### Tablet (768px)
- Nav: condensed, hamburger appears
- Hero: centered, illustration below text
- Activity grid: 2 columns
- Pricing: scrollable horizontal cards

### Mobile (375px)
- Full-width sections, no side padding > 16px
- Hero: stacked, illustration hidden or small
- Activity grid: 1 column scroll
- Pricing: 1 card visible, swipeable carousel
- Phone numbers: tap-to-call links (tel:)
- Sticky bottom bar: "📞 Book Now" always visible

---

## 🧩 FIGMA PROTOTYPE FLOWS

### Flow 1: Home → Book Now
Home → Scroll → Click "Book Your Adventure" → Book Now section (anchor scroll)

### Flow 2: Mobile Navigation
Hamburger tap → Menu slides down → Tap "Activities" → Activities section

### Flow 3: Package Selection
Pricing section → Click "Book This" → Booking modal with package pre-selected

### Flow 4: Gallery Tap
Gallery grid → Tap image → Lightbox overlay with full image + caption

---

## 📋 FIGMA SETUP CHECKLIST

- [ ] Set up **Local Variables** for all color tokens
- [ ] Set up **Text Styles** for all 5 type roles
- [ ] Create **Effect Styles** for all 4 shadow levels
- [ ] Build all **C01–C11 components** as Figma components with variants
- [ ] Enable **Auto Layout** on all cards and sections
- [ ] Use **Smart Animate** for all prototype transitions
- [ ] Set **Prototype triggers** on all interactive elements
- [ ] Create **Component Variants** for button (default / hover / pressed / disabled)
- [ ] Create card variants (default / hover) for activity and pricing cards
- [ ] Export **SVG decoratives** (clouds, stars, rainbow, blobs) as separate layers
- [ ] Tag all frames with correct breakpoint in frame name (e.g., `[D] Hero`, `[M] Hero`)

---

## 🧸 CONTENT CHECKLIST (Fill Before Handoff)

- [ ] Final pricing for 3 packages
- [ ] Real gallery photos from the play zone
- [ ] Instagram handle / social links
- [ ] WhatsApp number for chatbot link
- [ ] Google Maps embed URL (verified location pin)
- [ ] Logo file (vector preferred, PNG with transparency minimum)
- [ ] Any birthday party package details

---

## 🎁 BONUS: FIGMA PLUGIN RECOMMENDATIONS

| Plugin | Purpose |
|--------|---------|
| **Unsplash** | Placeholder child/play area stock images |
| **LottieFiles** | Insert confetti, crown, balloon animations |
| **Storyset** | Free cartoon-style kid illustrations |
| **Font Scale** | Verify type scale is harmonious |
| **Color Contrast Checker** | Ensure WCAG AA for text readability |
| **Anima** | Export to HTML/CSS with animations intact |
| **Figmotion** | Build scroll-triggered animations inside Figma |

---

## 🚀 DEVELOPER HANDOFF NOTES

When handing off to the developer:
- All animations should be implemented in **CSS + minimal JS** (no heavy libraries)
- Phone numbers must be `<a href="tel:XXXXXXXXXX">` on mobile
- WhatsApp link: `https://wa.me/917829807717`
- Socks mandatory notice should appear in sticky header on mobile
- Map embed: Google Maps iframe with the address pre-pinned
- All images: WebP format, lazy-loaded
- Fonts: Load from Google Fonts (Fredoka One + Nunito)
- Performance target: Lighthouse score > 85 on mobile

---

*Master Prompt Version 1.0 | Kutties Kingdom | April 2025*  
*Prepared for: Figma Design Implementation*