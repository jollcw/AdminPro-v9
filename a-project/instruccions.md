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
