# 🚀 IT Undergraduate Portfolio — [Your Name]

A modern, professional personal portfolio website built with **HTML5 + Tailwind CSS + JavaScript**.

---

## 📁 Project Structure

```
portfolio/
├── index.html       ← Main HTML file (all sections)
├── style.css        ← Custom CSS (animations, components, responsive)
├── script.js        ← JavaScript (typed text, scroll effects, skill bars)
├── Shakya_July_Updated.pdf ← Your CV / Resume
└── README.md        ← This file
```

---

## ✨ Features

| Feature | Details |
|---|---|
| 🎨 Design | Deep navy + electric blue/purple gradient tech aesthetic |
| 📱 Responsive | Mobile, tablet, desktop optimized |
| ⚡ Animations | Scroll reveal, typed text, floating orbs, skill bars |
| 🧭 Navigation | Fixed navbar with active section highlighting |
| 🌟 Sections | Hero, About, Skills, Projects, Certifications, Education, Contact |
| 📬 Form | Simulated contact form with loading state |
| 🎮 Easter Egg | Konami code hidden surprise (↑↑↓↓←→←→BA) |

---

## 🛠️ Technologies Used

- **HTML5** — Semantic, SEO-friendly markup
- **Tailwind CSS** (CDN) — Utility-first styling
- **Custom CSS** — Animations, gradients, components
- **Vanilla JavaScript** — No frameworks needed
- **Font Awesome 6** — Icons
- **Google Fonts** — Space Mono + DM Sans

---

## 🚀 How to Use

### Option 1 — Open directly
Just open `index.html` in any modern browser. No build step needed!

### Option 2 — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Auto-reloads on every save ✅

---

## ✏️ Customize Your Portfolio

### 1. Personal Info
Open `index.html` and replace all `[Your Name]`, `[University Name]`, `[Country]` placeholders.

### 2. Profile Photo
Replace the SVG avatar in the hero section with your actual photo:
```html
<!-- Replace the <svg>...</svg> block with: -->
<img src="your-photo.jpg" alt="Your Name" class="w-full h-full object-cover rounded-full" />
```

### 3. Social Links
Update all `href="#"` links in the navbar social section and footer with your actual URLs:
```html
<a href="https://github.com/yourusername">...</a>
<a href="https://linkedin.com/in/yourusername">...</a>
```

### 4. Contact Info
Update the contact section email, LinkedIn, GitHub, and Twitter links.

### 5. Projects
Edit the 4 project cards — update titles, descriptions, tech stacks, and GitHub/live demo links.

### 6. CV
Replace `Shakya_July_Updated.pdf` with your actual CV file, or update the `href` in the Download CV button if you rename it.

### 7. Skills — Progress Bars
Adjust the `data-w="85"` attribute on each `.skill-fill` div to set your proficiency percentage.

### 8. Color Customization
Edit the Tailwind config in `index.html` `<script>` block to change the color palette.

---

## 🌐 Deployment

Deploy for free on any of these platforms:

| Platform | Steps |
|---|---|
| **GitHub Pages** | Push to repo → Settings → Pages → Deploy from main branch |
| **Netlify** | Drag & drop the folder at netlify.com/drop |
| **Vercel** | `vercel` CLI or import from GitHub |
| **Firebase** | `firebase deploy` after `firebase init hosting` |

---

## 📦 Dependencies (CDN — No npm install needed)

```
Tailwind CSS     — https://cdn.tailwindcss.com
Font Awesome 6   — cdnjs.cloudflare.com
Google Fonts     — Space Mono + DM Sans
```

---

## 📄 License
MIT — Free to use and customize for personal portfolios.

---

> Built with ❤️ for IT Undergraduates | Replace `[Your Name]` and make it yours!
