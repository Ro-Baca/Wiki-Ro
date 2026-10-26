---
draft: true
---




# Misty II

![[Misty II.png|412]]
Misty es probablemente el estándar de oro actual en plataformas de desarrollo para robótica social.

- **La separación:** En su interior, Misty tiene **dos procesadores Snapdragon distintos**. Un Snapdragon 820 ejecuta Windows IoT / Android para manejar la carga cognitiva pesada (navegación VSLAM, reconocimiento facial, procesamiento de audio y visión artificial). El control de los motores, los encoders, los sensores de tiempo de vuelo (ToF) de los bordes y la cinemática del cuello los maneja un procesador dedicado de menor nivel.
    
- **El detalle modular:** Misty literalmente tiene un puerto en la espalda tipo mochila (_backpack_) donde puedes conectarle un microcontrolador (compatible con Arduino) a través de comunicación Serial (RX/TX). Esto permite a los investigadores delegar hardware adicional directamente a la capa de bajo nivel sin tocar el sistema operativo principal.

# MiRo-E

![[MiRo-E.png|335]]
Este es un robot con forma de perro/conejo diseñado específicamente para el estudio de la biomimética (robótica inspirada en la biología). Su arquitectura está explícitamente diseñada para imitar el sistema nervioso de un mamífero.

- **El "Córtex Cerebral" (Alto nivel):** Utiliza una **Raspberry Pi** que se encarga de las decisiones complejas, el comportamiento espacial y la ejecución de nodos de ROS (Robot Operating System).
    
- **El "Tronco Encefálico y Médula" (Bajo nivel):** Utiliza múltiples **microcontroladores ARM Cortex** conectados en red. Estos actúan de forma refleja: si un sensor detecta un obstáculo inminente, el microcontrolador detiene los motores instantáneamente sin tener que "pedirle permiso" a la Raspberry Pi, actuando como un reflejo espinal.

# Vector

![[Vector.png|344]]
Aunque es un producto de consumo masivo, internamente su ingeniería es brillante.

- **La separación:** Vector utilizaba un procesador Snapdragon corriendo Linux para gestionar la conexión Wi-Fi, la cámara HD, las animaciones en pantalla y la conexión a la nube para la IA. Sin embargo, la estabilización de sus motores y las rutinas de prevención de caídas estaban codificadas en un microcontrolador Cortex-M4 en tiempo real. Esto es lo que le permitía "reaccionar" a que lo levantaras de la mesa con latencia cero, incluso si estaba procesando una respuesta de voz.

# Reachy Mini

## Hardware: Expresión en lugar de Locomoción

Reachy Mini es un robot de escritorio estático. No lucha contra la gravedad ni necesita calcular el equilibrio cada 20 milisegundos.

- **Cuello "Orbita":** Utiliza un actuador esférico patentado por Pollen Robotics que le permite inclinar, rotar y girar la cabeza en 3 grados de libertad con una fluidez orgánica, muy distinta al movimiento rígido de los servos tradicionales.
    
- **Antenas expresivas:** Cuenta con dos antenas motorizadas que funcionan como las orejas de un perro o las cejas humanas; suben, bajan o vibran para comunicar estados de ánimo (duda, entusiasmo, atención) sin necesidad de tener boca o pantalla facial.
    
- **Cinemática Clásica:** Para mover la cabeza hacia donde estás, usa **cinemática inversa analítica**: si la cámara detecta tu rostro a $X$ grados a la derecha, calcula exactamente cuánto deben girar los motores del cuello para mirarte a los ojos.
    

## Software: El reino del LLM y la Multimodalidad

El software de Reachy Mini está diseñado como un "cuerpo físico" para alojar Modelos de Lenguaje Grandes (LLMs) y modelos de Visión-Lenguaje (VLMs). Su bucle de funcionamiento no es un ciclo cerrado de 50 Hz, sino una **tubería conversacional y perceptiva**:

