import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso1: number = 20;
  progreso2: number = 30;

  constructor() { }

  ngOnInit(): void {
  }

  actualizar(event: number) {
    console.log('envent ', event);
    this.progreso1 = event;
  }

  // cambiarValor(valor: number) {
  //   if (this.progreso >= 100 && valor > 0) {
  //     this.progreso = 100;
  //     return;
  //   }
  //   if (this.progreso < 0 && valor < 0) {
  //   // if (this.progreso <= 0 ) {
  //     this.progreso = 0;
  //     return;
  //   }
  //   this.progreso = Number(this.progreso) + valor;
  // }
}
