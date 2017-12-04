import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { TareasCrudComponent } from './tareas-crud/tareas-crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InformacionComponent } from './informacion/informacion.component';
import { ReporteTareaPersonaComponent } from './reporte-tarea-persona/reporte-tarea-persona.component';
import { PersonaService } from './persona.service';
import { ProyectoService } from './proyecto.service';
import { TareaService } from './tarea.service';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { ReporteTareaProyectoComponent } from './reporte-tarea-proyecto/reporte-tarea-proyecto.component';
import { InfoProyectoComponent } from './info-proyecto/info-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent,
    ProyectosCrudComponent,
    TareasCrudComponent,
    DashboardComponent,
    InformacionComponent,
    ReporteTareaPersonaComponent,
    InfoPersonaComponent,
    ReporteTareaProyectoComponent,
    InfoProyectoComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [PersonaService,ProyectoService,TareaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
