---
title: Troubleshooting
draft:
tags:
  - PC
  - errores
noteOrder: "3"
---
# Desconección antena Wifi
---
Ocacionalmente el driver que maneja la tarjeta de wifi `mt7921e` se desconecta para ahorrar energía y el sistema pierde comunicación con ella. 

Para solucionarlo hay que forzar el reinicio directo del controlador de la tarjeta:

``` Bash
# apaga el modulo
sudo modprobe -r mt7921e 
# volver a encenderlo
sudo modprobe mt7921e
```

Si esto no funciona, lo mas probable es que la tarjeta quedara no responda a nivel de hardware, en estos casos hay que apagar la computadora completamente, esperar 1 minuto y volver a encender.