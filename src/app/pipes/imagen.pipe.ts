import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from './../../../config/config';
import { Usuario } from './../models/usuario.model';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return 'Funciona pipe';
  //   return null;
  // }
  transform(img: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/imagen';

    if (!img) {
      return url += 'usuarios/xxx';
    }
    // Si es una img de google
    if (img.indexOf('https') >= 0) {
      return img;
    }

    switch (tipo) {
      case 'usuario':
        url += '/usuarios/' + img;
        break;
      case 'medico':
        url += '/medicos/' + img;
        break;
      case 'hospital':
        url += '/hospitales/' + img;
        break;

      default:
        url += 'usuarios/xxx';
        break;
    }

    return url;
  }

}
