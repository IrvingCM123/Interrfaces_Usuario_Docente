import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  constructor() {
  }

  materias: any = [ ];

  ngOnInit(): void {
    this.materias = [
      {
        materia:
          'Lectura y redacción',
        nrc: '12345',
        grupo: 502,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Matemáticas I',
        nrc: '12346',
        grupo: 503,
        estudiantes: 30,
        tipo: 'AFEL',
        color: '',
      },
      {
        materia: 'Biología',
        nrc: '12347',
        grupo: 504,
        estudiantes: 30,
        tipo: 'AFD',
        color: '',
      },
      {
        materia: 'Química',
        nrc: '12348',
        grupo: 505,
        estudiantes: 30,
        tipo: 'AFT',
        color: '',
      },
      {
        materia: 'Física',
        nrc: '12349',
        grupo: 506,
        estudiantes: 30,
        tipo: 'AFD',
        color: '',
      },
      {
        materia: 'Historia de México',
        nrc: '12350',
        grupo: 507,
        estudiantes: 30,
        tipo: 'AFT',
        color: '',
      },
      {
        materia: 'Formación Cívica y Ética',
        nrc: '12351',
        grupo: 508,
        estudiantes: 30,
        tipo: 'AFT',
        color: '',
      },
      {
        materia: 'Educación Física',
        nrc: '12352',
        grupo: 509,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Artes',
        nrc: '12353',
        grupo: 510,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Tecnología',
        nrc: '12354',
        grupo: 511,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Inglés',
        nrc: '12355',
        grupo: 512,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Geografía',
        nrc: '12356',
        grupo: 513,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Matemáticas II',
        nrc: '12357',
        grupo: 514,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Geometría',
        nrc: '12358',
        grupo: 515,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Biología',
        nrc: '12359',
        grupo: 516,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Química',
        nrc: '12360',
        grupo: 517,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Física',
        nrc: '12361',
        grupo: 518,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
      {
        materia: 'Historia Universal',
        nrc: ' 12362',
        grupo: 519,
        estudiantes: 30,
        tipo: 'AFBG',
        color: '',
      },
    ];

    this.materias = this.materias.map((materia: any) => {
      const tipoDescompuesto = materia.tipo.split('');

      switch (materia.tipo) {
        case 'AFBG':
          materia.color = '#EBBD3D'; // amarillo
          break;
        case 'AFEL':
          materia.color = '#D3651B'; // naranja
          break;
        case 'AFD':
          materia.color = '#1C9050'; // verde
          break;
        case 'AFT':
          materia.color = '#4173C3'; // azul
          break;
        default:
          materia.color = '#D3651B';
      }

      console.log(materia.tipo);


      return { ...materia, tipo1: tipoDescompuesto };
    });
  }

  hola() {
    console.log('hola');
  }

  adios() {
    console.log('adios');
  }

}
