import { Component, OnInit } from '@angular/core';
import { SettingsService } from './../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema: string, link: any) {
    // console.log(tema);
    this.aplicarCheck(link);
    this._ajustes.aplicarTema(tema);
  }

  /**
   * Aplicar el check en el tema seleccinado
   * Recorre todos los enlaces hasta encontrar el link seleccionado
   * @param link selector del angular -> #link
   */
  aplicarCheck(link: any) {
    // obtener todos los enlaces de la clase: selector
    let selectores: any = document.getElementsByClassName('selector');
    // remover la clase: working
    for (const ref of selectores) {
      ref.classList.remove('working');
    }
    // añadir la classe: working al enlace con el link seleccionado
    link.classList.add('working');
  }

  colocarCheck() {
    // obtener todos los enlaces de la clase: selector
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this._ajustes.ajustes.tema;
    // remover la clase: working
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
      ref.classList.remove('working');
    }

  }
}
