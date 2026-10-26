# KULTUR | D2C Streetwear & Culture Collective

> A production-grade, high-converting Indian D2C streetwear storefront engineered by analyzing and synthesizing design patterns, conversion triggers, and architecture from India's top 6 streetwear brands: **Bluorng, Snitch, Bonkers Corner, Capsul, Bewakoof, and The Souled Store**.

🌐 **Live Demo on Vercel:** [https://culture-streetwear-d2c.vercel.app](https://culture-streetwear-d2c.vercel.app)  
📦 **GitHub Repository:** [https://github.com/AMIT02019/culture-streetwear-d2c](https://github.com/AMIT02019/culture-streetwear-d2c)

---

## 🎨 Architectural & Design References from Each Brand

| Brand | Reference & Feature Integrated |
|---|---|
| **Bluorng** | **Brutalist Editorial Aesthetic & Heavy Textiles**: Anton display typography, high-contrast dark visual tones, drop counter (`Archive Drop 08`), and granular textile specs (380 GSM loopback French Terry, 0% shrink bio-washed). |
| **Snitch** | **Dual-Image Hover Flip & Urban Cuts**: Smooth 3:4 portrait product cards with alternate rear model photo on hover, sharp discount percentage flags, and crossed-out MRP comparisons. |
| **Bonkers Corner** | **Instant Quick-Size Drawer**: Hover size selector (`S`, `M`, `L`, `XL`, `XXL`) embedded directly on product cards allowing 1-click cart addition without navigating away. |
| **Capsul** | **Subculture Marquee Ticker & Curation**: Infinite ticker tape highlighting drops, express shipping, and subculture authentications. |
| **Bewakoof** | **Instagram Story-Style Category Bubbles**: Horizontal scrollable category pill scroller (`All Drops`, `Oversized Tees`, `380 GSM Hoodies`, `Parachute Cargos`, `Jacquard Knits`) with instant zero-reload reactive filtering. |
| **The Souled Store** | **Interactive Slide-Over Cart Drawer**: Free shipping threshold progress bar (`Add ₹X more to unlock FREE Express Shipping`), quantity counters, coupon code engine (`STREET20`), and GoKwik/Simpl 1-click simulated checkout. |

---

## ⚡ Features & Conversion Triggers

1. **Free Shipping Gamification**: Dynamic progress bar that recalculates in real-time as users add or remove items.
2. **Instant Search Modal**: Real-time search as you type, with clickable quick-tags (`Acid Wash`, `380 GSM`, `Parachute`, `Puff Print`).
3. **Product Quick View**: Modal displaying high-resolution gallery, comprehensive garment specs, size guides, and direct bag additions.
4. **Wishlist Sync**: Persistent wishlist with local storage synchronization and header badge counter.
5. **1-Click Checkout Simulation**: Realistic GoKwik fast checkout flow with mobile number input, address confirmation, UPI/COD selector, and instant order confirmation.
6. **Toast Feedback**: Interactive toast notifications for all user micro-interactions.
7. **Mobile-First Responsive**: Custom breakpoints tailored for iOS Safari and Android Chrome viewports.

---

## 🛠 Local Setup & Development

```bash
# Clone the repository
git clone https://github.com/AMIT02019/culture-streetwear-d2c.git

# Enter project directory
cd culture-streetwear-d2c

# Run local preview server
npx serve .
# Or simply open index.html in any modern browser
```

---

## 🚀 Deployment
Deployed seamlessly to **Vercel** with automatic CDN edge caching and clean URLs.
