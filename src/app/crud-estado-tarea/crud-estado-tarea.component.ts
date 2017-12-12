import { Component, OnInit } from '@angular/core';
import { EstadoTarea } from '../estado-tarea';
import { EstadoTareaService } from '../estado-tarea.service';
import { Proyecto } from '../proyecto';
import { ProyectoService } from '../proyecto.service';

@Component({
  selector: 'app-crud-estado-tarea',
  templateUrl: './crud-estado-tarea.component.html',
  styleUrls: ['./crud-estado-tarea.component.css']
})
export class CrudEstadoTareaComponent implements OnInit {
  data: EstadoTarea[];
  current_task: EstadoTarea;
  crud_operation = { is_new: false, is_visible: false };

   data2: Proyecto[];
  current_project: Proyecto;
  crud_operation2 = { is_new: false, is_visible: false };
  constructor(private service: EstadoTareaService,private service2:ProyectoService) { }

  ngOnInit() {
  	this.data = this.service.read();
    this.data2 = this.service2.read();    
    this.current_task = new EstadoTarea();
    this.current_project = new Proyecto();
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
    saveProject(){
      this.current_project.estadosTareas.push(this.current_task);
      this.data2.push(this.current_project);
      this.service2.save(this.data2);
    }
  
} 