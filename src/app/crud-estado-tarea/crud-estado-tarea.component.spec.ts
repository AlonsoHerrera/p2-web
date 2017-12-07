import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudEstadoTareaComponent } from './crud-estado-tarea.component';

describe('CrudEstadoTareaComponent', () => {
  let component: CrudEstadoTareaComponent;
  let fixture: ComponentFixture<CrudEstadoTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudEstadoTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudEstadoTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
