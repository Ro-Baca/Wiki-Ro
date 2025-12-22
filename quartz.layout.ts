import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { Options } from "./quartz/components/Explorer"


// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/Ro-Baca/Notas",
    },
  }),
}

export const mapFn: Options["mapFn"] = (node) => {
  return node
}
export const filterFn: Options["filterFn"] = (node) => {
  return node.slugSegment !== "tags"
}
export const sortFn: Options["sortFn"] = (a, b) => {
  // mod: sort folders and files based on folderOrder and noteOrder
  //      to find ways to retrieve folderOrder and noteOrder from frontmatter
  //      we now have to include frontmatter in ContentDetails and linkIndex.set()
 
  // extract order from frontmatter
  const orderA = a.isFolder
    ? a.data?.frontmatter?.folderOrder as number | undefined
    : a.data?.frontmatter?.noteOrder as number | undefined
  const orderB = b.isFolder
    ? b.data?.frontmatter?.folderOrder as number | undefined
    : b.data?.frontmatter?.noteOrder as number | undefined
 
  // folders first, then files, sort folders and files separately
  // compare orderA and orderB, those undefined will be placed at the end
  if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
    if (orderA !== undefined && orderB !== undefined) {
      // compare based on the order
      return orderA - orderB;
    } else if (orderA !== undefined) {
      // move B to the back
      return -1;
    } else if (orderB !== undefined) {
      // move A to the back
      return 1;
    } else {
      // fall back to alphabetical order
      return a.displayName.localeCompare(b.displayName);
    }
  }
  // keep folders in front
  if (!a.isFolder && b.isFolder) {
    return 1
  } else {
    return -1
  }
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    //Component.Explorer(),
    Component.Explorer({
      mapFn,
      filterFn,
      sortFn,
    }),

  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}
