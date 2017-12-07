import { Injectable } from '@angular/core';
import { EstadoTarea } from './estado-tarea';

@Injectable()
export class EstadoTareaService {
data: EstadoTarea[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('estadoTareas') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('estadoTareas') || '[]');
    return this.data;
  }

  save(data: EstadoTarea[]){
    this.data = data;
    localStorage.setItem('estadoTareas', JSON.stringify(this.data));
  }

  findByName(id: string) {
    return this.data.find(x => x.id === id)
  }
}