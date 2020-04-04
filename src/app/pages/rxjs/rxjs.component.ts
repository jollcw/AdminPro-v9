import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcription: Subscription;
  constructor() {

    this.regresaObservable1().pipe(
      retry(2)
    )
    .subscribe(
      (numero) => {console.log('regresaOgservable1: ', numero); },
      (err) => {console.error(err); },
      () => {console.log('Termino regresaOgservable1'); }
    );

    this.regresaOgservable2().pipe(
      retry(2)
    )
    .subscribe(
      result => console.log('regresaOgservable2: ', result),
      err => console.error(err),
      () => console.log('Termino regresaOgservable2')
    );

    this.subcription = this.regresaOgservable3()
    .subscribe(
      result => console.log('regresaOgservable3: ', result),
      err => console.error(err),
      () => console.log('Termino regresaOgservable3')
    );
  }

  ngOnInit(): void {
    // const obs = new Observable(observer => {
    //   let contador = 0;
    //   const intervalo = setInterval(() => {
    //     contador += 1;
    //     observer.next(contador);
    //     if (contador === 3) {
    //       clearInterval(intervalo);
    //       observer.complete();
    //     }
    //     if (contador === 2) {
    //       clearInterval(intervalo);
    //       observer.error('Error en el observer');
    //     }
    //   }, 1000);
    // });

    // obs.pipe(
    //   retry(2)
    // )
    // .subscribe(
    //   n => console.log('Subcribe :', n),
    //   e => console.error('error', e),
    //   () => console.log('termino')
    // );

  }

  ngOnDestroy() {
    console.log('Abandonar pagina y cancelar subscripción');
    this.subcription.unsubscribe();
  }

  regresaObservable1() {
    console.log('regresaObservable1');
    return new Observable((observer: Subscriber<number>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador += 1;
        observer.next(contador);
        if (contador === 3) {
          observer.complete();
          clearInterval(intervalo);
        }
        if (contador === 2) {
          observer.error('Error en regresaOgservable1');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

  regresaOgservable2() {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        if (contador === 4) {
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000);
    })
    .pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('filter', valor, index);
        if (valor % 2 === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }


  regresaOgservable3() {
    return new Observable((observer: Subscriber<any>) => {
      let contador = 0;
      const intervalo = setInterval(() => {
        contador++;
        const salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 4) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
      }, 1000);
    })
    .pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        // console.log('filter', valor, index);
        if (valor % 2 === 1) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
