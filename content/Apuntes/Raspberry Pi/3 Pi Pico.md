---
title: Pi Pico
tags:
  - hardware
  - apunte
noteOrder: "3"
---
**NO es un ordenador Linux.** Es un **microcontrolador**, similar a un Arduino, pero mucho más potente y con lógica de 3.3V.

## Especificaciones (Chip RP2040)
* **Núcleo:** Dual-core Arm Cortex-M0+.
* **Velocidad:** 133 MHz (overclockable fácilmente).
* **RAM:** 264kB on-chip.
* **GPIO:** Lógica de 3.3V (¡No meter 5V o se quema!).

## PIO (Programmable I/O)
Permite crear interfaces de hardware personalizadas, como controlar tiras LED o leer sensores extraños, sin cargar al procesador principal.

## Lenguajes de Programación
1.  **MicroPython:** amigable de inicio
2.  **C/C++ SDK:** máximo rendimiento.
3.  **CircuitPython:** Alternativa de Adafruit.

## Modelos
* **Pico:** Estándar.
* **Pico W:** Incluye chip Infineon para WiFi y Bluetooth.

> [!WARNING] Cuidado
> La Pico no tiene sistema operativo. Tu código corre directamente sobre el metal ("Bare metal"). Si desconectas la energía, el programa se reinicia.