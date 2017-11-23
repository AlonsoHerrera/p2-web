import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasCrudComponent } from './personas-crud/personas-crud.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasCrudComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
