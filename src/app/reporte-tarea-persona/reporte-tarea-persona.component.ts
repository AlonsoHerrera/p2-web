import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-reporte-tarea-persona',
  templateUrl: './reporte-tarea-persona.component.html',
  styleUrls: ['./reporte-tarea-persona.component.css']
})
export class ReporteTareaPersonaComponent implements OnInit {
  data: Persona[];
  current_person:Persona;

  constructor() { }

  ngOnInit() {
  	this.data= JSON.parse(localStorage.getItem('personas')||'[]');
  	this.current_person=new Persona();
  }
 
}
 