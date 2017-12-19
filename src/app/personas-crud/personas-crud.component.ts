import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { Tarea } from '../tarea';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'personas-crud',
  templateUrl: './personas-crud.component.html',
  styleUrls: ['./personas-crud.component.css']
})
export class PersonasCrudComponent implements OnInit {
  data: Persona[];
  current_person:Persona;
  crud_operation={is_new:false,is_visible:false};
 
  constructor(private service: PersonaService) { }

  ngOnInit() {
  	this.data= JSON.parse(localStorage.getItem('personas')||'[]');
  	this.current_person=new Persona();
  }

new() {
    this.current_person = new Persona();
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = true;
  }
 
  edit(row) {
    this.crud_operation.is_visible = true;
    this.crud_operation.is_new = false;
    this.current_person = row;
  }

  delete(row) {
    this.crud_operation.is_new = false;
    const index = this.data.indexOf(row, 0);
    if (index > -1) {
      this.data.splice(index, 1);
    }
    this.save2();
  }

  save2() {
    if (this.crud_operation.is_new) {
      this.data.push(this.current_person);
    }
    this.service.save(this.data);
    this.current_person = new Persona();
    this.crud_operation.is_visible = false;
  }
   save() {
     if ((this.current_person.id==null)||(this.current_person.nombre==null)||
        (this.current_person.avatar==null)) {
        alert('Todos los datos son requeridos!');
        return;
    }
    if (this.crud_operation.is_new) {
      this.data.push(this.current_person);
    }
    this.service.save(this.data);
    this.current_person = new Persona();
    this.crud_operation.is_visible = false;
  }
}

