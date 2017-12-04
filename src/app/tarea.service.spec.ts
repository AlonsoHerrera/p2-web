import { Injectable } from '@angular/core';
import { Tarea } from './tarea';

@Injectable()
export class TareaService {
  data: Tarea[];
  constructor() {
    this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
  }

  read() {
    this.data = JSON.parse(localStorage.getItem('tareas') || '[]');
    return this.data;
  }

  save(data: Tarea[]){
    this.data = data;
    localStorage.setItem('tareas', JSON.stringify(this.data));
  }

  findByName(id: string) {
    return this.data.find(x => x.id === id)
  }
}
