import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-reporte-tarea-proyecto',
  templateUrl: './reporte-tarea-proyecto.component.html',
  styleUrls: ['./reporte-tarea-proyecto.component.css']
})
export class ReporteTareaProyectoComponent implements OnInit {
 data: Proyecto[];
  current_project:Proyecto;

  constructor() { }

  ngOnInit() {
  	this.data= JSON.parse(localStorage.getItem('proyectos')||'[]');
  	this.current_project=new Proyecto();
  }
 
}
