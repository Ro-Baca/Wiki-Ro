---
title: Cheatsheet
tags:
  - Github
noteOrder:
---
## Inicio
```Bash
git init # Convierte una carpeta común en un repositorio de Git

git clone <url> # Descarga un proyecto existente en GitHub a tu PC
```
## Ciclo diario
```bash
git status # Revisa que archivos están en modified o en staging

git add . # Agrega todo lo modificado a staging

git commit -m “Explicación breve” # Toma lo que esté en staging y lo agrega al commit

git pull # Trae los cambios que hay en el remoto al local

git push origin main # Sube el commit al repositorio remoto

```

## Merge

```bash
git branch -a # Muestra todas las ramas activas del repositorio

git checkout Rama_diferente # Cambia el repo local a la rama: Rama_diferente
# Si la rama no existe git creara una nueva con ese nombre y usara como base la rama que este en el origin

git fetch origin # Baja el estado mas actual del repo remoto

git merge origin # Mezcla la rama a la que hiciste fetch con la local, es lo mas seguro y estandar, debes usar git add y git commit
# Para completar un merge hay que escribir el comentario, despues precionar ESC, :wq y Enter.

git rebase origin # Reescribe el historial como si hubieras creado la rama local en ese momento, debe usar git add

git push origin Rama_diferente # una vez actualizado el local hay que sincronizar el remoto

```