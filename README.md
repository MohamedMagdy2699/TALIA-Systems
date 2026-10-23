# TALIA Systems website

**Smart Systems. Reliable Technology.**

A static site in plain HTML, CSS and JavaScript. No build step, framework, backend or paid service. All links and assets are relative, so it works at `https://USER.github.io/REPO/` and at a custom domain.

## Structure
```
index.html  services.html  about.html  contact.html  404.html
assets/css/style.css   assets/js/main.js
assets/favicon.svg     assets/images/og-image.svg
.nojekyll  README.md
```

## Replace these placeholders (highlighted yellow on the site)
| Where | What |
|---|---|
| `contact.html` and every footer | `[PLACEHOLDER: email]`, phone, WhatsApp, address, hours |
| `contact.html` `<form data-email="info@your-domain.example">` | The real email that receives enquiries. Until changed, the form refuses to prepare an email |
| Every page `<head>` | Add `<link rel="canonical">` and make `og:image` an absolute URL once the domain is known |
| `assets/images/og-image.svg` | Many social networks need a PNG/JPG: export a 1200x630 PNG, save as `assets/images/og-image.png`, and update the `og:image` tag |

Search all files for `PLACEHOLDER` and `your-domain.example` to find everything.

## Contact form
GitHub Pages cannot run server code. The form validates input, then opens the visitor's email app with a prepared message (`mailto:`). The page states clearly that nothing is sent until the visitor presses Send. To use a form provider (Formspree, Getform, Basin) instead: create a form there, set `<form action="PROVIDER_URL" method="post">`, add `name` attributes (already present), and remove the `submit` handler in `assets/js/main.js`. Show a success message only after the provider confirms.

## Publish on GitHub Pages
1. Create a GitHub account, then **New repository**. Name it e.g. `talia-systems`, set it Public, and create it without a README.
2. Upload: open the repo, **Add file > Upload files**, drag in the *contents* of this folder (keep `assets/` and the hidden `.nojekyll`), then **Commit changes** to `main`. (Or with Git: `git init`, `git add .`, `git commit -m "Initial site"`, `git branch -M main`, `git remote add origin URL`, `git push -u origin main`.)
3. Go to **Settings > Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
4. Wait 1 to 3 minutes. The site appears at `https://USERNAME.github.io/talia-systems/`.

## Update the site
Edit files in GitHub (pencil icon) or locally, then commit and push to `main`. Pages redeploys automatically. Hard-refresh to see changes.

## Custom domain with HTTPS
1. In **Settings > Pages > Custom domain**, enter your domain (e.g. `www.example.com`) and Save. GitHub adds a `CNAME` file.
2. At your DNS provider: for `www`, add a `CNAME` record to `USERNAME.github.io`. For the apex domain (`example.com`), add `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (verify against GitHub's current docs).
3. When DNS propagates (minutes to 24 hours), tick **Enforce HTTPS** in Pages settings. The certificate is issued automatically.
4. Update `canonical` and `og:image` URLs to the new domain.

## 404 page and subpaths
`404.html` sets a `<base>` tag with a tiny script: it uses `/REPO/` on `github.io` and `/` on custom domains, so its links and styles work on deep missing URLs.
