import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Wiki Ro",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Chakra Petch",
        body: "Bai Jamjuree",
        code: "Source Code Pro",
      },
      colors: {
        lightMode: {
          light: "#f0f5f3",      // Color de fondo
          lightgray: "#dce4e0",  // Bordes y líneas divisorias
          gray: "#7a9e8a",       // Metadatos y fechas 
          darkgray: "#372f3a",   // Texto principal 
          dark: "#251e28",       // Títulos
          secondary: "#50797b",  // Enlaces
          tertiary: "#8eb29a",   // Hover
          highlight: "rgba(143, 176, 154, 0.15)", // CORREGIDO: Fondo sutil enlaces
          textHighlight: "#b3c6b4", // Resaltado de texto (==texto==) tipo marcador
        },
        darkMode: {
          light: "#372f3a",       // Fondo
          lightgray: "#4a434f",   // Bordes
          gray: "#9ca5b5",        // Metadatos
          darkgray: "#d3d8d9",    // Texto Base
          dark: "#ffffff",        // Títulos
          secondary: "#8ac7c9",   // Enlaces
          tertiary: "#7bad9f",    // Hover
          highlight: "rgba(143, 176, 154, 0.15)", // Fondo de links
          textHighlight: "#b3a046", // Resaltado (==texto==)
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
