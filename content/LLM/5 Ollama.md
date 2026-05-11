---
title: Ollama
tags:
  - software
noteOrder: "5"
---
Ollama es una herramienta que te puede facilitar la ejecución de modelos locales en tu computadora. Es para un uso principiante, con un poco de dificultades ya que corre principalmente en la terminal, aunque tiene su interfaz gráfica, esto es reciente.

En la pagina de [Ollama]([https://ollama.com/](https://ollama.com/)) podemos encontrar un catalogo de los modelos que podemos encontrar, **todos los modelos en Ollama están cuantizados.**

>[!Tip]-
Es importante leer el Readme de la pagina del modelo para conocer completamente las capacidades y necesidades del modelo.

# Como usar un modelo

## Run
Para correr un modelo usamos el comando
``` Bash
ollama run gema3:4b
```
Al correr el comando run por primera vez, descargara el modelo si no lo tiene.

## Help
Una vez que tienes un modelo corriendo, con la instrucción `/?` podemos ver todas las instrucciones posibles
## Imágenes
Si tu modelo es capaz de trabajar con imágenes, para poder usarlas con la terminal debes de colocar la ruta donde se encuentra tu archivo justo al final de tu prompt.

``` Bash
Analisa esta imagen C:/Imagenes/ejemplo.jpg
```

## Show
Con el comando show  podemos ver diferentes valores que están configurados en nuestro modelos.
`/show info`: muestra detalles generales del modelo.
`/show parameters`: muestra parámetros actuales del modelo (**stop, temperatura, top_k, top_p**).
`/show system`:  muestra los *system messages* que están configurados en el modelo
`/show license`: muestra la licencia del modelo 

## Set
Los comandos de set, nos permiten modificar los valores que tiene el modelo.
`/set verbose`: Hace que al final de una respuesta el modelo te de las estadísticas de su respuesta (tiempo de duración, tiempo de carga, ratio de evaluación del prompt, etc.).
`/set parameter`:
`/set system`:

## Bye
Una vez que termines de usar al modelo podemos terminar la sesión usando
``` Bash
/bye
```

>[!note] Al cerrar la sesión, los mansajes del sistema se pierden y los parámetros modificados regresan al valor default.

## Guardar y cargar sesiones
Usando el comando 
``` Bash
/save NombreDeLaSesion
```
Guardamos la sesión actual y todos los parámetros que hemos modificado

Para cargar una sesión previamente guardada usamos
``` Bash
/load NombreDeLaSesion
```

>[!Info]-
>Ollama realmente no guarda y carga la sesión, crea una copia del modelo y guarda ese modelo con las modificaciones que se hicieron para poder iniciarlo con los valores correctos.

## Información de los modelos
Para conocer los modelos que tenemos cargados en la computadora debemos usar 
``` Bash
Ollama list
```
Aquí aparecerán todas las sesiones que hemos guardado, ya que se guardan como si fueran una ramificación de un modelo existente, pero esto no quiere decir que cada sesión pesara lo mismo que el modelo original; ollama aprovecha que ya existe el modelo y solo guarda los cambios contra el original. 

Para observar los modelos que están corriendo en este momento podemos usar
``` Bash
Ollama ps
```

Para eliminar modelo del disco usamos
``` Bash
ollama rm ModelName
```

Para ver la información del modelo sin cargarlo usamos
``` Bash
ollama show ModelName
```

# ModelFile
Una alternativa a guardar y cargar constantemente tus sesiones para tus modelos es usar los archivos llamados Modelfiles (así deben llamarse siempre, no tienen extensión).

El archivo siempre debe iniciar con `FROM ModelName` por ejemplo:

`FROM gemma3:12b-it-qat` 

Después debes escribir los valores que quieres modificar usando los identificadores correctos:

`PARAMETER` -> Para identificar parámetros del modelo.

`PARAMETER num_ctx 1000` configura el contexto que toma el modelo en 1000

`PARAMETER temperature 0.5` configura la [temperatura](obsidian://open?vault=content&file=Apuntes%2FLLM%2F3%20Configuraci%C3%B3n%20Modelo%20local) del modelo en 0.5
	
`SYSTEM` -> Para identificar *system messages*, debe ser en una sola linea o usar """.

`MESSAGE user/assistant` -> Agrega mensajes como si ya hubiera un chat iniciado, pueden ser mensajes tanto del usuario como del asistente.

`TEMPLATE` -> Especifica una plantilla para el modelo.

Para crear modelos con Modelfile debemos usar un comando como el siguiente:
``` Bash

ollama create ModelName -f ./Modelfile # Si el Modelfile esta en otra dirección es importante colocar el Path correcto.

ollama push # Empuja el modeloespecifico al "registry"
```


# Ollama Server
Ollama por defecto inicia un servidor en tu computadora, por lo que si quieres llamarlo desde código puedes usar su propia API o el SDK de OpenAI.
