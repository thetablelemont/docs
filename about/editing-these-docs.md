---
title: Editing these docs
publish: true
---

These docs are a folder of Markdown files. Anyone on the team can fix or add to them.

## Getting set up

1. Make a free [GitHub](https://github.com) account and ask the tech director to add you to the **thetablelemont** organization.
2. Install [Obsidian](https://obsidian.md) and [GitHub Desktop](https://desktop.github.com).
3. Clone the repository with GitHub Desktop, then in Obsidian choose **Open folder as vault** and pick it.
4. Turn on community plugins when Obsidian asks. **Obsidian Git** saves and uploads your changes every few minutes.

## Publishing a page

A page shows up on the website only when its properties include:

```yaml
publish: true
```

Leave it `false` while you're drafting. Once changes are uploaded, the site updates within a few minutes.

## Writing

- One topic per page. Put the point in the first line.
- Write for someone on their first Sunday.
- Link to the next page a reader would want, like `[[audio]]`.
- Put outside tutorials on the **Learn** pages, so a broken link only needs fixing in one place.
- **No passwords, phone numbers or private details.** The site is public.

## Where things go

| Folder | What goes there |
|---|---|
| `week/` | What happens each day |
| `roles/` | One page per role |
| `systems/` | How the gear and software are set up |
| `learn/` | Basics and outside tutorials |
| `help/` | Troubleshooting and contacts |
| `print/` | One-page checklists |
