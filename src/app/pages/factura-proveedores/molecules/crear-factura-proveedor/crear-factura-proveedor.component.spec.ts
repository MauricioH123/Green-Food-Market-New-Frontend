import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearFacturaProveedorComponent } from './crear-factura-proveedor.component';

describe('CrearFacturaProveedorComponent', () => {
  let component: CrearFacturaProveedorComponent;
  let fixture: ComponentFixture<CrearFacturaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearFacturaProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearFacturaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
