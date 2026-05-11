---
title: Uso en código
tags:
  - software
noteOrder: "4"
---
Para poder usar el modelo de LLM con código, es necesario usar una API ya que el modelo funciona como un servidor aunque sea de forma local, generando un *request* local a un modulo como http://127.0.0.1:1234.

Una opción recomendable es usar el [openAI SDK](https://openai.github.io/openai-agents-python/) 

``` python
# Ejemplo de "Hola Mundo"
from agents import Agent, Runner

agent = Agent(name="Assistant", instructions="You are a helpful assistant")

result = Runner.run_sync(agent, "Write a haiku about recursion in programming.")
print(result.final_output)

# Code within the code,
# Functions calling themselves,
# Infinite loop's dance.
```

Esto es muy parecido a como se usan las API de servicios de pago, la diferencia principal es se usa `base_url = "http:localhost:1234/ui"`

>[!warning] Es importante poner esta linea, si no el request se mandara al servicio de pago

Si estas usando LM Studio, es importante, en la ventana de Developer, cambiar el estado del servidor de **Stop** a **Running**. De esta forma se genera un servidor local para poder hacer el request.

Si estas usando Ollama, el servidor ya estara corriendo.
