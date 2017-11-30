import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';
import { ProyectosCrudComponent } from './proyectos-crud/proyectos-crud.component';
import { TareasCrudComponent } from './tareas-crud/tareas-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent,
    ProyectosCrudComponent,
    TareasCrudComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
