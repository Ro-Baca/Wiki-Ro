---
title: Configuración Básica
tags:
  - software
  - linux
noteOrder: "4"
---
# Configurar el perfil de rendimiento
---
En Pop!_OS, la gestión de energía está controlada por una herramienta nativa `system76-power`. Esta herramienta permite fijar el perfil de energía y el sistema recordará tu elección incluso después de reiniciar.

Para modificar el perfil de forma permanente, con la intencion de que cada que el sistema inicie entre en tu perfíl específico de rendimiento hay que modificar un archivo de configuracion del sistema con el comando:

``` Bash
sudo systemctl edit system76-power.service
```

Se abrirá un editor, donde hay que agregar la siguiente linea

``` Bash
[Service] 
ExecStartPost=/usr/bin/system76-power profile performance
```

>[!Attention]  Es importante que coloques estas lineas por encima de la linea que marca `###Edits below this comment will be discarded`

Guarda el archivo con Ctrl+O, Enter y Ctrl+X
Finalmente, en la terminal escibe el comando para recargar los deamons del sistema

``` Bash 
sudo systemctl daemon-reload
```

# Log-in Automatico
---
Par a evitar que Pop!OS te pida la contraseña del usuario cada que inicie el sistema COSMIC aun no tiene la opcion habilitada en la interfaz gráfica, por lo que es necesario editar un archivo de configuracion con la terminal:

El sistema usa el comando de arranque `start-cosmics` y el gestor gestor de pantallas lee un archivo de condiguración `cosmic-greeter.toml`

Para abrir la configuracion exacta del greeter usa el comando:
``` Bash
sudo nano /etc/greetd/cosmic-greeter.toml
```

Debes agregar el siguiente bloque al final del archivo
``` Text
[initial_session]
command = "start-cosmic"
user = "ro"
```

Guarda los cambios (`Ctrl+O`, `Enter`, `Ctrl+X`).

