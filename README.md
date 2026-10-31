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
- Design values (colors, fonts, spacing) named once at the top of the stylesheet
- Semantic HTML, image descriptions, keyboard focus styles and `aria-expanded` on the menu button

## Design
- Calm, natural and human: a paper-colored background, sand cards, dark ink text and forest green for buttons and links
- Headings in Newsreader, body text in Public Sans
- Spacing based on a single 8 px unit

## Project structure
- index.html: the page
- css/style.css: all styles
- js/main.js: the mobile menu
- images/: my photo and project screenshots
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
- Writing documentation, so my choices can be understood later

## Credits
- Icons: [Font Awesome Free](https://fontawesome.com/license/free) (CC BY 4.0)
- Fonts: Newsreader and Public Sans, from Google Fonts