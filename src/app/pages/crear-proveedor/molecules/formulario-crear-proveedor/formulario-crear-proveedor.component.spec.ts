import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearProveedorComponent } from './formulario-crear-proveedor.component';

describe('FormularioCrearProveedorComponent', () => {
  let component: FormularioCrearProveedorComponent;
  let fixture: ComponentFixture<FormularioCrearProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioCrearProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioCrearProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
