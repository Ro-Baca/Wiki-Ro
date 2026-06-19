---
title: AI local
tags:
  - PC
  - software
noteOrder: "5"
---
La Pc cuenta con [Ollama](obsidian://open?vault=content&file=Apuntes%2FLLM%2F5%20Ollama) para correr localmente modelos de LLM

Actualmente cuenta con los siguientes modelos:

# Qwen3.5:9B
---
[Resumen del modelo](https://ollama.com/library/qwen3.5)

**Alibaba Cloud / Qwen Team (China).**

Lanzado a principios de 2026, Qwen3.5-9B ha sacudido la comunidad al competir frente a frente con modelos masivos de más de 120 mil millones de parámetros en benchmarks académicos y científicos. 

Sus puntos fuertes son su arquitectura multi-modal nativa (entiende visión y texto profundamente entrelazados), su gigantesca ventana de contexto y un desempeño multilingüe líder en la industria. Es un modelo de peso medio que golpea como un peso pesado. Perfecto como agente de inteligencia general para equipos de gama media. 

**Brilla en el procesamiento de documentos inmensos, desarrollo de aplicaciones globales multilingües y sistemas autónomos que deban analizar tanto imágenes como texto con alta precisión.**

# DeepSeek-R1:8B
---
[Resumen del modelo](https://ollama.com/library/deepseek-r1)

**DeepSeek (China).**

Este modelo es una versión destilada de la familia de razonamiento R1 de DeepSeek. Su principal punto fuerte radica en que hereda la capacidad de pensar paso a paso de el R1 original, pero compactado en 8 mil millones de parámetros . Esto le permite exhibir habilidades de lógica avanzada y matemáticas que normalmente solo se ven en modelos de más de 30B de parámetros, manteniendo unos requisitos de memoria gráfica muy bajos.

**Ideal para tareas que requieren lógica profunda, resolución de problemas matemáticos o programación a nivel local sin consumir excesivos recursos . Perfecto para asistentes donde prefieras que la IA "piense" y verifique su razonamiento antes de escupir una respuesta.**

# Phi-4-Mini:3.8
---
[Resumen del modelo](https://ollama.com/library/phi4-mini)

**Microsoft (Estados Unidos).**

Con tan solo 3.84 mil millones de parámetros, este es uno de los modelos "pequeños" más agresivos del mercado actual. Su mayor fortaleza es la densidad de su entrenamiento basado fuertemente en datos sintéticos de alta calidad y su impresionante capacidad multi-modal.

Supera a muchos modelos que lo doblan en tamaño y ofrece una enorme ventana de contexto. Además, trae mejoras críticas en atención y vocabulario que lo hacen excelente en escenarios multilingües.

**Diseñado específicamente para entornos con restricciones extremas de memoria y latencia (como ejecución directa en teléfonos móviles, laptops de gama baja o dispositivos _edge_). Es brillante para análisis de documentos locales, aplicaciones integradas y tareas de razonamiento lógico rápido.**

# DeepSeek-Coder-V2:16B
---
[Resumen del modelo](https://ollama.com/library/deepseek-coder-v2)

**DeepSeek (China).**

Este modelo (la versión *Lite* de 16B de parámetros) utiliza una arquitectura de Mezcla de Expertos (MoE). Aunque tiene 16 mil millones de parámetros en total, solo activa una pequeña fracción de ellos por cada token generado, lo que lo hace increíblemente rápido. Su punto fuerte absoluto es el dominio de la programación: ha sido entrenado masivamente en repositorios de código y domina cientos de lenguajes de programación, superando incluso a modelos cerrados mucho más grandes en benchmarks de desarrollo de software.

**Es la herramienta definitiva para desarrolladores. Ideal para integrarlo directamente en tu editor de código para actuar como un "copiloto" avanzado local. Excelente para auto-completado complejo, detección de _bugs_, análisis de repositorios completos y generación de _scripts_ técnicos.**

# Gemma3n:E4B
---
[Resumen del modelo]([https://ollama.com/library/deepseek-coder-v2](https://ollama.com/library/gemma3n))

**Google DeepMind (Estados Unidos)**

Familia de modelos de inteligencia artificial generativa de pesos abiertos, lanzada como una variante altamente optimizada de la serie Gemma 3. Está diseñada específicamente para ejecutarse de manera eficiente de forma local en dispositivos cotidianos como laptops, teléfonos y tablets. El modelo utiliza carga condicional de parámetros para operar de forma más ligera. Se presenta principalmente en configuraciones de memoria activa de 2 mil millones (E2B) y 4 mil millones (E4B) de parámetros efectivos, lo que reduce drásticamente los requisitos de hardware.