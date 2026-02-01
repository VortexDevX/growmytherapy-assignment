# Dr. Maya Reynolds, PsyD | Therapy Practice Website

A professional therapy practice website built for **Dr. Maya Reynolds, PsyD** - a licensed clinical psychologist based in Santa Monica, CA. This project was created as part of the **GrowMyTherapy Stage 2 Assignment**.

---

## 🌐 Live Demo

- **Live Website:** `<LIVE LINK>`
- **GitHub Repository:** `https://github.com/VortexDevX/growmytherapy-assignment`
- **Video Walkthrough (Loom):** `<VIDEO LINK>`

---

## 📌 Project Overview

This assignment involved:

1. **Cloning** the [Lilac Squarespace Template](https://lilac-template.squarespace.com/) homepage with high UI accuracy
2. **Redesigning** with Dr. Maya Reynolds' profile as the single source of truth
3. **Applying** a new theme, color palette, typography, and copy
4. **Adding** a new custom section: **Our Office**
5. Creating a professional, responsive, SEO-optimized website

---

## 🛠 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

---

## 🎨 Design Decisions

### Color Palette

| Role         | Color           | Hex       |
| ------------ | --------------- | --------- |
| Primary      | Sage Green      | `#5B7B6F` |
| Primary Dark | Deep Sage       | `#3D5A4C` |
| Secondary    | Warm Cream      | `#F5F1EB` |
| Accent       | Soft Terracotta | `#C4A484` |
| Text Primary | Charcoal        | `#2D2D2D` |
| Dark Section | Deep Forest     | `#2C3E35` |

The sage green palette was chosen to evoke feelings of **calm, safety, and grounding** - essential qualities for a therapy practice. The warm cream and soft accents add approachability without sacrificing professionalism.

### Typography

- **Headings:** Playfair Display (serif) - Warm, trustworthy, professional
- **Body:** Inter (sans-serif) - Highly readable, modern, clean

### Accessibility

- ✅ Semantic HTML5 elements (header, nav, main, section, footer)
- ✅ ARIA labels for interactive elements
- ✅ 4.5:1 contrast ratio for body text
- ✅ Keyboard navigable
- ✅ Skip-to-content link
- ✅ Alt text for all images
- ✅ Focus states on interactive elements

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Design system & global styles
│   ├── layout.tsx       # Root layout with SEO meta tags
│   └── page.tsx         # Homepage composition
├── components/
│   ├── Header.tsx       # Responsive navigation
│   ├── Hero.tsx         # Hero section with arch image
│   ├── Introduction.tsx # Two-column intro section
│   ├── Specialties.tsx  # 3-column service cards
│   ├── SpecialtyCard.tsx
│   ├── PainPoints.tsx   # Image + symptom list
│   ├── About.tsx        # Therapist bio section
│   ├── FAQ.tsx          # Accordion FAQ
│   ├── OurOffice.tsx    # NEW section - office showcase
│   ├── FinalCTA.tsx     # Dark section CTA
│   ├── Footer.tsx       # 3-column footer
│   └── Button.tsx       # Reusable button component
public/
└── images/              # Optimized images
```

---

## ✅ Assignment Checklist

### Part 1 – Homepage Clone (UI Accuracy)

- [x] Recreated layout, spacing, and section order from Lilac template
- [x] Matched grid systems and typography hierarchy
- [x] Responsive across desktop, tablet, and mobile
- [x] Used reusable Tailwind utility patterns

### Part 2 – Redesign Using Dr. Maya Reynolds' Profile

- [x] All copy derived from therapist profile
- [x] SEO-optimized H1: "Santa Monica Psychologist for Anxiety, Trauma & Burnout"
- [x] Three services with location keywords (Anxiety, Trauma, Burnout)
- [x] About section with therapist bio
- [x] FAQ section with relevant questions

### Part 3 – Theme & Visual Design

- [x] Replaced lilac palette with sage green theme
- [x] New typography (Playfair Display + Inter)
- [x] Consistent colors across all sections
- [x] Maintained readability and visual balance

### Part 4 – Images

- [x] All template images replaced
- [x] Therapist portrait added
- [x] Office images from profile included
- [x] Descriptive alt text for all images

### Part 5 – New Section (Our Office)

- [x] Created "A Calm Space for Healing" section
- [x] Office description with privacy/comfort messaging
- [x] 2 office images displayed
- [x] In-person + telehealth availability mentioned

---

## ▶️ How to Run Locally

**Prerequisites:** Node.js 18+

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📝 Commit History Summary

1. `chore: initialize Next.js + Tailwind project`
2. `feat: add design system and global styles`
3. `feat: implement Header and navigation`
4. `feat: add Hero section with SEO-optimized H1`
5. `feat: add Introduction and Specialties sections`
6. `feat: add PainPoints and About sections`
7. `feat: add FAQ with accordion`
8. `feat: add Our Office section (creative addition)`
9. `feat: add Final CTA and Footer`
10. `style: responsive adjustments and polish`
11. `docs: update README with project details`

---

## 🙏 Closing Note

Thank you for reviewing my assignment. I aimed to demonstrate:

- **Technical skills** - Clean, component-based architecture with TypeScript
- **Design sensitivity** - Calm, professional aesthetic appropriate for therapy
- **Copywriting ability** - SEO-optimized, profile-derived content
- **Attention to detail** - Accessibility, responsiveness, and visual polish

This reflects how I would approach real client projects at Grow My Therapy.

---

© 2026 Dr. Maya Reynolds, PsyD - Assignment Submission
