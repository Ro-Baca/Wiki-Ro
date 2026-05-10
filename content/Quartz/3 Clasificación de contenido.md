---
title: Clasificar contenido en el explorador
tags:
  - Quartz
noteOrder: "3"
---
> [!INFO] Nota
> El método original esta en la pagina de [draftz](https://draftz.felixnie.com/Digital-Garden/Sorting-Objects-in-Explorer)

De forma automatica Quartz ordenará el contenido alfabeticamente, ordenand las notas dentro de cada carpeta de con respecto al valor que tengan en la propiedad de "Titulo".

Si deseas tener control en el orden con el que las notas se presentan existe la opción de colocar un prefijo numérico al titulo, haciendo que se ordenen por el valor que tienen antes del nombre.

![[Contenido_1.png]]

Una alternativa, que puede ser mas limpia es agregar una propiedad llamada **noteOrder** con la cual, podemos colocar un valor numérico a cada nota y así darle una prioridad de aparición en la página.

A continuación presento la forma de agregar esta propiedad, el autor de esta esta modificación es [draftz](https://draftz.felixnie.com/Digital-Garden/Sorting-Objects-in-Explorer), yo únicamente estoy usando su código y documentándolo. También, en el post original se explica como controlar el orden a las carpetas así como a las notas, eso no lo haré yo.

## Agregar la propiedad **noteOrder**
Debemos agregar el atributo a las propiedades de las notas, esto se encuentra en la siguiente ruta
`quartz/plugins/emitters/contentIndex.tsx`

los cambias necesarios son los siguientes:

```TypeScript
import { QuartzPluginData } from "../vfile" // necesario para la definicion del frontmatter 
 
export type ContentIndexMap = Map<FullSlug, ContentDetails>
export type ContentDetails = {
  slug: FullSlug
  filePath: FilePath
  title: string
  links: SimpleSlug[]
  tags: string[]
  content: string
  richContent?: string
  date?: Date
  description?: string
  frontmatter?: QuartzPluginData["frontmatter"] // agregamos la propiedad frontmatter
}
```

Después agregamos la propiedad dentro de **linkIndex.set()**.

```TypeScript
linkIndex.set(slug, {
  slug,
  filePath: file.data.filePath!,
  title: file.data.frontmatter?.title!,
  links: file.data.links ?? [],
  tags: file.data.frontmatter?.tags ?? [],
  content: file.data.text ?? "",
  richContent: opts?.rssFullHtml
    ? escapeHTML(toHtml(tree as Root, { allowDangerousHtml: true }))
    : undefined,
  date: date,
  description: file.data.description ?? "",
  // mod: add the original frontmatter as whole
  frontmatter: file.data.frontmatter,
})
```

## La función **sortFn**
La [documentacion de quatz](https://quartz.jzhao.xyz/features/explorer#advanced-examples) especifica el como funciona el explorador de contenido, y da un ejemplo de como modificar sus funciones.

En la ruta 
`quartz/quartz.layout.ts`

Agregamos la linea para definir las funciones del explorador
`import { Options } from "./quartz/components/Explorer"`

y agregamos el bloque de funciones:

```TypeScript
export const mapFn: Options["mapFn"] = (node) => {
  return node
}
export const filterFn: Options["filterFn"] = (node) => {
  return node.slugSegment !== "tags"
}
export const sortFn: Options["sortFn"] = (a, b) => {
  // mod: sort folders and files 
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
```

> [!INFO] Info
> Con este codigo, se respeta el orden original para acomodar primero folder, luego notas y se acomodan de forma separada

Finalmente hay que agregar la nueva función en la declaración del explorador 

```TypeScript
Component.Explorer({
  mapFn,
  filterFn,
  sortFn,
}),
```
