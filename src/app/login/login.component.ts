import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from './../models/usuario.model';
import { UsuarioService } from './../services/service.index';

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

  email: string;
  recuerdame: boolean = false;

  constructor(
    public usuarioServ: UsuarioService,
    public router: Router
  ) { }

  ngOnInit(): void {
    // Llamar a la funcion creada en  -> /assets/js/custom.min.js, que inicializa los plugins del -> /assets/js/custom.min.js
    init_plugins();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  ingresar(forma: NgForm) {
    // console.log('ingresar');
    // console.log(forma.valid);
    // console.log(forma.value);
    if (forma.invalid) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password);
    this.usuarioServ.login(usuario, forma.value.recuerdame)
      .subscribe(resp => {
        // console.log(resp);
        this.router.navigate(['/dashboard']);
      });

  }
}
