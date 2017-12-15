import { Component, OnInit } from '@angular/core';
import { EstadoTarea } from '../estado-tarea';
import { EstadoTareaService } from '../estado-tarea.service';

@Component({
  selector: 'app-crud-estado-tarea',
  templateUrl: './crud-estado-tarea.component.html',
  styleUrls: ['./crud-estado-tarea.component.css']
})
export class CrudEstadoTareaComponent implements OnInit {
  data: EstadoTarea[];
  current_task: EstadoTarea;
  crud_operation = { is_new: false, is_visible: false };
  constructor(private service: EstadoTareaService) { }

  ngOnInit() {
  	this.data = this.service.read();
    this.current_task = new EstadoTarea();
  }
 new() {
    this.current_task = new EstadoTarea();
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
    this.service.save(this.data);
    this.current_task = new EstadoTarea();
    this.crud_operation.is_visible = false;
  }

  
} 