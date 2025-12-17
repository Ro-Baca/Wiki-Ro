---
title: Configuración Básica
tags:
  - apunte
---

## 1. Flasheo del OS 

* Establecer `hostname` (ej. `raspberrypi.local`).
* Activar **SSH** (con contraseña o key pública).
* Configurar WiFi (SSID y Password).
* Establecer usuario y contraseña (ya no existe el usuario `pi` por defecto).

## 2. Acceso Headless (Sin monitor)
Si configuraste SSH:
1.  Alimentar la Rasp.
2.  Abrir terminal en tu PC.
3.  `ssh usuario@hostname.local` .

## 3. Primeros Comandos
Primero ejecuta siempre:
```bash
sudo apt update && sudo apt full-upgrade -y