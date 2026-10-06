# Akash Tripathi — Portfolio

Personal portfolio website built with React and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

## Deploy (GitHub Pages — free)

1. Push this folder to a new GitHub repo, e.g. `akash-portfolio`.
2. Install the gh-pages helper:
   ```bash
   npm install gh-pages --save-dev
   ```
3. Add these two lines to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/akash-portfolio",
   "scripts": {
     "deploy": "vite build && gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In the repo's Settings → Pages, set the source branch to `gh-pages`.

Your site will be live at `https://<your-username>.github.io/akash-portfolio`.

## Before you push

- Replace the placeholder email, GitHub, and LinkedIn links in `src/App.jsx` (in the Contact section) with your real ones.
- Update the GitHub/Live site links inside each project block once you've pushed and deployed.
