# Harsh Vashishtha — Personal Portfolio Website

This repository contains the source code for the personal portfolio website of **Harsh Vashishtha** — AI Developer, Agent Builder, and Founder of Haqikos. 

The website is a modern, modular, multi-page static site built with HTML, CSS, and JavaScript. It features a stunning, clean aesthetic with glassmorphism elements, custom typography, and a fully responsive layout.

## 🚀 Live Demo
harshvashishtha.space

## 📂 Project Structure

The project was recently refactored from a monolithic single-page application into a clean, modular multi-page architecture:

```text
├── index.html        # Home / Landing Page (Hero, About, Testimonials)
├── about.html        # Dedicated About & Skills page
├── projects.html     # Dedicated Projects showcase
├── services.html     # Services & Pricing offerings
├── contact.html      # Contact information & Social links
├── css/
│   └── style.css     # Global styles, variables, and responsive layout rules
├── js/
│   └── main.js       # Global scripts (Mobile menu, active links, scroll-to-top)
└── README.md         # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup for structure.
- **Vanilla CSS3**: Custom properties (CSS variables), Flexbox, CSS Grid, and responsive media queries. Zero heavy CSS frameworks used.
- **Vanilla JavaScript**: Lightweight DOM manipulation for the mobile menu and active state handling.
- **Google Fonts**: 
  - *Instrument Serif* for elegant, striking headlines.
  - *DM Sans* for clean, legible body text.
- **Tabler Icons**: Used via CDN for sharp, consistent iconography.

## 💻 How to Run Locally

Since this is a static website, you do not need any complex build tools to run it. 

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harsh-Vashishtha-G/<repo-name>.git
   cd "Harsh Vashishtha Website"
   ```

2. **Serve the files:**
   You can use any local web server. If you have Node.js installed, you can use `serve`:
   ```bash
   npx serve .
   ```
   *Alternatively, if you have Python installed:*
   ```bash
   python -m http.server 8000
   ```

3. **View in Browser:**
   Open `http://localhost:3000` (or the port provided by your server) to view the site.

## 🚀 Vercel Deployment

This site is already configured for deployment on Vercel using `vercel.json`.

- `cleanUrls: true` enables pretty URLs like `/about` instead of `/about.html`
- `trailingSlash: false` prevents unnecessary trailing slashes
- `rewrites` map clean routes to the corresponding static HTML files
- `headers` add basic security headers for all responses

To deploy with the Vercel CLI:

```bash
npm install -g vercel
vercel login
vercel
```

If you already use Vercel for this project, just run `vercel --prod` to publish the site live.

## 🎨 Design Highlights

- **Dynamic Navigation:** The navigation bar intelligently calculates padding using `calc()` to perfectly align its contents with the `1100px` max-width container of the page, ensuring it never stretches too wide on ultra-wide monitors.
- **Active Route Highlighting:** `main.js` automatically detects the current page URL and highlights the corresponding navigation link.
- **Sticky Footer:** The CSS uses a flexbox `body` and `main { flex: 1; }` approach to ensure the footer always sticks to the bottom of the screen, even on pages with minimal content.
- **Fully Responsive:** Smoothly transitions into a mobile-friendly hamburger menu and stackable grid layouts on screens smaller than `768px`.

## 🤝 Contact

- **Email:** vashishthaharsh97@gmail.com
- **Haqikos Email:** haqikos.ai@gmail.com
- **LinkedIn:** [linkedin.com/in/theharshvashishtha](https://linkedin.com/in/theharshvashishtha)
- **GitHub:** [github.com/Harsh-Vashishtha-G](https://github.com/Harsh-Vashishtha-G)
- **YouTube:** [youtube.com/@TheHarshVashishtha](https://youtube.com/@TheHarshVashishtha)
- **X:** [x.com/TheHVashishtha](https://x.com/TheHVashishtha)

---
*Designed and built by Harsh Vashishtha. © 2026 All rights reserved.*
