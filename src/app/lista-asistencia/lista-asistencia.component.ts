import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-asistencia',
  templateUrl: './lista-asistencia.component.html',
  styleUrls: ['./lista-asistencia.component.css']
})
export class ListaAsistenciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lista_asistencia = [
    { nombre: "Irving", asistencias: "10", inasistencias : "10", matricula: "zS20006735", carrera: "Ingeniera de software", status: "Presente"},
    { nombre: "John", asistencias: "20", inasistencias : "10", matricula: "zS20001234", carrera: "Computer Science", status: "Presente" },
    { nombre: "Jane", asistencias: "30", inasistencias : "10", matricula: "zS20005678", carrera: "Electrical Engineering", status: "Presente" },
    { nombre: "Mike", asistencias: "40", inasistencias : "10", matricula: "zS20009876", carrera: "Mechanical Engineering", status: "Presente" },
    { nombre: "Samantha", asistencias: "50", inasistencias : "10", matricula: "zS20004567", carrera: "Industrial Engineering", status: "Presente"},

  ]

}
