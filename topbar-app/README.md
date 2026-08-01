# topbar-app

A small standalone [Vite](https://vitejs.dev/) + [Vue 3](https://vuejs.org/) app that
renders the **apietryga topbar** (navigation with the brand + SVG icons) together with a
showcase of the site's main graphics and project cards.

It is intentionally decoupled from the main Nuxt site and consumes the **unified data**
in the repo-level [`/data`](../data) folder — the single source of truth for translations
and project data shared by both apps.

## Data source

Everything is imported from `@data` (aliased to `../data` in `vite.config.js`):

| Module | Contents |
| --- | --- |
| `data/projects.js` | Unified projects: shared fields + per-language `i18n` block |
| `data/i18n/{en,pl,common}.js` | Translations |
| `data/stack.js` | Technology stack |
| `data/index.js` | Entry point + `localizedProjects(lang)` helper |

The EN/PL switch in the UI calls `localizedProjects(lang)` to flatten the unified project
records into the shape the components expect.

## Scripts

```sh
npm install     # install deps
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # build to ./dist
npm run preview # preview the production build
```

## Deployment

The app is built as part of the repo's `deploy.sh` and published to
`<site>/topbar/` on the `gh-pages` branch (Vite `base` is set to `/topbar/`).
Project images are served from the main site at `/img/contents/*`, so they resolve
on the deployed origin.

## Project structure

```
topbar-app/
├─ index.html
├─ vite.config.js        # base: '/topbar/', @data alias, fs.allow for ../data
├─ package.json
└─ src/
   ├─ main.js
   ├─ App.vue            # showcase page (hero, stack, project grid, EN/PL switch)
   ├─ style.css          # theme tokens mirrored from the site
   └─ components/
      ├─ Topbar.vue      # the extracted topbar
      └─ Logo.vue        # brand mark (SVG)
```
