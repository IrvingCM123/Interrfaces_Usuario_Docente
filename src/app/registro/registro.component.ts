import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {


  file: File | any = null;
  url_imagen: string | any;

  constructor() { }

  ngOnInit(): void {
  }

  GuardarImagen(event: any) {
    this.file = event.target.files[0];
    this.MostrarImagen(this.file);
  }

  MostrarImagen(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.url_imagen = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
