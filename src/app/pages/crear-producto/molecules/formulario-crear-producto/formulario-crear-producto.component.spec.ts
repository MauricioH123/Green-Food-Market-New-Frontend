import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearProductoComponent } from './formulario-crear-producto.component';

describe('FormularioCrearProductoComponent', () => {
  let component: FormularioCrearProductoComponent;
  let fixture: ComponentFixture<FormularioCrearProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCrearProductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCrearProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
