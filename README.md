# The Table Tech Docs

Source for **docs.thetablechurch.life**: how sound, screens, lights and the livestream run at The Table.

- Open this folder as an Obsidian vault to edit. Start at `index.md`.
- Only notes with `publish: true` appear on the site.
- Pushing to `main` builds the site with [Quartz](https://quartz.jzhao.xyz) v4.5.2 and deploys it to GitHub Pages (`.github/workflows/deploy.yml`).
- Build locally with `./_quartz/build.sh`, or `./_quartz/build.sh --serve` to preview at http://localhost:8080.
- Site config lives in `_quartz/`.

## Look

The site follows The Table's brand (`~/thetable/brand/brand.md`): Sansita Bold headings, Nunito Sans body, hospitality cream `#E7D9CB`, table olive `#3D4435`, quiet gray `#C2C8CC`, and the white logo on an olive disc. Light mode is olive on cream; dark mode is cream on olive.

- Colors and fonts: `_quartz/quartz.config.ts`. Layout touches: `_quartz/custom.scss`. Logo, favicon and share image: `_quartz/static/` (`build.sh` copies all three into Quartz).
- Derived values awaiting approval (not in `brand.md` yet): paper `#F5F0EA`, deep olive `#2B3025`, muted `#676C5E`, clay link `#7E5233`, light clay link `#EBC4A0` (dark mode), lifted olive `#535B49` (dark-mode borders). All pass WCAG AA where they carry text.

How to contribute: `about/editing-these-docs.md`.

## Status (2026-11-04)

- **Live** at https://docs.thetablechurch.life (GitHub Pages from `thetablelemont/docs`, HTTPS enforced). Every push to `main` rebuilds; both deploy runs on 2026-11-04 passed.
- Owner: GitHub organization `thetablelemont`, created from keithdperez (Keith, 2026-11-04). Add future tech leads as org owners. No shared passwords.
- Replaced the old "Resource Hub" from `keithdperez/thetable` (its Pages site was turned off 2026-11-04; the repo is kept). Its useful content was ported here.
- Look (2026-11-04): brand pass. Sansita/Nunito Sans, cream/olive light and dark modes, logo in the sidebar, branded favicon and share image, booth PDFs in the brand fonts. Content unchanged.
- Content: 31 pages and 2 booth PDFs (`./_quartz/print-pdfs.sh` rebuilds them).
- DNS (Squarespace, done 2026-11-04): `docs` CNAME → `thetablelemont.github.io`; `thetablechurch.life` verified under the org (`_github-pages-challenge-thetablelemont` TXT); personal verification removed.
