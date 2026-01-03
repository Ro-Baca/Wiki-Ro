---
title: Markdown
tags:
  - apunte
  - obsidian
noteOrder: "6"
---
Markdown es un lenguaje de marcado ligero. Su objetivo es que puedas dar formato a un texto (poner negritas, títulos, listas) usando caracteres simples, de modo que el documento sea fácil de leer tanto en su forma "cruda" como cuando ya está procesado. Es mucho más rápido que usar un editor visual, como Word, y mucho más limpio que escribir código HTML.

# Cheat sheet
---
Ecisten algunos atajos para darle formato el texto que son utiles de conocer, estos son los mas cominues y útiles.
## Títulos
```Markdown
# Título 1 (El más grande)
## Título 2
### Título 3
```
## Énfasis 
```Markdown
**Este texto es negrita**
*Este texto es cursiva*
~~Este texto está tachado~~

```
## Listas
```Markdown
* Elemento 1
* Elemento 2
  * Subelemento

1. Primero
2. Segundo

```
## Enlaces e imágenes
```Markdown
[Nombre del enlace](https://google.com)
![Texto alternativo de imagen](url-de-la-imagen.jpg)

```
## Código 

Para palabras sueltas usa la tilde invertida: `código`
Para bloques de código usa tres tildes:
```Python
def hola_mundo():
    print(&quot;Hola Mundo&quot;)

```

## Imágenes locales
Debes tener el archivo accesible 
```Markdown
![[imagen.png]]
```

## Videos
Para videos de **youtube**, puedes dar click en el botón de *share* y en la opción de *embed* encontraras un código que podrás pegar y el video se aparecerá como un recuadro al que puedes interactuar. 
Ejemplo:
```Markdown
<iframe width="560" height="315" src="https://www.youtube.com/embed/qbxYWmi9oII?si=uLU0KhuyN7jiSxva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

