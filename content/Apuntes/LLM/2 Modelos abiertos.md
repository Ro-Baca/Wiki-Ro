---
title: Modelos abiertos
tags:
  - software
noteOrder: "2"
---

Los LLM locales, son modelos capaces de correr utilizando los recursos locales de la computadora en lugar de ser a través de un servicio en la nube. 

Cuando descargas un modelo abierto, lo que haces es cargar un modelo pre-entrenado, con sus algoritmos y entrenamientos definidos anteriormente y solo descargas, en escancia, sus parámetros y los corres de forma local.

>[!warning] Los modelos abiertos no tienen el código de entrenamiento, tiene los resultados, los parámetros.

# Funcionamiento
Los LLMs trabajan con *Tokens* para convertir las palabras de los prompts en números, estos números entran en la red neuronal que ya esta entrenada y tiene sus parámetros bien definidos y te entrega una respuesta acorde a los tokens mas probables o que mejor respondían a los pesos de la red de acuerdo con tu prompt.

>[!note] *Prompt* es la pregunta o petición que el usuario le hace al modelo

Los Tokens que elige el modelo para la respuesta vienen de una lista de probabilidad y elegirá la mejor de acuerdo al contexto.

>[!example]- Ejemplo
Entrada: "The sky is"
Posibles salidas: Clear [12%], blue [45%], visible [21%], ... 
Salida: blue

# Comparación

|                                        Modelo Abierto                                        |             Modelo de Propietario              |
|:--------------------------------------------------------------------------------------------:|:----------------------------------------------:|
|                                          Uso gratis                                          |           Uso de pago o suscripción            |
|                                      Corren localmente                                       |   Necesitas un proveedor que haga de *host*    |
|                                      100% de Privacidad                                      |       Privacidad incierta o dependiente        |
|                                        No hay censura                                        |        Censura dependiendo del provedor        |
|                                       Función offline                                        |               Requiere internet                |
| Casos de uso locales:<br>Chatbot, generador de codigo,<br>resumir textos, analisis de datos. | Casos de uso total, con rendimiento optimizado |

# Modelos abiertos existentes

Podemos encontrar diferentes modelos abiertos, desarrollados por diferentes empresas como Google, Meta, etc. [HuggingFace](https://huggingface.co) tiene un catalogo donde podemos encontrar modelos abiertos y los requerimientos necesarios para poder usarlos.

Aquí puedes encontrar si un dispositivo especifico es capaz o no de correr el modelo.
![[LLM_abierto.png]]

También podemos visualizar las capacidades del modelo; si es capaz de trabajar con imagenes, generar codigo, etc.  
# Licencias
Algunos modelos funcionan bajo una licencia especifica de uso, podemos saber que licencia usan en su pagina de HuggingFace.
## MIT/apache 2.0
- Muy permisivas.
- Permiten el uso comercial y privado sin limites.
- No requiere *atribution*.
## Llama
- Algo permisiva.
- Permite uso privado y comercial con limites.
- Requiere *atribution*.
- Tiene casos restringidos.
## Gemma
- Algo permisiva.
- Permite uso privado y comercial con requerimientos.
- Requiere *atribution*
- Tiene casos restringidos.

# Requerimientos de Hardware

>[!note] Inferencia: el proceso de usar un LLM para generar outputs. Cuando un modelo de inteligencia artificial proporciona una respuesta a partir de datos.

Los modelos locales necesitan correr procesos en paralelo, por lo que necesita memoria VRAM y una GPU, sin embargo, en algunos casos es posible correr modelos usando la memoria RAM y la CPU a cambio de que estos modelos serán mas lentos.

Para saber que tan grande es un modelo debemos observar el numero de parámetros que tiene, mientras mas parámetros tenga serán necesarios mas recursos.

>[!example] Pro ejemplo, el modelo [Gemma3-27B](https://huggingface.co/google/gemma-3-27b-it) tiene 27.4 Billones de parámetros, es un modelo pequeño comparado con los modelos de 700 u 800 Billones que tiene el modelo de DeepSeek R1.

Cargar un modelo, significa cargar todos los parámetros y el contexto que necesita para funcionar. Un parámetro puede ser un valor float32 o float16, que equivale a 4 o 2 bytes de memoria respectivamente. Por lo que un modelo de 2Bp ocupa entre 4 y 8 GB de memoria.

Un modelo de 27Bp ocupa 100GB de memoria.

# Cuantización
La cuantización es un proceso que nos ayuda a cargar modelos con menos recursos físicos. Es un proceso matemático que convierte los valores de float32/16 a int4/8 disminuyendo la precisión de cada parámetro a cambio de "comprimir" el modelo haciendo que ocupen menos espacio, con cuantización los parámetros ocupan de 0.5 a 1 byte de memoria.

>[!note] Hay algoritmos de cuantización que no afectan el rendimiento del modelo haciendo que funcionen casi igual con menos recursos.

En [HuggingFace](https://huggingface.co) podemos encontrar modelos cuantizados. Los modelos con la nomenclatura GGUF son normalmente modelos cuantizados. 

# Manejo de archivos
Algunos modelos son capaces de manejar archivos, copiando y pegando el texto del archivo y teniendolo como si hubiera sido un prompt, por lo que depende de si es capaz de manejar todo el contexto del chat. Si no es posible manejar el archivo entero, el archivo se va a descomponer en pedazos y solo cargara los pedazos mas relevantes. Esta tecnica es conocida como *Retreival Augmented Generation (RAG)*.

# Crear un modelo a partir del GGUF
Es posible descargar el archivo GGUF de un modelo ya que este archivo es el que contiene los pesos, parámetros y metadatos.

Debes buscar los modelos que tengan _K_M_O o _K_O_S, son los modelos cuantizados mas confiables.

En [Ollama]([Apuntes/LLM/5 Ollama](obsidian://open?vault=content&file=Apuntes%2FLLM%2F5%20Ollama)) debes colocar el archivo en la misma carpeta que tu modelfile y en la primera linea debe decir: 
``` Bash
FROM ./ModelName.gguf
```