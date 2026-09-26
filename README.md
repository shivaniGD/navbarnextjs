# my-next-app

A minimal Next.js (App Router + TypeScript) project demonstrating:
- Home and About pages
- A dynamic Blog route (`/blog/[slug]`)
- Client-side navigation with `next/link`

## How to run this project

1. **Unzip** this folder anywhere on your computer.

2. **Open a terminal** in the unzipped folder (e.g. in VS Code: right-click the
   folder in Explorer → "Open in Integrated Terminal", or `cd` into it manually).

3. **Install dependencies:**
   ```
   npm install
   ```

4. **Start the dev server:**
   ```
   npm run dev
   ```

5. **Open your browser** to:
   ```
   http://localhost:3000
   ```

## What to check

- Click **Home / About / Blog** links in the nav bar — the page content should
  change without a full page reload.
- Visit `/blog/anything-you-type` directly in the URL bar — the slug you typed
  will be displayed on the page (e.g. `/blog/hello-world` shows "Slug from
  URL: hello-world").
- Open DevTools → **Network tab**, then click the nav links. You should see
  small data/JS chunk requests firing, not full HTML document reloads —
  confirming client-side routing is working.

## Project structure

```
my-next-app/
├── app/
│   ├── layout.tsx          Root layout
│   ├── page.tsx             Home page
│   ├── globals.css
│   ├── about/
│   │   └── page.tsx         About page
│   └── blog/
│       └── [slug]/
│           └── page.tsx     Dynamic blog route
├── components/
│   └── Navbar.tsx            Nav links (Home / About / Blog)
├── package.json
├── tsconfig.json
└── next.config.mjs
```
