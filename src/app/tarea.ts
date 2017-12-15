import { Persona } from './persona';
import { EstadoTarea } from './estado-tarea';
export class Tarea {
	id:string;
	descripcion:string;
	estado:EstadoTarea;
    encargado:Persona;
}
