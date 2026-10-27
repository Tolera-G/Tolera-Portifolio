# Decisions

A short record of the choices I made while building this portfolio, and why.
Each entry says what I decided and the reason, so I can explain it later.

## Purpose and audience

- **The portfolio is also a learning project.** I want to understand the whole web development process (planning, design, code, testing, publishing), not only end up with a nice site.
- **Primary audience: recruiters.** Secondary audience: people who want to know me and see my work. Designing for one main group makes every other choice easier.
- **The 10-second goal.** A recruiter should understand what I build and what I'm skilled at, and feel that a creative, calm, human person made the site.

## Content

- **Four sections: About, My Journey, Projects, Contact.** Each has one job. About shows who I am, My Journey shows how I got here and where I'm going, Projects is the proof, and Contact makes me easy to reach.
- **No separate Skills section.** Skills are shown as tags on each project card and in "What I know today" inside My Journey, with a line of proof for each. A skill is more believable when it is connected to something I built.
- **Only real skills and honest labels.** ClearCampus is labeled "concept stage". On the Team Portfolio card I state exactly what I did: I built the complete user interface. A recruiter may click through, so every claim has to hold up.
- **Personal details left out of My Journey.** I removed items about my family background and my fellowship, to keep the focus on my skills and my vision.
- **The vision is shown as three numbered cards.** They are easier to scan than a paragraph.
- **Contact is a set of icon cards, not a form.** The cards link to email, LinkedIn, GitHub and Telegram, and show only the platform name. A form would need a backend or an outside service, which the site doesn't have yet.

## Design

- **Calm, natural, human look.** Paper-colored background, soft sand cards, dark ink text, forest green for buttons and links, and one small clay highlight per screen.
- **Fonts:** Newsreader for headings (soft and human) and Public Sans for body text (plain and easy to read).
- **One spacing unit of 8 px.** Every gap is a multiple of it, with lots of empty space.
- **Three design principles:** calm before clever, sound human, proof first.
- **Figma was not used for this site.** The look was designed directly from the wireframe. I may learn Figma later on a small exercise.
- **The hero photo is a circle.** It gives the page a personal feel. It uses a square frame (`aspect-ratio: 1 / 1`) so the circle stays round on every screen.

## Building

- **Plain HTML, CSS and JavaScript, no framework.** I wanted to understand the basics first, and I can explain every line.
- **Design values are named once.** Colors, fonts and spacing live as variables at the top of `css/style.css`, so changing one value updates the whole site.
- **Responsive with two breakpoints:** 900 px (tablet) and 600 px (phone). On smaller screens, cards stack and the layout simplifies.
- **A mobile menu button written in JavaScript.** On phones it hides the navigation links behind a button, which keeps the top of the page clean. The button uses an icon and has an accessible label, and its state is shown with `aria-expanded`.
- **Icons are inline SVG.** They stay sharp at any size, load instantly and need no extra files (Font Awesome Free, CC BY 4.0).

## How I work

- **Small steps with Git.** I commit each change with a plain-language message and push to GitHub.
- **I make the edits myself.** I get the exact lines to change, apply them, and check the result with `git diff`, instead of replacing whole files.
- **AI is a tool, not a replacement for understanding.** I use it to plan, build and review, and I make sure I can explain what it produced.

## Still open

- **Does the site need a backend?** To be decided after I study how the web works (plan Day 15).
- **Where to host the site.** To be decided when I publish (plan Day 18).
- **Project links on the cards.** The Smart To-Do List repository is public. The Team Portfolio repository may be private, so I need to check before linking it.