import { Component, OnInit } from '@angular/core';
import { CacheService } from '../Cache.component.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private datosLocales: CacheService,
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  IniciarSesion(): void {
    this.datosLocales.Actualizar_Login(true);
    this.datosLocales.guardar_DatoLocal('login', true);
    this.router.navigate(['/inicio/']);
  }

}
