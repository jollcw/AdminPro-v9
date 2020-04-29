import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';
import { SubirArchivoService } from './../../services/subir-archivo/subir-archivo.service';
import { ModalUploadService } from './modal-upload.service';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styles: []
})
export class ModalUploadComponent implements OnInit {

  // oculto: string = '';
  // usuario: Usuario;
  imagenSubir: File;
  // imagenTemp: string;
  imagenTemp: string | ArrayBuffer;

  constructor(
    public subirArchivoServ: SubirArchivoService,
    public modalUploadServ: ModalUploadService
  ) { }

  ngOnInit(): void {

  }


  cerrarModal() {
    this.imagenSubir = null;
    this.imagenTemp = null;

    this.modalUploadServ.ocultarModal();
  }

  subirImagen() {
    console.log('subirImagen');
    this.subirArchivoServ.subirArchivo(this.imagenSubir, this.modalUploadServ.tipo, this.modalUploadServ.id)
      .subscribe((resp) => {
        // console.log('ModalUploadComponent', resp);
        this.modalUploadServ.notificacion.emit(resp);
        this.cerrarModal();
      });
  }

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

}
