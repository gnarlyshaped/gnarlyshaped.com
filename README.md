# GnarlyShaped.com

The site is a React + Vite app in `web/`. GitHub Pages serves the repo root, so the build output (`index.html`, `assets/`) is committed there.

## Editing content

Projects, team and the contact email live in `web/src/content.js`. To add a screenshot for a project, put the image in `web/src/assets/`, import it in `content.js`, and set it as that project's `image`.

## Develop and publish

```sh
cd web
npm install
npm run dev     # local preview
npm run build   # rebuilds index.html and assets/ at the repo root
```

Commit the rebuilt root files along with your source changes.
