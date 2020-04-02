import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Declarar la funcion para poder utilarla
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
    // Llamar a la funcion creada en  -> /assets/js/custom.min.js, que inicializa los plugins del -> /assets/js/custom.min.js
    init_plugins();
  }

  ingresar() {
    // console.log('ingresar');
    this.router.navigate(['/dashboard']);
  }
}
