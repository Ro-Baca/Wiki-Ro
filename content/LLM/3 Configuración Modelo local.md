---
title: Configuración del Modelo
tags:
  - software
noteOrder: "3"
---
# System Prompt
Se usa para generar instrucciones generales para ser aplicadas en cada prompt del modelo, es como si tuviera un prompt con prioridad.
# Temperatura
Controla que tanta aleatoriedad introduce en la salida generada, valores altos aumenta la creatividad y variedad. Modifica la probabilidad de que se elija un token especifico. Sus valores van de 0.1 a 1.

## Low temperature
Con valores bajos, la diferencia en las probabilidades son exageradas, aumentando las probabilidades predecibles. El modelo se vuelve mas predecible.

## High temperature
Normaliza las probabilidades, haciendo que las respuestas menos predecibles sucedan.

>[!Info] La generación de las salidas puede verse como un dado con peso, donde el lado con mas probabilidad es el mas pesado, pero no necesariamente el que siempre saldrá, aun es posible que otros lados del dado salgan.
# Top-k
Limita el numero de candidatos de los que el modelo puede elegir para los tokens de salida.
k = 5 Quiere decir que solo considera 5 opciones de respuestas.
k = 1 Solo considera la primera opción para respuesta las respuestas.

Valores bajos aumentan las respuestas mas probables.

# Top-p
Limita los candidatos, basándose en la probabilidad combinada.
P = 0.5 Considera solo los candidatos que su probabilidad combinada sea >50%.
P = 0.9 Considera solo los candidatos que su probabilidad combinada sea > 90%.

# Min-p
Descarta los candidatos que no alcanzan una probabilidad mínima.
p = 0.05 Remueve todos los candidatos con una probabilidad individual < 5%

# Repeat Reality
Que tan factible es que el modelo repita el mismo Token.

# Context lenght
Es el maximo de Tokens que puede procesar en 1 prompt. El contexto tambien toma espacio en memoria.

# K/V Cache Cuantización 
Valores menores reducen el uso de memoria pero disminuye la calidad de las respuestas. Busca que el modelo procese menos Tokens para generar outputs.

# Structured Output
Puedes forzar que el modelo te entregue una salida con un formato estructurado, por ejemplo con JSON.

Para hacerlo, es necesario agregar un JSON schema, para que el modelo sepa como debe generar la salida.

También es necesario usar un prompt fuerte donde menciones el JSON y los datos que deseas.