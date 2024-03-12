import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CacheService } from './Cache.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;
  formulario: string = '';

  constructor(private router: Router, private datosLocales: CacheService) {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('/')[1];
        if (path === 'registro') {
          this.formulario = 'registro';
        } else if (path === 'login') {
          this.formulario = 'login';
        }
      }
    });
  }

  mostrarIniciarSesion(): void {
    this.formulario = 'login';
  }

  mostrarRegistro(): void {
    this.formulario = 'registro';
  }


  async ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const path = event.urlAfterRedirects.split('/')[1];
        if (path === 'registro') {
          this.formulario = 'registro';
        } else if (path === 'login') {
          this.formulario = 'login';
        }
      }
    });

    const cachedLoggedIn = await this.datosLocales.obtener_DatoLocal('login');
    if (cachedLoggedIn) {
      this.loggedIn = cachedLoggedIn;
    }

    const cachedFormulario = await this.datosLocales.obtener_DatoLocal('formulario');
    if (cachedFormulario) {
      this.formulario = cachedFormulario;
    }

    this.datosLocales.loggedIn$.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.datosLocales.formulario$.subscribe(formulario => {
      this.formulario = formulario;
    });
}
}
