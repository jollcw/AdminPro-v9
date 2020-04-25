import { Component, OnInit } from '@angular/core';
import { Usuario } from './../../models/usuario.model';
import { UsuarioService } from './../../services/service.index';
import { SubirArchivoService } from './../../services/service.index';
import swal from 'sweetalert';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  // imagenTemp: string;
  imagenTemp: string | ArrayBuffer;

  public respuestaImagenEnviada;
  public resultadoCarga;

  constructor(
    public usuarioServ: UsuarioService,
    public subirArchivoServ: SubirArchivoService
  ) {
    this.usuario = this.usuarioServ.usuario;
  }

  ngOnInit(): void {
  }

  guardar(values) {
    // console.log(values);
    this.usuario.nombre = values.nombre;
    if (!this.usuario.google) {
      this.usuario.email = values.email;
    }

    this.usuarioServ.actualizarUsuario(this.usuario)
      .subscribe();
  }

  public cargandoImagen(files: FileList) {

    this.subirArchivoServ.postFileImagen(files[0]).subscribe(

      response => {
        this.respuestaImagenEnviada = response;
        if (this.respuestaImagenEnviada <= 1) {
          console.log('Error en el servidor');
        } else {

          if (this.respuestaImagenEnviada.code === 200 && this.respuestaImagenEnviada.status === 'success') {

            this.resultadoCarga = 1;

          } else {
            this.resultadoCarga = 2;
          }

        }
      },
      error => {
        console.log(error);
      }

    ); // FIN DE METODO SUBSCRIBE

  }

  /**
   * Al seleccionar una img se envia el evento, la parte del $event.target.files
   * Podriamos utilizar esto para subir multiples imgs
   * @param files : FileList un array de archivos
   */
  seleccionImagen(files: FileList) {

    if (!files) {
      this.imagenSubir = null;
      return;
    }

    if (files[0].type.indexOf('image') < 0) {
      swal('Solo imágenes', 'El tipo de archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }
    // Seleccionamos la 1ª img, que es la que queremos subir
    this.imagenSubir = files[0];

    const reader = new FileReader();
    // const urlImagenTemp = reader.readAsDataURL(files[0]);
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      // data:image/png;base64
      // console.log(reader.result);
      this.imagenTemp = reader.result;
    };
  }

  cambiarImagen() {
    this.usuarioServ.cambiarImagen(this.imagenSubir, this.usuario._id);
  }

}
