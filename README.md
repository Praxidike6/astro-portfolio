# Astro Portfolio

This repository is a personal portfolio website built with Astro.

It uses a component-based structure under `src/` and is styled with CSS. The site includes a hero section, about, skills, work/projects, experience, contact form, and a footer. There's also a reusable layout and a decorative Orb component.

## Key features

- Built with Astro
- Component-focused structure (Astro components in `src/components`)
- Layouts in `src/layouts`
- Pages in `src/pages` (main route is `index.astro`)
- Static assets in `public/`
- Small dependency list (see `package.json`)

## Project structure

```text
/
├── public/                 # Static assets (images, favicon, etc.)
├── src/
│   ├── components/         # Astro components (Hero, About, Skills, Work, Experience, Contact, Footer, Header, Orb)
│   ├── layouts/            # Layout components (Layout.astro)
│   ├── pages/              # Route files (index.astro)
│   └── styles/             # Global or component styles
├── package.json
├── astro.config.mjs
└── README.md
```

## Scripts

Run these from the project root:

- `npm install` — install dependencies
- `npm run dev` — start the local dev server (default port shown in terminal)
- `npm run build` — build the production site to `./dist/`
- `npm run preview` — preview the production build locally

The project requires Node >= 22.12.0 (see `package.json`).

## Dependencies

- astro
- animejs

See `package.json` for exact versions.

## Development notes

- Pages are written as `.astro` files in `src/pages/` (the home page is `src/pages/index.astro`).
- Components used on the home page include: `Hero`, `About`, `Skills`, `Work`, `Experience`, `Contact`, and `Footer` (imported from `src/components/` in `src/pages/index.astro`).
- Modify styles in `src/styles/` and assets in `public/`.

## Deploy

Build the site with `npm run build` and deploy the contents of the `dist/` directory to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## License

You can add a license file if you want to specify licensing for this project.
