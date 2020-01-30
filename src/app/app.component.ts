import { Component } from '@angular/core';

import { Alumno } from './modelos/alumno.modelo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alumnos: Array<Alumno> = [
    { id: 0, nombre: 'Kevin', apellidos: 'Spacey', ciudad: 'Londres', curso: 'DAW', imagen: '../assets/imagenes/foto1.jpg'},
    { id: 1, nombre: 'Kevin', apellidos: 'Spacey', ciudad: 'Londres', curso: 'DAM', imagen: '../assets/imagenes/foto2.jpg'},
    { id: 2, nombre: 'Kevin', apellidos: 'Spacey', ciudad: 'Londres', curso: 'ASIR', imagen: '../assets/imagenes/foto3.jpg'},
    { id: 3, nombre: 'Kevin', apellidos: 'Spacey', ciudad: 'Londres', curso: 'GIAT', imagen: '../assets/imagenes/foto4.jpg'},
    { id: 4, nombre: 'Kevin', apellidos: 'Spacey', ciudad: 'Londres', curso: 'TAFAD', imagen: '../assets/imagenes/foto5.jpg'}
  ];
  
  exampleParent: string;

  deleteKevin($event){
    this.exampleParent = $event;
    console.log("Capa Padre -> " + $event);

    this.alumnos.forEach(element => {
      if (element.id == $event) {

        let indice = this.alumnos.findIndex( alumno => alumno.id === $event);

        this.alumnos.splice(indice, 1);
      }
    });

  }

  crearKevin($event){
    console.log("CAPA PADRE PARA CREAR A KEVIN");
    console.log($event);
    $event.id = (this.alumnos.length);
    $event.imagen = '../assets/imagenes/foto1.jpg';
    this.alumnos.push($event);
  }
  
}
