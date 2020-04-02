import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Dashboard', url: '/dashboard'},
        {titulo: 'PreogresBar', url: '/progress'},
        {titulo: 'Gráficas', url: '/graficas1'}
      ]
    }
  ];

  constructor() { }
}
