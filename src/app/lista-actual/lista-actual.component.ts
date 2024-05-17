import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-actual',
  templateUrl: './lista-actual.component.html',
  styleUrls: ['./lista-actual.component.css']
})
export class ListaActualComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  materia = {
    nombre: "Desarrollo de aplicaciones web",
    clave: "827194",
    horario: "Lunes-Miercoles.Viernes 10:00 - 12:00",
  }

  lista_asistencia = [
    { nombre: "Irving", matricula: "zS20006735", carrera: "Ingeniera de software", status: "Presente"},
    { nombre: "John", matricula: "zS20001234", carrera: "Computer Science", status: "Presente" },
    { nombre: "Jane", matricula: "zS20005678", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Mike", matricula: "zS20009876", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Samantha", matricula: "zS20004567", carrera: "Industrial Engineering", status: "Presente"},

  ]
}
