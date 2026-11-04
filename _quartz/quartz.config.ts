import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

// Site config for The Table tech docs.
// Only notes with `publish: true` in their frontmatter appear on the site.
const config: QuartzConfig = {
  configuration: {
    pageTitle: "The Table Tech Docs",
    pageTitleSuffix: " · The Table Tech Docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "docs.thetablechurch.life",
    ignorePatterns: ["private", "templates", ".obsidian", "_quartz", "README.md"],
    defaultDateType: "modified",
    theme: {
      // Brand: ~/thetable/brand/brand.md (approved): Sansita 700 headings, Nunito Sans 400/700 body,
      // hospitality cream #E7D9CB, table olive #3D4435, quiet gray #C2C8CC.
      // Every other value here is derived from those and is a proposal (see README).
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: { name: "Sansita", weights: [700] },
        body: { name: "Nunito Sans", weights: [400, 700], includeItalic: true },
        code: "IBM Plex Mono",
      },
      colors: {
        // Light: olive on cream
        lightMode: {
          light: "#F5F0EA", // paper: cream 40% + white
          lightgray: "#E7D9CB", // hospitality cream
          gray: "#676C5E", // muted text: olive toward gray
          darkgray: "#3D4435", // table olive (body text)
          dark: "#2B3025", // deep olive (headings)
          secondary: "#7E5233", // clay: cream's hue, darkened (links)
          tertiary: "#3D4435", // olive (hover, current page)
          highlight: "rgba(231, 217, 203, 0.7)", // cream behind links
          textHighlight: "rgba(194, 200, 204, 0.7)", // quiet gray
        },
        // Dark: cream on olive
        darkMode: {
          light: "#3D4435", // table olive
          lightgray: "#535B49", // olive, lifted (borders, inputs)
          gray: "#C2C8CC", // quiet gray (muted text)
          darkgray: "#E7D9CB", // hospitality cream (body text)
          dark: "#F5F0EA", // paper (headings)
          secondary: "#EBC4A0", // light clay (links)
          tertiary: "#F5F0EA", // paper (hover, current page)
          highlight: "rgba(0, 0, 0, 0.16)", // olive, deepened behind links
          textHighlight: "rgba(194, 200, 204, 0.18)", // quiet gray
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "git", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: false }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CNAME(),
    ],
  },
}

export default config
