import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTareaPersonaComponent } from './reporte-tarea-persona.component';

describe('ReporteTareaPersonaComponent', () => {
  let component: ReporteTareaPersonaComponent;
  let fixture: ComponentFixture<ReporteTareaPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTareaPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTareaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
