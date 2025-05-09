import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearClienteComponent } from './formulario-crear-cliente.component';

describe('FormularioCrearClienteComponent', () => {
  let component: FormularioCrearClienteComponent;
  let fixture: ComponentFixture<FormularioCrearClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCrearClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCrearClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
