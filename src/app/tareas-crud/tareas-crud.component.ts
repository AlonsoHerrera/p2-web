import { Component, OnInit } from '@angular/core';
import { Tareas } from '../tareas';
 
@Component({
  selector: 'app-tareas-crud',
  templateUrl: './tareas-crud.component.html',
  styleUrls: ['./tareas-crud.component.css']
})
export class TareasCrudComponent implements OnInit {
 data: Tareas[];
  current_task:Tareas;
  crud_operation={is_new:false,is_visible:false};
 
  constructor() { }

  ngOnInit() {
  	this.data= JSON.parse(localStorage.getItem('tareas')||'[]');
  	this.current_task=new Tareas();
  }

  new() {
    this.current_task = new Tareas();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }

  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_task = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save();
  }

  save() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_task);
    }
    localStorage.setItem('phones', JSON.stringify(this.data));
    this.current_task = new Tareas();
    this.crud_operation.is_visible = false;
  }

}
