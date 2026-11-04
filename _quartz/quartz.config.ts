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
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fbfaf8",
          lightgray: "#e6e3de",
          gray: "#b3ada4",
          darkgray: "#4a4640",
          dark: "#22201c",
          secondary: "#7a4b2a",
          tertiary: "#a8875f",
          highlight: "rgba(122, 75, 42, 0.08)",
          textHighlight: "#f5d76e88",
        },
        darkMode: {
          light: "#171614",
          lightgray: "#33302b",
          gray: "#6b665e",
          darkgray: "#d6d2cb",
          dark: "#efece6",
          secondary: "#d9a77c",
          tertiary: "#a8875f",
          highlight: "rgba(217, 167, 124, 0.1)",
          textHighlight: "#b3aa0288",
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
