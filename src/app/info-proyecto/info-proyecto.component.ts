import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProyectoService } from '../proyecto.service';
import { Proyecto } from '../proyecto';

@Component({
  selector: 'app-info-proyecto',
  templateUrl: './info-proyecto.component.html',
  styleUrls: ['./info-proyecto.component.css']
})
export class InfoProyectoComponent implements OnInit {
  proyecto: Proyecto;
  private sub: any;
  crud_operation = { is_visible: false };
  crud_operation2 = { is_visible: false };

  constructor(private route: ActivatedRoute, private service: ProyectoService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.proyecto = this.service.findByName(params['nombre']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

newState(){
    if(this.crud_operation.is_visible==true){
     this.crud_operation.is_visible=false;
  }
      this.crud_operation2.is_visible = true;
}
newTask(){
  if(this.crud_operation2.is_visible==true){
     this.crud_operation2.is_visible=false;
  }
   this.crud_operation.is_visible = true; 
  }
}
}
