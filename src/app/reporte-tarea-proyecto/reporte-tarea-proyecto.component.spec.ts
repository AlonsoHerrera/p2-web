import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteTareaProyectoComponent } from './reporte-tarea-proyecto.component';

describe('ReporteTareaProyectoComponent', () => {
  let component: ReporteTareaProyectoComponent;
  let fixture: ComponentFixture<ReporteTareaProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReporteTareaProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteTareaProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
