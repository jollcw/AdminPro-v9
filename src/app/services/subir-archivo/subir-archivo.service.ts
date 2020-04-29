import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from './../../../../config/config';

@Injectable({
  providedIn: 'root'
})

// https://forobeta.com/temas/cargar-archivos-e-imagenes-con-angular-4-5-y-6-facil.658106/
export class SubirArchivoService {

  url: string = URL_SERVICIOS;

  constructor(private http: HttpClient) { }

  /**
   * Llama a la api de subir img
   * @param archivo : File, img a subir
   * @param tipo : string, colección -> (usuarios, medicos, hospitales)
   * @param id : string, id del usuario, medico, hospitale
   */
  subirArchivo(archivo: File, tipo: string, id: string) {
    const url = URL_SERVICIOS + '/upload/' + tipo + '/' + id;

    const formData = new FormData();
    // formData.append('imagen', archivo, archivo.name);
    formData.append('imagen', archivo);
    return this.http.post(url, formData);
  }

}
