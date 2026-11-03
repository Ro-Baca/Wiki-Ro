---
title: Tailscale
tags:
  - PC
  - OpenSource
noteOrder: "7"
---
[Tailscale](https://tailscale.com/) es, una herramienta que crea una Red Privada Virtual (VPN) segura y directa entre dispositivos y servidores sin importar en qué parte del mundo estén. Funciona como una red en malla (_mesh_) donde tus equipos se conectan entre sí de forma cifrada usando el protocolo **WireGuard**, haciendo que parezca que todos están conectados a la misma red local de tu casa u oficina.Su objetivo es permitir acceder a todos nuestros equipos de forma remota, independientemente de si están detrás de un CG-NAT o un NAT, y todo ello de forma rápida y fácil.

Esta herramienta hace uso de **SDN (Software Defined Networks)** para intercomunicar los diferentes nodos a la red privada virtual VPN e interconectarlos entre sí. Esta herramienta es totalmente gratuita, pero también incorpora versiones de pago que ofrece más opciones de configuración y personalización. Tailscale proporcionará la misma dirección IP privada dentro de la red VPN a los mismos equipos, es decir, es una dirección IP fija y que no cambiará, independientemente de si nos conectamos a Internet por WiFi o cable, algo fundamental para que todo funcione correctamente.

Tailscale es compatible con sistemas operativos Windows, Linux, MacOS, Android, iOS y también es compatible con dispositivos basados en ARM como la **Raspberry Pi**. Además de que se conecta a servidores en la nube: AWS Lightsail, AWS VPC, Azure App Services, Azure Linux VMs, Azure Windows VMs, Google Compute Engine VMs, Hetzner VMs y Oracle Cloud VMs. Podremos hacer uso de SSO y también de MFA para la autenticación y dar de alta los diferentes equipos, los dispositivos solamente se podrán conectar a nuestra red VPN cuando hayamos iniciado sesión con nuestras credenciales. 

# Casos de Uso
---
Uno de los casos más útiles es con el acceso remoto a nuestro NAS y cámaras IP, es tan fácil como instalar Tailscale en el servidor donde tenemos el NAS, activar la opción de subnet router con un comando simple en terminal y compartir la subred de casa en el panel web. En ese momento, con la app de Tailscale, ya podremos acceder directamente a las carpetas del NAS o ver las cámaras de seguridad como si estuviéramos en casa, sin abrir puertos ni exponer nada a Internet.

También es muy habitual usarlo en el teletrabajo, cuando hablamos de máxima seguridad para no tener que abrir puertos en el router. Se puede configurar Tailscale en una cmputadora de la oficina y en la laptop de casa, luego activar la función de *exit node* en el equipo de la oficina y seleccionar ese nodo desde el cliente móvil. La clave es que todo el tráfico de trabajo pasará cifrado y punto a punto, lo que nos permite usar recursos internos de la empresa o acceder a servidores remotos con seguridad.

Y si hablamos de un uso ideal, podemos pensar en una red familiar en la que compartir dispositivos. Se puede crear una cuenta gratuita, invitar a nuestros familiares mediante enlace o correo y dar de alta sus telefonos, tablets y computadares. La idea es que cuando estén conectados, cualquiera pueda acceder al NAS compartido, a la impresora o a carpetas comunes sin mayor complicacion.

# Seguridad
---
Como menciona anteriormente, Tailscale hace uso de la **VPN WireGuard** para proporcionar confidencialidad, autenticación e integridad de datos, por tanto, no solamente estamos seguros, sino que el rendimiento que conseguiremos será realmente rápido.

Con Tailscale, y es que **las comunicaciones son punto a punto**. Por tanto, el tráfico de red no pasará a través de sus servidores, así tendremos una baja latencia y una muy buena velocidad real. Tambien cuenta con una rotación automática de claves; las claves se rotan por hora y día para reducir el riesgo de robo de claves o credenciales obsoletas. Y comprueba que el tráfico de la red sea a prueba de manipulaciones.

También se pueden definir un control de acceso que está basado en un rol para restringir los servidores confidenciales o hasta autorizar solamente a aquellos usuarios que lo necesitan. Además de que cada conexión se registra de manera centralizada desde ambos extremos.