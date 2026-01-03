---
title: Introduccion a github
tags:
  - apunte
  - Github
noteOrder: "1"
---
# ¿Qué es?
---
[Github](https://github.com/) es una plataforma en la nube que utiliza el sistema Git para alojar proyectos de software. Es como una red social para desarrolladores donde en lugar de fotos, compartes versiones de tu código.

![[Guthub_logo.png]]
# ¿Cómo funciona?
---
Se basa en el control de versiones. Permite que varias personas trabajen en el mismo archivo sin sobrescribir el trabajo de los demás, manteniendo un historial de cada cambio realizado.

>[!Info] Git es la herramienta para el control de versiones que vive en tu computadora. GitHub es la plataforma en la nube donde "viven" tus proyectos para que otros puedan verlos o colaborar.

GitHub funciona mediante *Snapshots*. En lugar de guardar diferentes archivos como *proyecto_final_v2.zip*, Git guarda el estado de todo el proyecto en un momento dado, permitiéndome viajar en el tiempo a cualquier versión anterior.

# Conceptos básicos 
---
## Estructura
- **Repositorio (Repo):** Es la carpeta de tu proyecto. Pero no es una carpeta normal; contiene una carpeta oculta (.git) que registra cada cambio que haces.

- **Repo Local vs. Repo Remoto:**
	- **Local:** El código que está físicamente en tu computadora.
	- **Remoto:** El código que está en los servidores de GitHub.

- **Directorio de Trabajo:** Los archivos que estás editando actualmente en tu editor.

## Flujo
- **Modified:** Hay cambios en tus archivos pero aún no los has guardado en la base de datos de Git.

- **Staging:** Es una zona intermedia. Aquí pones los cambios que quieres incluir en tu próxima snapshot usando git add.

- **Committed:** Los cambios ya están guardados de forma segura en tu base de datos local.

## Colaboración
- **Branch:** Es una línea de tiempo independiente. La rama principal suele llamarse **main**. Si quieres probar una idea loca sin romper lo que ya funciona, creas una rama nueva.

- **Merge:** Es el proceso de unir dos ramas. Por ejemplo, cuando terminas tu idea loca y quieres integrarla a tu branch principal.

- **Commit:** Es un "punto de control" en la historia de tu proyecto. Cada commit tiene un ID único, llamado [SHA](https://www.encryptionconsulting.com/education-center/what-is-sha/) que te permite volver a ese momento exacto si algo sale mal.

- **Head:** Es un puntero que indica en qué commit o rama te encuentras parado actualmente.

## Específicos 
- **Fork:** Es como "hacer una fotocopia" del repositorio de otra persona en tu propia cuenta. Te permite experimentar sin afectar el original.

- **Pull Request (PR):** Es una petición formal para que el dueño de un proyecto revise tus cambios y decida si quiere incorporarlos a su código.

- **Issue:** Una sección para discutir errores, sugerir funciones o planificar tareas, como un tablón de anuncios del proyecto.

- **README.md:** Es la portada del proyecto, escrita en [[Markdown]], donde explicas qué hace tu código y cómo se usa.

# Referencias
---
https://docs.github.com/es/get-started/start-your-journey/about-github-and-git
https://www.encryptionconsulting.com/education-center/what-is-sha/