import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SharedService,
  SidebarService,
  SettingsService
} from './service.index';


@NgModule({
  declarations: [],
  providers: [
    SharedService,
    SidebarService,
    SettingsService
  ],
  imports: [
  CommonModule
  ]
})
export class ServiceModule { }