1. **Percepción (Ojos y Oídos):** Sus cámaras gran angular detectan rostros, gestos o qué objeto tienes en la mano (usando modelos de visión rápida como YOLO o MediaPipe). Al mismo tiempo, un micrófono captura tu voz y la pasa por un modelo _Speech-to-Text_ (como Whisper).
2. **Razonamiento (LLM / VLM):** El texto de lo que dijiste, junto con el contexto visual de la cámara, se envía al LLM (ya sea conectándose por internet a la API de OpenAI/Claude, o a un servidor local en tu red corriendo **Ollama**).
3. **Actuación Social (Voz y Gesto):** El LLM no solo responde con el texto que se convertirá en voz (_Text-to-Speech_), sino que a menudo se le pide que elija una etiqueta emocional o función (por ejemplo: `[emoción: curioso]`, `[acción: asentir]`). El controlador del robot traduce esa etiqueta en una coreografía preprogramada de las antenas y el cuello mientras te habla.

# Microduck

![[MicroDuck.png|353]]

**Microduck** es un robot bípedo de código abierto desarrollado por Pollen Robotics diseñado específicamente para aprender habilidades mecánicas mediante aprendizaje por refuerzo (reinforcement learning). Está construido bajo la premisa de ejecutar inferencia de IA directamente en el dispositivo (_edge AI_) sin depender de computadoras externas.
## Hardware: edge computing
En lugar de depender de una GPU pesada, Microduck utiliza componentes enfocados en la eficiencia y el control determinista en tiempo real:
- **Cerebro (SoC):** Su controlador principal es un **RK3566** (Quad-core ARM Cortex-A55). Este chip de bajo costo incluye un acelerador de IA (NPU), procesador de señal de imagen (ISP) e interfaces de hardware puro (MIPI CSI, UART, I2C, SPI) ideal para la robótica embebida.
- **Actuadores:** **15 servomotores** conectados en bus (Dynamixel) que le dan libertad de movimiento en las piernas, el cuello y un pico prensil.
- **Sensores:**
    - **Cámara y LiDAR:** Utilizados para la percepción espacial y el mapeo del entorno.        
    - **IMU (LSM6DSV16X):** La unidad de medición inercial está integrada directamente en el bus de los servos. Esto es crucial porque permite sincronizar perfectamente los datos de inercia con la retroalimentación de posición de los motores.        
## Software: La Tubería _Sim-to-Real_
El ecosistema de software de Microduck evita la programación cinemática tradicional. En su lugar, utiliza un stack basado en IA:

1. **Entrenamiento:** Las habilidades (caminar, patinar, o levantarse tras una caída) se entrenan en un entorno de simulación física **MuJoCo**. Se utiliza un algoritmo de aprendizaje por refuerzo **PPO** (Proximal Policy Optimization) donde el robot virtual aprende a base de prueba y error.
2. **Exportación:** Una vez que la "política" de movimiento es estable, el modelo neuronal se exporta en un formato ligero llamado **ONNX**.
3. **Ejecución (Runtime):** El archivo ONNX se carga en el sistema Linux del RK3566. El sistema operativo utiliza una arquitectura modular basada en **daemons** (servicios en segundo plano separados para el control, los servos, la cámara y las actualizaciones OTA).

Bucle de control de 50 Hz, el sistema tiene exactamente **20 milisegundos** para ejecutar un ciclo completo sin fallar:
1. **Lectura del Estado:** El robot recopila la información de la IMU, la posición y velocidad de sus 15 articulaciones, y el objetivo de movimiento.
2. **Inferencia:** Estos datos brutos entran al modelo ONNX procesado por la NPU. La red neuronal calcula cuál es el mejor siguiente movimiento para no caerse.
3. **Comando:** Se envían las instrucciones de torque o posición a los 15 servos a través del puerto UART.

**No es un LLM:** Microduck utiliza una **Política Sensorio-Motora** entrenada mediante Aprendizaje por Refuerzo. Es una red neuronal mucho más pequeña, ultrarrápida y matemática que solo "habla" el lenguaje de la física: traga datos de sensores (ángulos, aceleración) y escupe posiciones o fuerzas para los motores.
    
**Edge AI:** Para caminar y mantener el equilibrio, **no necesita internet**. Esto es obligatorio por las leyes de la física. Todo se calcula en el chip de su cabeza en ventanas de 20 milisegundos.
    
**Modelo neuronal de movimiento:** Actúa como un "cerebro reptiliano". Su única preocupación algorítmica es la propiocepción (saber dónde están sus partes) y la estabilización dinámica.

# **Jumper**  por KingKong Technology.

![[Jumper.png|583]]

Jumper comparte exactamente la misma filosofía de "Edge AI" y Aprendizaje por Refuerzo de la que hablábamos con Microduck, pero llevado a un formato mucho más complejo: es un **robot hexápodo con forma de cangrejo** diseñado para caminar, agarrar objetos y, como su nombre indica, saltar.

## Hardware
- **Físico:** Mide unos 40 cm de ancho y pesa 1.8 kg. Tiene dos pantallas redondas TFT que actúan como "ojos" para mostrar emociones.
- **Movilidad (22 DoF):** Cuenta con **22 servomotores** propietarios (desarrollados por la propia KingKong). Cada motor tiene codificadores magnéticos duales para medir con precisión extrema tanto la posición del motor como la de la articulación, algo vital para absorber el impacto al saltar.
- **El Cerebro (Edge AI):** Utiliza un procesador **Rockchip RK3576** (un hermano mayor del chip de Microduck) con una NPU de 6 TOPS para ejecutar inteligencia artificial localmente.
- **Sensores:** Para percibir su entorno, usa una cámara de 5 megapíxeles, una IMU de 6 ejes y un sensor de profundidad dToF (Direct Time of Flight) para mapear el terreno.

## El Software
Jumper utiliza exactamente la misma tubería _Sim-to-Real_ (de Simulación a Realidad) que Microduck: se entrena en el simulador **MuJoCo** usando el algoritmo **PPO** y el modelo resultante se exporta en formato **ONNX** para correr en la placa Rockchip.

- **Integración con asistentes de código de IA**. El repositorio de Jumper está diseñado para que le des instrucciones en lenguaje natural a una IA (como Claude o herramientas de código) y esta genere los entornos de prueba. 

La IA configura automáticamente el simulador, ejecuta las millones de iteraciones de prueba y error, y te devuelve el archivo de la red neuronal listo para pasarlo al robot.

Jumper es la demostración de hacia dónde va la robótica moderna: hardware asequible impulsado no por programación matemática rígida, sino por cerebros neuronales de bajo consumo entrenados masivamente en mundos virtuales.


# Open-duck



# MuJoCo
MuJoCo (Multi-Joint dynamics with Contact) es un motor físico escrito en C y C++ diseñado específicamente para la biomecánica, la ingeniería biónica y la robótica articulada. A diferencia de los motores de videojuegos (como Unity/PhysX o Unreal/Chaos) que priorizan que las colisiones se vean bien a 60 FPS en pantalla, MuJoCo prioriza la precisión matemática estricta y la velocidad de cómputo para el entrenamiento de inteligencia artificial.
- **Coordenadas Generalizadas:** En lugar de calcular cada pieza de un robot flotando en el espacio 3D y luego aplicar "restricciones" matemáticas para unirlas (lo que a menudo genera articulaciones que tiemblan o se separan), MuJoCo modela el robot directamente como un árbol perfecto de articulaciones. Esto elimina la holgura y los errores cinemáticos en sistemas complejos.
    
- **Dinámica de Contactos Suaves (Soft-contact dynamics):** Resolver impactos físicos (un pie metálico golpeando el suelo o un actuador agarrando una superficie) es el problema computacional más difícil en una simulación. MuJoCo utiliza un modelo matemático continuo que suaviza estas fuerzas a nivel numérico, permitiendo que los algoritmos de IA calculen gradientes eficientemente sin que la simulación colapse por registrar "fuerzas infinitas" al chocar dos objetos.
    
- **Velocidad de ejecución:** Al carecer del peso de un motor gráfico comercial, MuJoCo puede calcular miles de pasos de simulación física por segundo en un solo núcleo de CPU. Su variante más moderna, MuJoCo MJX, permite paralelizar entornos masivos directamente en la GPU usando JAX, ejecutando millones de iteraciones en minutos.