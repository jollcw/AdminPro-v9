import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from './../usuario/usuario.service';
// Por alguna razón -> '../service.index' NO funciona => WARNING in Circular dependency detected
// import { UsuarioService } from '../service.index';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {

  constructor(
    public usuarioServ: UsuarioService,
    public router: Router
  ) {

  }

  canActivate() {
    if (this.usuarioServ.estaLogueado()) {
      // console.log('Pasó por el LoginGuardGuard');
      return true;
    } else {
      console.log('Bloqueado por el guard');
      this.router.navigate(['/login']);
      return true;
    }
  }

}
