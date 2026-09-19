# Walkthrough — Saakis Craft Gallery Premium Website

I have built a complete, high-fidelity premium frontend website for **Saakis Craft Gallery**. The project is designed with an artistic, editorial aesthetic that highlights photography and drives conversion through WhatsApp integration.

## 🚀 Key Features Implemented

### 1. Immersive Home Experience
- **Editorial Hero:** Large typography and background overlays using actual product imagery.
- **Trust Strip:** Highlights core brand values (100% Handmade, Made in Nashik).
- **Asymmetrical Categories:** Immersive grid presenting Dioramas, Diecast Displays, and Personalized Gifts.
- **How It Works:** A premium 4-step guide to the custom order process.
- **Social Integration:** A dedicated Instagram-style grid mirroring the business's actual social aesthetic.

### 2. Interactive Creations Portfolio
- **Filtering System:** Real-time category filtering (All, Dioramas, Gifts, etc.).
- **Immersive Lightbox:** A custom-built, full-screen viewer for product details, including keyboard navigation and mobile-friendly touch support.
- **Deep Linking:** Category filters are synced with the URL (e.g., `/creations?category=diecast`).

### 3. High-Conversion Custom Order Flow
- **Guided Form:** Captures specific customer needs (Budget, Required Date, Concept Details).
- **Dynamic WhatsApp Generation:** Automatically compiles form data into a professional, pre-filled WhatsApp message.
- **Success Interaction:** Includes a premium confetti blast effect on submission before redirecting to WhatsApp.

### 4. Reusable Premium Components
- **Glassmorphism Navbar:** Sticky navigation with backdrop blur and animated mobile drawer.
- **Global WhatsApp Trigger:** A floating "Inquire Now" button accessible from any page.
- **Typography-Focused Footer:** Comprehensive contact info, studio hours, and social links.

## 🎨 Design System
- **Palette:** Warm Ivory (`#fffdf9`), Espresso Brown (`#4a332d`), Terracotta (`#c86b51`), and Muted Gold.
- **Typography:** *Playfair Display* (Serif for headings) and *Inter* (Sans-serif for body).
- **Animations:** Subtle fade-up on scroll, smooth image reveal effects, and slow-zoom hero imagery.

## 🛠️ Tech Stack
- **React 18** (Functional components & Hooks)
- **Vite** (Build tool & Dev server)
- **Tailwind CSS** (Utility-first styling & custom design system)
- **Lucide React** (Artisan-friendly iconography)
- **React Router 6** (Client-side routing)

---

## Verification Results

- **Build Ready:** `package.json` and `vite.config.js` are configured for an immediate `npm install` and `npm run dev`.
- **Image Mapping:** All 19 images (`img1.jpg` to `img19.jpg`) are successfully mapped to authentic product titles and detailed descriptions in `src/data/products.js`.
- **Responsive:** Layouts are optimized for desktop, tablet, and mobile viewing.
