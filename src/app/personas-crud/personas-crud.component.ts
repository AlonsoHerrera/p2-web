import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'personas-crud',
  templateUrl: './personas-crud.component.html',
  styleUrls: ['./personas-crud.component.css']
})
export class PersonasCrudComponent implements OnInit {
  data: Persona[];
  persona_actual:Persona;
  operacion_crud={es_nueva:false,es_visible:false};
 
  constructor() { }

  ngOnInit() {
  	this.data= JSON.parse(localStorage.getItem('personas')||'[]');
  	this.persona_actual=new Persona();
  }
  nueva(){
  	this.persona_actual= new Persona();
  	this.operacion_crud.es_visible=true;
  	this.operacion_crud.es_nueva= true;
  }
  editar(row){
  	this.operacion_crud.es_visible=true;
  	this.operacion_crud.es_nueva=false;
  	this.persona_actual=row;
  }
  delete(row){
 	this.operacion_crud.es_nueva= false;
 	const index = this.data.indexOf(row,0);
 	if(index > -1){
 		this.data.splice(index,1);
 	}
 	this.guardar();
  }
  guardar(){
  	if(this.operacion_crud.es_nueva){
      	this.data.push(this.persona_actual);
  	}
  	localStorage.setItem('personas',JSON.stringify(this.data));
 	this.persona_actual=new Persona();
 	this.operacion_crud.es_visible= false;
  }
}
