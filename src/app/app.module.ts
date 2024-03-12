import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { InformacionMaestroComponent } from './informacion-maestro/informacion-maestro.component';
import { NgPipesModule } from 'ngx-pipes';
import { CorreoComponent } from './correo/correo.component';
import { CorreoBajaComponent } from './correo-baja/correo-baja.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    InformacionMaestroComponent,
    CorreoComponent,
    CorreoBajaComponent,
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    NgPipesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
