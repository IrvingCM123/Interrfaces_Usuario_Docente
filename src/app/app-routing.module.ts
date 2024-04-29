import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { ListaAsistenciaComponent } from './lista-asistencia/lista-asistencia.component';
import { ListaActualComponent } from './lista-actual/lista-actual.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent},
  { path: 'lista-asistencia', component: ListaAsistenciaComponent},
  { path: 'lista-actual', component: ListaActualComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
