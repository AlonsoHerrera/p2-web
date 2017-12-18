import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';
import { Proyecto } from '../proyecto';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	tareas: Tarea[];
    
  ngOnInit() {

  }


}
