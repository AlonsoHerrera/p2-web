import { Persona } from './persona';
import { EstadoTarea } from './estado-tarea';
import { Proyecto } from './proyecto';

export class Tarea {
	id:string;
	descripcion:string;
	estado:EstadoTarea;
    encargado:Persona;
    proyecto:Proyecto;

}
