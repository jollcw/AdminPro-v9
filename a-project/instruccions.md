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
```<!-- Preloader - style you can find in spinners.css -->```

- APP.component.html
<div id="main-wrapper">
incluir -> <app-header></app-header>

- header.component.html
<header class="topbar">

sacar -> "!-- Comment --"  
sacar -> "!-- mega menu --"  
De momento comentar -> "!-- Language --"

- sidebar.component.html  
añadir -> "!-- Sidebar navigation --"

- APP.component.html
incluir -> <app-sidebar></app-sidebar>

añadir el envoltorio -> 
  - "!-- Page wrapper --"
  -  i dentro el envoltorio ->
    - "!-- Container fluid --"  
    -  i dentro el ->
      - "!-- Bread crumb --"
      - Debajo el breadcrumbs
      incluir _> "!-- Page content --" que sera el content dummy, i el <router-outlet>, de momento comentado
## Seccion 3 - 21. Implementando las rutas principales
Aqui hay una diferencia con la explicación. Yo, al crear el proyecto elegí la opción de routing: yes. con lo cual ya incluyo el modulo de routing i lo utilizo.

## Seccion 3 - 22. Implementando las rutas principales
Crear un componente dentro de pages que cargara todas las paginas, excepto el login. Este tendrá otro layout diferente. Todas las paginas tendrán un layout común.  
El app.component.html caragará los diferentes layouts: pages.component.html y login.component.html.  
- Par ello todo el html de app.component.html se mueve a -> pages.component.html, y allí solo queda el <router-outlet>
 ng g c pages/pages  --skipTests=true -s --flat
- Modificar las rutas creando rutas hijas para el pages.component.html
- Modificar el -> login.component.html, copiar el -> pages-login-2.html
- Modificar el -> login.component.css, copiar el -> login-register-lock.css

## Seccion 3 - 23. 24. Resolución de la tarea práctica #2 - Register template
- Crear el -> register  
 ng g c login/register --skipTests=true --flat
- Modificar el -> register.component.html, copiar el -> pages-register2.html
- Modificar el -> register.component.html para que use el css de el -> login.component.css

## Seccion 3 - 25. Aceleración de las animaciones
Modificar el estilo de la libreria aimated en el Header.component.html  
-> animated fadeIn




## Seccion 4 - 30. Creando nuestro primer módulo
Crear el modulo pages.module.ts  
Este modulo se encarga de aglutinar todos los componentes de Pages y el pages-routing.module.ts, de esta manera descargamos el app.module.ts  
En pages.module.ts incluimos todos los componentes de pages  
En app.module.ts eliminamos todos los componentes de pages, pero importamos el pages.module.ts (hay que ponerlo en el apartado-> @NgModule({ ...
  imports: [])  
IMPORTANTE -> hay que ponerlo antes que AppRoutingModule, ya que el pages.module.ts incluye el pages-routing.module.ts, que tiene rutas hijas que utiliza pages-routing.module.ts
## Seccion 4 - 31 - 32. Creación de un módulo shared
Crear el modulo shared.module.ts  
Este modulo se encarga de aglutinar todos los componentes de Shared
## Seccion 4 - 33. Rutas hijas - ForChild( )
Crear el modulo -> pages-routing.module.ts  
Se encarga de controlar las rutas (hijas) del apartado Pages, de esta manera se descarga app.routing.module.ts  
Este modulo lo importa -> pages.module.ts
 ng g m pages/pages --routing=true --routingScope=Child --flat
## Seccion 4 - 34. Realizar una limpieza de los módulos y rutas
Limpiar los comentarios i las importaciones innecesarias ya que estan en otros modulos aglutinados  

---
Con todo esto ya esta la plantilla lista para crear la aplicación

---
## Sección 6 - 42. Explicar la necesidad de la comunicación entre componentes
Modificar progress.component.html, añadir -> <div class="input-group mb-3">
## Sección 6 - 43. Uso de atributos personalizados con Angular
<div
            class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="75"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 75%"
          ></div>
          


## Sección 6 - 44. Crear componente incrementador
$ ng g c components/incrementador  --skipTests=true -s
Copiar el htm del incrementador de progress.component.html a -> incrementador.component.html  
Copiar el js del incrementador de progress.component.ts a -> incrementador.component.ts  
Importar y poner en las declarations[] de pages.module.ts el incrementador.component
Sacar en import y las declarations[] de pages.module.ts el incrementador.component

## Sección 6 - 45. @Input - Componente incrementador

## Sección 6 - 46. @Output - Componente incrementador

## Sección 6 - 51. Resolución de la tarea práctica #4 - ng2-charts
$ ng g c components/graficoDona -s --skipTests=true --skipImport=true

## Sección 7: Servicios básicos, temas, rutas básicas y persistencia de los ajustes
## Sección 7: 57. Diseño inicial de la página account-settings
$ ng g c pages/accountSettings -m="pages/pages.module.ts" -s --skipTests=true
crear la ruta
modificar el account-settings.component.html
modificar styles.css

## Sección 7: 58. Cambiar el CSS principal de forma dinámica
archivos de temas -> \adminpro-v9\src\assets\css\colors
modificar -> src\index.html, añadir id=tema al link de temas <link id="tema" href="assets/css/colors/default-dark.css" id="theme" rel="stylesheet">
Utilizar constructor( @Inject(DOCUMENT) private _document ) { } , para poder hacer referencia al dom  

## Sección 7: 59. Agregando clases de CSS sin usar ngClass
La classe ->  working es la que marca el check en el tema elegido  
Añadir el atributo link -> '<a #link1 (click)="cambiarColor('default')" data-theme="default" class="selector default-theme">1</a>'

## Sección 7: 60. Servicio Settings - Hacer persistente los ajustes
$ ng g s services/settings -m="app.module.ts" --skipTests=true
$ ng g s services/settings --skipTests=true
## Sección 7: 62. Tip: Agrupar todos los servicios en un módulo y en un sólo archivo
$ ng g m services/service --flat
## Sección 7: 64. Uso de Scripts de archivos importados en el index.html en TypeScript
creada en  -> /assets/js/custom.min.js, una funcion que envuelve todo el código que inicializa los plugins  
Declarar la funcion para poder utilarla  
declare function init_plugins();  
// Llamar a la funcion creada en  -> /assets/js/custom.min.js, que inicializa los plugins del -> /assets/js/custom.min.js
ngOnInit(): void {
    init_plugins();
  }

## Seccion 8: Promesas
$ ng g c pages/promesas -s --skipTests=true  



$ ng g c pages/rxjs -s --skipTests=true
