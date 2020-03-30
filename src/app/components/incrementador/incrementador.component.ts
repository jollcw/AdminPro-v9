import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
   }

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 25;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    console.log('Leyenda', this.leyenda);
    console.log('Progreso', this.progreso);
  }
  cambiarValor(valor: number) {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso < 0 && valor < 0) {
    // if (this.progreso <= 0 ) {
      this.progreso = 0;
      return;
    }
    this.progreso = Number(this.progreso) + valor;
    this.cambioValor.emit(this.progreso);
  }

}
