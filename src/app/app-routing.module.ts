import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { TareasCrudComponent }from './tareas-crud/tareas-crud.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'personas', component: PersonasCrudComponent },
  { path: 'proyectos', component: ProyectosCrudComponent },
  { path: 'tareas', component: TareasCrudComponent },
  { path: '', component: ProyectosCrudComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
