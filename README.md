# The Table Tech Docs

Source for **docs.thetablechurch.life**: how sound, screens, lights and the livestream run at The Table.

- Open this folder as an Obsidian vault to edit. Start at `index.md`.
- Only notes with `publish: true` appear on the site.
- Pushing to `main` builds the site with [Quartz](https://quartz.jzhao.xyz) v4.5.2 and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
- Build locally with `./_quartz/build.sh`, or `./_quartz/build.sh --serve` to preview at http://localhost:8080.
- Site config lives in `_quartz/`.

How to contribute: `about/editing-these-docs.md`.

## Status (2026-11-04)

- Content v1 done: 31 pages and 2 booth PDFs (`./_quartz/print-pdfs.sh` rebuilds them). Local build verified.
- Owner: GitHub user **TheTableChurch** (confirmed by Keith, 2026-11-04). gh gets signed in on the Table Mac (`ssh table`), not Keith's machines.
- Not live yet. Remaining:
  1. On the Table Mac: `gh auth login` as TheTableChurch, create the public repo `TheTableChurch/docs`, push.
  2. Pages: source = GitHub Actions, custom domain `docs.thetablechurch.life`, enforce HTTPS.
  3. Add `keithdperez` as a collaborator so Keith's Obsidian Git can push.
  4. Squarespace DNS: CNAME `docs` → `thetablechurch.github.io`.
