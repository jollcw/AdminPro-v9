import { Component, OnInit } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progreso: number = 25;

  constructor() { }

  ngOnInit(): void {
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
  }
}
