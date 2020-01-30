import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Output, EventEmitter} from '@angular/core';

import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-capa-hijo',
  templateUrl: './capa-hijo.component.html',
  styleUrls: ['./capa-hijo.component.css']
})
export class CapaHijoComponent implements OnInit {

  @Input() alumno: Array<Alumno>;

  @Output() newItemEvent = new EventEmitter<string>();

  alumnoElegido(value: string){
    this.newItemEvent.emit(value);
    //console.log("Capa Hijo -> " + value);
  } 

  constructor() { }

  ngOnInit() {
  }

}
