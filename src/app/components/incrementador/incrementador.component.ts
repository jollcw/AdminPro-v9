import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  /**
   * Para hacer referencia al input del incrementador.component.html, que está actuando en este momento
   */
  @ViewChild('txtProgress') txtProgress: ElementRef;


  /**
   * Para recibir valores del padre: progress.component.html
   */
  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 25;

  /**
   * Para enviar valores al padre: progress.component.html
   */
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    // console.log('Leyenda', this.leyenda);
    // console.log('Progreso', this.progreso);
  }

  /**
   * Evento del ngModelChange
   * @param newValue:event
   */
  onChanges(newValue: number) {
    // console.log(newValue);
    // console.log(event);
    // const elemHTML: any = document.getElementsByName('progreso')[0];
    // console.log(elemHTML);
    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;
    this.cambioValor.emit(this.progreso);
  }

  /**
   * Funcion onClick de los botones del incrementador
   * @param valor: number
   */
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso < 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = Number(this.progreso) + valor;
    // Envia el valor al componente padre: progress.compoonent.html
    this.cambioValor.emit(this.progreso);
    // Establece el foco en el imput: txtProgress
    this.txtProgress.nativeElement.focus();
  }

}
