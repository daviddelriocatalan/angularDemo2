import { Component, OnInit } from '@angular/core';

import {Output, EventEmitter} from '@angular/core';

import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-capa-hijo-anyadir',
  templateUrl: './capa-hijo-anyadir.component.html',
  styleUrls: ['./capa-hijo-anyadir.component.css']
})
export class CapaHijoAnyadirComponent implements OnInit {

  @Output() newAlumnoEvent = new EventEmitter<Alumno>();

  nombre : string = "Kevin";
  apellido : string = "Spacey";
  ciudad : string = "Arkansas";
  curso : string = "PUTA";
  
  crearAlumno(value : Alumno){
    value = {
      id: 0,
      nombre: this.nombre, 
      apellidos: this.apellido, 
      ciudad: this.ciudad, 
      curso: this.curso, 
      imagen: ''
    };

    console.log("Nombre -> " + this.nombre);
    console.log("Apellido -> " + this.apellido);
    console.log("Ciudad -> " + this.ciudad);
    console.log("Curso -> " + this.curso);    

    this.newAlumnoEvent.emit(value);
    
  }


  constructor() { }

  ngOnInit() {
  }

}
