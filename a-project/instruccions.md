# AdminPro angular v9
## Git repositori
- Añadir repositorio remoto en el terminal  
```
git remote add origin https://github.com/jollcw/AdminPro-v9.git  
git push -u origin master  
```
- ver las opciones del repositorio
  >git remote -v  
```
origin  https://github.com/jollcw/AdminPro-v9.git (fetch)  
origin  https://github.com/jollcw/AdminPro-v9.git (push)
```
El fetch y push estan sincronizados  

- agregar todos los archivos para subir al repositorio
  > git add .  

- Hacer el primer commit con un mensaje '-m'
  > git commit -m "pimer commit"

- ver el estado del repositorio
  > git status
- Subir archivos al repositorio  
señalar por defecto '-u' la rama master
  > git push -u origin master
- ver los commits realizados
  > git log  
  ```
      commit c7076fd2dd579588b13a81460bedbec8d0fa20e1 (HEAD -> p-00-inici, origin/p-00-inici)
    Author: jordi Olmedillas <jordi.olmedillas@gmail.com>
    Date:   Thu Mar 26 11:18:42 2020 +0100

        modificat 3

    commit 881246b2f1cc73e28562c9f3d89c003daf48be90 (origin/master, master)
    Author: jordi Olmedillas <jordi.olmedillas@gmail.com>
    Date:   Thu Mar 26 10:00:39 2020 +0100

        modificat2

    commit bc5233a2dc3a7ad03dc0fb919cc449b247609000
    Author: jordi Olmedillas <jordi.olmedillas@gmail.com>
    Date:   Thu Mar 26 09:29:37 2020 +0100

        modificat

    commit 2e8e95836a827f6e93e2bbce5650a1ca372e5d98
    Author: jordi Olmedillas <jordi.olmedillas@gmail.com>
    Date:   Thu Mar 26 08:44:53 2020 +0100

        añadir instrucciones
  ```
# Sección 3: Estructuración de nuestro proyecto
## Seccion 3 - 18. Primeros componentes e inicio de la estructura del proyecto  
Crear partes de la app
### Crear paginas app
- Login  
$ ng g c login --skipTests=true -s
- Pagina no enconrada  
$ ng g c nopagefound --skipTests=true -s  
- Pag principal  
$ ng g c pages/dashboard --skipTests=true -s
- Prueba componentes personalizados  
$ ng g c pages/progress --skipTests=true -s
- Graficas  
$ ng g c pages/graficas1 --skipTests=true -s
### Crear partes comunes app
- header  
$ ng g c shared/header --skipTests=true -s
- sidebar  
$ ng g c shared/sidebar --skipTests=true -s
- breadcrumbs  
$ ng g c shared/breadcrumbs --skipTests=true -s
### Crear servicios app
- Para el manejo de partes comunes  
 ng g s services/shared --skipTests=true
- Para el manejo del sidebar  
 ng g s services/sidebar --skipTests=true 

### modificaciones app
Mover la carprta: nopagefound -> angular race las rutas de la importación en app.modules.ts
## Seccion 3 - 19. Agregar las librerías externas necesarias
### Copiar librerias necesarias para el propyecto
De la plantilla, copiar -> \Material-de-la-seccion-3\main\  
- js
- css
- sass  
a -> \adminpro-v9\src\assets\
De la plantilla, copiar ->  \Material-de-la-seccion-3\assets\plugins\bootstrap
a -> \adminpro-v9\src\assets\plugins\  
De la plantilla, copiar ->  \Material-de-la-seccion-3\assets\plugins\jquery
a -> \adminpro-v9\src\assets\plugins\
De la plantilla, copiar ->  \Material-de-la-seccion-3\assets\plugins\sparklinery
a -> \adminpro-v9\src\assets\plugins\
De la plantilla, copiar ->  \Material-de-la-seccion-3\assets\plugins\sticky-kit-master
a -> \adminpro-v9\src\assets\plugins\
De la plantilla, copiar ->  \Material-de-la-seccion-3\assets\images
a -> \adminpro-v9\src\assets\

### De esta pag vamos a sacar 
De la plantilla, copiar -> \Material-de-la-seccion-3\main\  
pages-blank.html
- Favicon icon
copiar a -> index.html  

De la plantilla, copiar -> \Material-de-la-seccion-3\main\  
pages-blank.html
- All Jquery hasta Custom JavaScript (incluido)
copiar a -> index.html

- Arreglar las rutas
- En algunos casos hay que reiniciar el servidor para que recompile las nuevas rutas
## Seccion 3 - 20. Header, SiderBar, Breadcrumbs y contenedor principal
- INDEX.html - Modificar las classes del body
<body class="fix-header card-no-border fix-sidebar">

- Añadir el preloader
<!-- Preloader - style you can find in spinners.css -->

- APP.component.html
<div id="main-wrapper">
incluir <app-header></app-header>

- header.component.html
<header class="topbar">

sacar -> <!-- Comment -->
sacar -> <!-- mega menu -->
