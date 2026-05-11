---
title: Markdown
tags:
  - obsidian
  - markdown
noteOrder: "1"
---
Markdown es un lenguaje de marcado ligero. Su objetivo es que puedas dar formato a un texto (poner negritas, títulos, listas) usando caracteres simples, de modo que el documento sea fácil de leer tanto en su forma "cruda" como cuando ya está procesado. Es mucho más rápido que usar un editor visual, como Word, y mucho más limpio que escribir código HTML.

Al ser [[Open Source]] puede ser interpretado por cualquier editor de texto. No existe un estándar definido ya que existen variaciones o **sabores** de Markdown están:
- Original, creado por **Jhon Gruber**.
- Multi-Markdown, usado en multiples editores de texto.
- Markdown extra, las funciones básicas y adicionales para PHP.
- Github Markdown, usado especialmente por [[1 Github]]. 

# Conceptos Básicos
---
## Párrafos
Para crear párrafos solo es necesario hacer doble **enter** y se creara una distinción entre el primer y segundo párrafo.

Para hacer Breaks en el texto, solo se debe de colocar un doble espacio y el texto que sigue se situara en la siguiente línea.

>[!Attention]  Esto solo es el caso para MD Basic, interpretes como [[Obsidian]], no lo consideran

## Títulos
Los títulos o **encabezados** separan el contenido de las notas en secciones, existen dos formas de marcarlos:
```Markdown
Header 1
===
Header 2
---------

# Título 1 (El más grande)
## Título 2
### Título 3
#### Titulo 4
##### Titulo 5
###### Titulo 6

6 es el maximo posible
```

## Énfasis
El texto con énfasis se marca de la siguiente forma:
```Markdown
**Este texto es negrita**
__Este texto esta en negritas__

*Este texto es italica*
_Este texto esta en italica_

~~Este texto está tachado~~
==ESte texto esta surayado==

Si quieres poner variables del tipo var_example_int debes de colocar backslash (\) antes del guión o guión bajo
var\_example\_int
```

## Citas
Para hacer citas se usa el símbolo de mayor que (>) seguido del texto que deseas marcar como cita y la cita termina al saltar el párrafo.

>Esto es una cita

## Lineas verticales
Para usar líneas verticales como separadores es posible usar -, * o _
```Markdown
---
***
___
```

---
***
___

## Listas
Puedes enlistar elemento de forma 
```Markdown
No ordenada
- Elemento 1
- Elemento 2

Ordenada
1. Primero
2. Segundo
para la ordenada no importa que sean consecutivos, pude ser puramente 1. elemento.

Para anidar listas simplemente se coloca un tabulador (4 espacios) en el elemento anidado
1. Elemento 1
2. Elemento 2
	- Elemento 2a
	- Elemento 2b
3. Elemento 3

```

# Conceptos Avanzados
---
## Callouts
En [[Obsidian]] puedes usar **Call outs** para marcar el texto en una ventana de color.

```
>[!info]
>[!note]
>[!warning]
>[!tip]
>[!tldr]
>[!todo]
>[!check]
>[!faq]
>[!fail]
>[!error]
>[!bug]
>[!example]
>[!quote]

Si colocas un + o un - puedes hacer que la ficha se pueda doblar
>[!info]+
```

>[!faq]- Callout
>Este es un ejemplo
>de un call out desplegable

## Enlaces
Los enlaces se usan con los símbolos de [] y () juntos, dentro de los paréntesis cuadrados ira el nombre que deseas que aparezca y en los paréntesis redondos el link del sitio Web.

>[!tip]- Titulos
>Opcionalmente después de la dirección URL puedes colocar el titulo que quieres que aparezca en el enlace entre comillas.

```Markdown
[Google](https://google.com "Google Search")
```
Otra forma de usar links es crear la referencia en el documento para usarla cómodamente a lo largo del texto:
```Markdown
La referencia del enlace se le asigna un nombre con []: con el nombre dentro de los parentesis, para usarla en el texto se pone primero el nombre del enlace entre [] y despues el valor de la variable entre []
[Bing][msb]

Referencia:
[msb]: https://bing.com

```

El buscador [Bing][msb] no es tan usado como el buscador de [Google](https://google.com)

[msb]: https://bing.com

Si quieres colocar el link directamente puedes colocarlo entre < >
<https://google.com>

## Imágenes
Las imágenes no son fáciles de usar; se manejan similar a los enlaces colocando un símbolo ! antes del enlace:
```Markdown
![Demo](https://placehold.it/350X150)

Si la imagen esta dentro del Vault puedes hacer referencia directa al elemento
![[imagen.png]]
```

También se puede usar el modo de referencia de la misma forma que con los [[Enlaces]].

## Codigo
Para colocar una línea de código se debe colocar entre comillas invertidas `rm`. 
>[!info] El símbolo de comilla invertida se coloca con Alt+96, si tienes teclado numérico o Alt Gr + } 

Para colocar  bloques de código usa tres tildes al inicio y al final del bloque, también puedes colocar el lenguaje del código.
```Python
def hola_mundo():
    print(&quot;Hola Mundo&quot;)
    
```

Lo que este dentro de los bloques de código no será interpretado por MD.

## Videos
Para videos de [Youtube](https://www.youtube.com), puedes dar click en el botón de *share* y en la opción de *embed* encontraras un código que podrás pegar y el video aparecerá como un recuadro al que puedes interactuar. 

Ejemplo:
```Markdown
<iframe width="560" height="315" src="https://www.youtube.com/embed/qbxYWmi9oII?si=uLU0KhuyN7jiSxva" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
```

## Tablas
Las tablas no son soportadas por MD Básico, pero muchos interpretes de texto como [[Obsidian]] si lo hacen.

Para crear una tabla es necesario "armarla" con líneas horizontales | y verticales -  

| Col 1 | Col 2 | Col 3 |
| ----- | ----- | ----- |
| R1,C1 | R1,C2 | R1,C3 |
| R2,C2 | R2,C2 | R1,C3 |

``` Markdown

| Col 1 | Col 2 | Col 3 |
| ----- | ----- | ----- |
| R1,C1 | R1,C2 | R1,C3 |
| R2,C2 | R2,C2 | R1,C3 |

Para orientar el texto de las celdas podemos poner * en el segundo renglon 
|*----- | Alineado a la izquierda
|*-----*| Centrado
| -----*| Alineado a la derecha

```

