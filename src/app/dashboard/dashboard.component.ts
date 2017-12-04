import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { Proyecto } from '../proyecto';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	tareas: Tarea[];
    
	
  constructor() {

   }

  ngOnInit() {

  }

}
