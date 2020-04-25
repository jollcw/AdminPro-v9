import { Component, OnInit } from '@angular/core';
import { SidebarService } from './../../services/service.index';
import { UsuarioService } from './../../services/service.index';
import { Usuario } from './../../models/usuario.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public sidebarSer: SidebarService,
    public usuarioServ: UsuarioService
  ) { }

  ngOnInit(): void {
    this.usuario = this.usuarioServ.usuario;
  }

}
