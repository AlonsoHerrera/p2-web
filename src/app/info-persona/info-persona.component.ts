import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-info-persona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.css']
})

export class InfoPersonaComponent implements OnInit {

  persona: Persona;
  private sub: any;
  constructor(private route: ActivatedRoute, private service: PersonaService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.persona = this.service.findByName(params['nombre']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}