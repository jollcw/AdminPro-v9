import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario.model';
import { UsuarioService } from './../../services/usuario/usuario.service';
import { ModalUploadService } from './../../components/modal-upload/modal-upload.service';

declare var swal: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;

  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(
    public usuariosServ: UsuarioService,
    public modalUploadServ: ModalUploadService
  ) { }

  ngOnInit(): void {
    this.cargarUsuarios();

    this.modalUploadServ.notificacion.subscribe(resp => {
      this.cargarUsuarios();
    });
  }

  cargarUsuarios() {
    this.cargando = true;
    this.usuariosServ.cargarUsuarios(this.desde)
    .subscribe((resp: any) => {
      console.log(resp);
      this.totalRegistros = resp.total;
      this.usuarios = resp.usuarios;
      this.cargando = false;
      });
  }

  cambiarDesde(valor: number) {
    let desde = this.desde + valor;

    if (desde >= this.totalRegistros) {
      return;
    }

    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuarios(termino: string) {
    // console.log(termino);
    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }

    this.cargando = true;

    this.usuariosServ.buscarUsuarios(termino)
      .subscribe((usuarios: Usuario[]) => {
        // console.log('usuarios comp resp', usuarios);
        this.usuarios = usuarios;
        this.cargando = false;
      });
  }

  borrarUsuario(usuario: Usuario) {
    // si id usuario a borrar = id usuario logeado
    if (usuario._id === this.usuariosServ.usuario._id) {
      swal('No puede borrar usuario', 'No se puede borrar a si mismo', 'error');
      return;
    }

    swal({
      title: 'Esta seguro ?',
      text: 'Esta a punto de borrar a ' + usuario.nombre,
      icon: 'warning',
      buttons: true,
      dangerMode: true
    })
    .then(borrar => {
      console.log(borrar);
      if (borrar) {
        this.usuariosServ.borrarUsuario(usuario._id)
          .subscribe((borrado: boolean) => {
            console.log(borrado);
            this.cargarUsuarios();
          });
      }
    });
  }

  guardarUsuario(usuario: Usuario) {
    this.usuariosServ.actualizarUsuario(usuario)
      .subscribe();
  }

  cambiarImagen(id: string) {
    console.log('usuarios comp cambiar img');
    this.modalUploadServ.mostrarModal('usuarios', id);

  }

}
