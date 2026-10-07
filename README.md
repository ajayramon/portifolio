# Forge & Loop portfolio

Intended GitHub Pages URL: **https://ajayramon.github.io/portifolio/**

This is a project Pages site in the existing `ajayramon/portifolio` repository.
The URL becomes live only after this change is merged into `main`, Pages is
enabled, and the deployment workflow succeeds.

## Recovered source

The repository originally contained configuration files but no unpacked app.
The original Forge & Loop page, layout, styles, contact component, favicon, and
public SVG assets were recovered from `theraymon.zip`. The design, service
descriptions, and content are preserved; no replacement portfolio was invented.
Recovery used an explicit file allowlist, rejected unsafe paths and symlinks,
and did not overwrite existing files or copy archive configuration, generated
output, dependencies, or credentials. The original archive remains unchanged.

The archived `/api/contact` POST handler only logged submissions; it did not
deliver email and cannot run on GitHub Pages. It was not restored. The form now
downloads a local `project-brief.txt` for sharing through an agreed contact
channel, explicitly states that it sends nothing, and retains the entered
fields. No recipient address was present in the source, so none was invented.
Automatic delivery requires the owner to supply a real contact destination and
choose a separate, static-compatible service; it is not configured here.

## Local development and build

Use Node.js 22 and the checked-in npm lockfile:

```bash
npm ci
npm run dev
```

Open **http://localhost:3000/portifolio/**. Edit `src/app/page.tsx`,
`src/app/components/ContactForm.tsx`, or `src/app/globals.css`.

```bash
npm run lint
npm run build
```

`next build` produces the complete static site in **`out/`** using
`output: "export"`; no deprecated `next export` command is needed.
`npm start` (`next start`) is not compatible with this static export.
To preview with Python 3, mount the output at the same project path:

```bash
mkdir -p /tmp/portifolio-preview
ln -sfn "$PWD/out" /tmp/portifolio-preview/portifolio
python3 -m http.server 8000 --directory /tmp/portifolio-preview
```

Visit **http://localhost:8000/portifolio/**.
Dependencies and build output are ignored by Git.

Before changing Next.js code, read the installed guides in
`node_modules/next/dist/docs/`, particularly
`01-app/02-guides/static-exports.md` and the `basePath` configuration reference.
The site uses `/portifolio` as its build-time base path, directory-style routes,
and unoptimized images, with no runtime server or Vercel service.
Next.js handles its JS/CSS URLs and the file-convention favicon under that path.
Existing section links are same-page anchors. For future public images, plain
links, or CSS asset URLs, include `/portifolio/` explicitly; `next/link` prefixes
internal routes automatically. A separate CDN `assetPrefix` is not needed.
The original Google Fonts stylesheet is retained and requires network access;
system font fallbacks still work offline.

## Enable and deploy GitHub Pages

Repository settings and homepage metadata were not changed in this session.
An owner must:

1. Go to **Settings > Pages > Build and deployment > Source > GitHub Actions**.
2. Merge this PR into `main`.
3. Watch **Actions > Build and deploy portfolio**. A push to `main` builds,
   lints, uploads `out/`, and deploys to the `github-pages` environment. Once
   merged, **Run workflow** on `main` can retry publishing.
4. In the repository's **About > Edit**, change the Website from the old Vercel
   URL to **https://ajayramon.github.io/portifolio/**.

Pull requests targeting `main` run installation, lint, and production builds
without publishing or receiving Pages deployment permissions. Manual runs on
other branches also build only. Deployments are serialized, not cancelled.
Only the deployment job has `pages: write` and `id-token: write`; builds have
`contents: read`. No Vercel account, secrets, or custom domain are required.

## Troubleshooting

- **404 at the site URL:** check that Pages uses GitHub Actions, the PR is merged,
  and the `main` deployment completed successfully. Use the `/portifolio/` URL,
  not the account root. Check any `github-pages` environment approval rules.
- **Pages configuration/deployment failure:** confirm the Source setting above
  and inspect the failed step in Actions. The workflow does not enable Pages
  automatically.
- **Missing styles, scripts, images, or favicon:** check browser network requests
  for `/portifolio/` prefixes and confirm the uploaded artifact is `out/`, not
  `.next/`. Rebuild after changing `basePath`; it is compiled into the bundles.
- **Build failure:** use Node 22, run `npm ci`, then `npm run build`. Server
  Actions, request-dependent handlers, and default server image optimization
  cannot be deployed to static Pages.
- **Font lint warning:** the recovered layout's external Google Fonts link
  triggers `@next/next/no-page-custom-font`; lint completes with no errors.
- **Dependency audit warnings:** the existing lockfile reports vulnerabilities.
  This migration does not update dependencies and publishes only static output,
  not the Next.js server. Review `npm audit` separately before any server-hosted
  deployment; do not blindly apply `npm audit fix --force`.
- **Contact delivery:** downloading a brief is not submission. No email delivery
  endpoint is available on this static site.
