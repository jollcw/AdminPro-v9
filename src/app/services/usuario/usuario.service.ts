import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Usuario } from './../../models/usuario.model';
import { URL_SERVICIOS } from './../../../../config/config';

// import 'rxjs/operators/map';
import { map } from 'rxjs/operators';

// import { retry, map, filter } from 'rxjs/operators';

import swal from 'sweetalert';
import { Router } from '@angular/router';
// import * as swal from 'sweetalert';
import { SubirArchivoService } from './../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public subirArchivoServ: SubirArchivoService
  ) {
    // console.log('Usuarioservice working');
    this.cargarStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario'));
    } else {
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    // Guardar usuario en formato texto
    localStorage.setItem('usuario', JSON.stringify(usuario) );
    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
      .pipe(
        map((resp: any) => {
          // Guardar en Local Storage
          // localStorage.setItem('id', resp.id);
          // localStorage.setItem('token', resp.token);
          // // Guardar usuario en formato texto
          // localStorage.setItem('usuario', JSON.stringify(resp.usuario) );
          this.guardarStorage(resp.id, resp.token, resp.usuario);
          return true;
        })
      );
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + '/usuario';

    return this.http.post(url, usuario)
      .pipe(
        map((resp: any) => {
          swal('Usuario creado', usuario.email, 'success');
          return resp.usuario;
        }));
    // return this.http.get("http://localhost:7777/webapp/user")
    //     .pipe(
    //       map((response: Response) => response.json())
    //     );

  }

  actualizarUsuario(usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put(url, usuario)
      .pipe(
        map((resp: any) => {
          // Si id usuario = id usuario logueado;
          if (usuario._id === this.usuario._id) {
            this.guardarStorage(resp.usuario._id, this.token, resp.usuario);
          }
          swal('Usuario actualizado', usuario.nombre, 'success');

          return true;
        })
      );
  }
  /**
   * Cambia la img del usuario
   * Utiliza el servicio SubirArchivoService
   * @param archivo : File, imagen a cambiar
   * @param id : string, id del usuario
   */
  cambiarImagen(archivo: File, id: string) {
    this.subirArchivoServ.subirArchivo(archivo, 'usuarios', id)
      .subscribe( (resp: any) => {
        // console.log(resp);
        this.usuario.img = resp.usuario.img;
        swal('Imagen actualizada', this.usuario.nombre, 'success');
        this.guardarStorage(id, this.token, this.usuario);
      });
  }

  cargarUsuarios(desde: number = 0) {
    const url = URL_SERVICIOS + '/usuario/paged?desde=' + desde;
    return this.http.get(url);
  }

  buscarUsuarios(termino: string) {
    // let url = URL_SERVICIOS + '/busqueda/usuarios/:tabla/:busqueda';
    const url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get(url)
      .pipe(
        map((resp: any) => {
          // console.log('usuario serv resp', resp);
          return resp.usuarios;
        }
      ));
  }

  borrarUsuario(id: string) {
    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;
    return this.http.delete(url)
      .pipe(
        map( resp => {
          swal('Usuario borrado', 'El usuario ha sido borrado correctamente', 'success');
          return true;
        })
      )
  }
}
