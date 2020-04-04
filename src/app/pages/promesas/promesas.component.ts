import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let promesa = new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve('Ok');
          // reject('Simplemente un error');
          clearInterval(intervalo);
        }
      }, 1000);
    });

    promesa.then((msg) => {
      console.log('Temino', msg);
      this.contarTres()
        .then(m => {
          console.log(m);
        })
        .catch((e) => {
          console.error(e);
        });
    })
    .catch((error) => {
      console.error('Error en la promesa: ', error);
    });
  }

  contarTres(): Promise<boolean> {
    return new Promise ((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
