import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CacheService } from '../Cache.component.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
    private datos_Locales: CacheService,
      private location: Location,
  ) { }

  ngOnInit(): void {
  }

  isInicioRouteActive() {
    return this.router.url === '/inicio';
  }

  CerrarSesion() {
    this.datos_Locales.Actualizar_Login(false);
    this.datos_Locales.eliminarCacheNavegador();
    this.location.go('/Sistema/Registro');
  }

}
