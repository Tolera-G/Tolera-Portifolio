# Tolera Girma – Portfolio

My personal portfolio website, built from scratch to learn the full web development process: planning, design, code, testing and publishing.

**Live site:** https://tolera-g.github.io/Tolera-Portifolio/

## Goal
Show recruiters who I am and what I can build, in a calm, human and honest way.

- Primary audience: recruiters
- Secondary audience: people who want to know me and see my work

## Sections
- **About**: who I am.
- **My Journey**: a short timeline, the skills I know today (each with proof), what I am learning next, and my vision.
- **Projects**: Smart To-Do List, Team Portfolio, and ClearCampus (concept stage), each with skill tags.
- **Contact**: icon cards for Email, LinkedIn, GitHub and Telegram.

## Built with
HTML, CSS and JavaScript. No frameworks, so every part is code I wrote and can explain. The site is static: there is no backend, because everything on it is fixed content or links (see docs/decisions.md).

## Features
- Responsive layout for desktop, tablet (up to 900 px) and phone (up to 600 px)
- Mobile menu: a button with an icon that opens a small, semi-transparent dropdown (JavaScript)
- Project cards with screenshots and skill tags
- Hover effects on cards: project cards lift gently and change color, and the skill and vision cards get a soft tint. They only apply on devices with a pointer, and are switched off for visitors who prefer reduced motion.
- Clear section dividers: a gap and a thin line before each section, so a new section is easy to spot
- Design values (colors, fonts, spacing) named once at the top of the stylesheet
- Semantic HTML, image descriptions, keyboard focus styles and `aria-expanded` on the menu button
- A small round profile photo beside my name in the header, which links back to the top of the page
- Link preview: when the site's link is shared on apps like Telegram or LinkedIn, it shows a title, a description and an image (Open Graph tags)
- Dark theme that follows the visitor's device setting. Every color, including the text on buttons, the shadows, the see-through menu and the card hover colors, comes from a variable, so nothing stays light by mistake.
- Light, square, face-centered photos (about 28 KB for the hero and 2 KB for the header) instead of one 920 KB original

## Design
- Calm, natural and human: a paper-colored background, sand cards, dark ink text and forest green for buttons and links
- Headings in Newsreader, body text in Public Sans
- A small type scale for consistency: 44 px page title, 32 px section titles, 20 px for introductory text (hero line and About), 16-17 px for body and card text, and 14 px for tags
- Spacing based on a single 8 px unit
- Dark theme: a deep green-black page with sage green for links and buttons and dark text on the buttons, switched automatically by the device setting (`prefers-color-scheme`). I checked the contrast of the main text pairs in both themes. (`prefers-color-scheme`)
## Project structure
- index.html: the page
- css/style.css: all styles
- js/main.js: the mobile menu
- images/: optimized photos, project screenshots and the link preview image (share.png)
- docs/decisions.md: the choices I made and why

## Run it locally
Open index.html in a browser. No installation is needed.

## Hosting
Published with GitHub Pages from the main branch of this repository.

## Status
In progress, following a 20-day learning plan (15 October to 11 November 2026).

- [x] Planning, wireframe and visual guide
- [x] HTML structure and CSS styling
- [x] Responsive layout and mobile menu
- [x] My Journey content
- [x] Project screenshots
- [x] Published on GitHub Pages
- [ ] Links from the project cards to their repositories
- [ ] Testing with a checklist and fixing issues
- [ ] Code cleanup and final explanation

## What I have learned so far
- Planning a site before coding: audience, content, wireframe and visual guide
- Semantic HTML, CSS variables, grid layouts and media queries
- JavaScript basics: finding elements, listening for clicks and changing classes
- How the web works: requests, responses and status codes, and the difference between frontend and backend
- Git and GitHub: small commits with clear messages, and publishing with GitHub Pages
- Cropping photos with `object-fit` and `object-position`, and marking decorative images with an empty `alt` so screen readers skip them
- Building a dark theme with CSS variables and `prefers-color-scheme`, and checking text contrast in both themes
- Writing Open Graph tags for link previews, and why apps like Telegram remember old previews
- Optimizing images: cropping, resizing and compressing them for faster loading
- Why a dark theme can break: a color typed directly into a rule (like white text on a button) doesn't change with the theme, so colors belong in variables
- Testing both themes in DevTools by emulating `prefers-color-scheme`, and finding leftover hard-coded colors with a regex search

## Credits
- Icons: [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0)
- Fonts: Newsreader and Public Sans, from Google Fonts