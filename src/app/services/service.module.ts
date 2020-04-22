import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import {
  SharedService,
  SidebarService,
  SettingsService,
  UsuarioService,
  LoginGuardGuard
} from './service.index';

@NgModule({
  declarations: [],
  providers: [
    SharedService,
    SidebarService,
    SettingsService,
    UsuarioService,
    LoginGuardGuard
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServiceModule { }
