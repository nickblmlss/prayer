# Deploying to GitHub Pages

## What was breaking it

1. **`_ds/` was being deleted by Jekyll.** GitHub Pages runs Jekyll by default, and Jekyll silently omits any file or folder whose name starts with an underscore. The whole design system (`_ds/…`) 404'd on the live site, which is why fonts, colors, buttons and the scroll animations looked broken even though the same files work locally.
   → Fixed by the empty **`.nojekyll`** file at the repo root. It must be committed (it is a dotfile — `git add -f .nojekyll` if your client hides it).

2. **No `index.html`.** Pages serves `index.html` for a directory URL; without it you get a 404 at the site root.
   → Added `index.html` (redirects to the prayer process page) and `living-free.html` (redirects to the workbook).

3. **Raw spaces in cross-page links.** Fine locally, unreliable over HTTP.
   → Links now use `%20`-encoded filenames.

4. **Case sensitivity.** GitHub Pages is case-sensitive; local macOS is not. All current asset paths match their real filenames, so nothing to change — just don't rename anything to a different case.

## What to commit

Everything at the project root, keeping the folder structure exactly as-is:

```
.nojekyll
index.html
living-free.html
support.js
reveal.js
fundraiseup.js
living-free-content.js
BLMLSS Prayer Process.dc.html
Living Free Workbook.dc.html
Reset Progress.dc.html
Site Footer.dc.html
blmlss_logo_lock_up_rgb-white-mso0i0zd-ooh7.png
assets/
_ds/
```

`uploads/` and `blmlss_logo_lock_up_rgb-white-mso0h3gw-9puq.png` are not referenced and can be left out. The `-ooh7` PNG **is** used — it is the footer wordmark.

## Settings

Repo → Settings → Pages → Source: **Deploy from a branch**, branch `main`, folder `/ (root)`.

Live URLs will be:
- `https://<user>.github.io/<repo>/` → prayer process
- `https://<user>.github.io/<repo>/living-free.html` → workbook

## If something still 404s

Open the live site, then DevTools → Network, and reload. Any red row tells you the exact path that is missing — compare it character for character (including case) against the file in the repo.


## Clean URLs

The live site serves these files:

- `index.html` — prayerprocess.blmlss.com/
- `living-free.html` — /living-free.html
- `reset.html`, `giving.html`

Each is a straight copy of its `.dc.html` source. Edit the `.dc.html` file, then ask for a fresh copy before uploading — the copies do not update themselves.

Also keep an empty `.nojekyll` at the repo root so `_ds/` is served.
