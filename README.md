# Chinese Railroad Workers in North America

This repository contains the static website for the Chinese Railroad Workers in North America Project at Stanford University.

The site was migrated from a legacy WordPress installation into static HTML, CSS, JavaScript, images, fonts, and documents. It is intended to be portable, accessible, and maintainable without a WordPress server or database.

## Site Structure

The website root is this directory. The main entry point is:

```text
index.html
```

Important top-level sections include:

```text
accessibility/
artifacts/
category/news/
faqs/
historical-newspaper-articles/
people/
press/
researchmaterials/
resources/
search.html
```

Supporting files are stored mostly in:

```text
wp-content/
wp-includes/
search-index.json
```

The `wp-content` and `wp-includes` names remain from the original WordPress site, but the public site is static.

## Running Locally

Because the search page loads `search-index.json` with JavaScript, the site should be previewed through a local web server rather than opened directly with `file://`.

From the website root:

```bash
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Search Index

The site search uses:

```text
search-index.json
```

To rebuild the search index after adding, removing, or editing pages:

```bash
python3 generate_search_index.py
```

After rebuilding, confirm that `search-index.json` is committed with the site changes.

## Deployment

The site is designed to deploy as ordinary static files. A server only needs to serve HTML, CSS, JavaScript, images, fonts, and PDFs.

No WordPress, PHP, CGI, or database is required for normal public use.

All paths are relative. Copy or deploy the full contents of this website root to the intended public web root.

## Maintenance Notes

When making updates:

1. Edit the static HTML/CSS/assets.
2. Rebuild `search-index.json` if page content or URLs changed.
3. Preview locally through a web server.
4. Commit the updated files to GitHub.
5. Deploy the committed version to the public server.

Avoid committing:

```text
SSH keys
passwords
hosting credentials
local backups
live snapshots
temporary working files
```

## Accessibility

The site includes a dedicated Accessibility page and has been updated to better align with Stanford web accessibility expectations, including heading structure, footer accessibility links, local assets, image alt text, and static-document handling.

Future edits should preserve:

- one clear page-level `h1`
- logical heading order
- descriptive image alt text
- keyboard-accessible links and controls
- readable link text
- local copies of durable site assets whenever possible

## External Services

The site is mostly self-contained. Embedded video content may still depend on YouTube or Vimeo where those embeds are intentional.

Other external dependencies should be avoided unless there is a clear reason to keep them.

