---
title: Pop!_OS
draft: false
tags:
  - PC
  - linux
noteOrder: "2"
---
## El sistema operativo
----
Pop! os es una distribución de Linux basada en Ubuntu, desarrollada y mantenida por el fabricante de computadoras estadounidense **System76**. 
Aunque esta diseñado para laptops, es posible usarla para cualquier tipo de computadora.

El entorno gráfico esta hecho con una version personalizada de **GNOME**  llamado COSMIC y sus ventajas son:
- Auto-tiling
- Workspaces
- Launcher con la tecla super

Cuenta con soporte tanto para **NVIDIA** como **AMD**, esta pensado para desarrolladores y profesionales STEM. 

Cuenta con la pop! shop donde puedes encontrar los packetes de software que quieras, de forma segura ya que pop! os usa flatpack.

https://system76.com/pop

## Comandos útilies de linux
---

``` Batch
sudo reboot # Reinica el sistema

sudo apt update _app_ # Actualiza _app_
sudo apt upgrade # Upgradea _app_

sudo apt install _app_ # Instala _app_
sudo apt remove --purge _app_ # Desinstalla _app_
sudo apt autoremove # Limpia cualquier archivo o dependencia sobrante 

sudo nano /PATH # Modifica o crea un archivo en el PATH
```

## Comandos de programas de terceros
---
``` Batch
glmark2 # Para ver un puntaje de renderizado de la pc

systemd-analyze # Para ver el tiempo de inicio del sistema

htop # Para ver el rendimiento del sistema

neofetch # Para ver informacion del sistema

sudo amdgpu_top --gui # Para ver una GUI con graficas de rendimiento vs tiempo
```

