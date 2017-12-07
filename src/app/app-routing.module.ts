import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareasCrudComponent } from './tareas-crud/tareas-crud.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ReporteTareaPersonaComponent } from './reporte-tarea-persona/reporte-tarea-persona.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { ReporteTareaProyectoComponent } from './reporte-tarea-proyecto/reporte-tarea-proyecto.component';
import { InfoProyectoComponent } from './info-proyecto/info-proyecto.component';
import { CrudEstadoTareaComponent } from './crud-estado-tarea/crud-estado-tarea.component';

 
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'personas', component: PersonasCrudComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'tareas', component: TareasCrudComponent },
  { path: 'reporteTareaPersona', component: ReporteTareaPersonaComponent },
  { path: 'reporteTareaProyecto', component: ReporteTareaProyectoComponent },
  { path: 'estadoTareas', component: CrudEstadoTareaComponent },    
  { path: 'personas/:nombre', component: InfoPersonaComponent },
  { path: 'proyectos/:nombre', component: InfoProyectoComponent },
  { path: '', component: InformacionComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
