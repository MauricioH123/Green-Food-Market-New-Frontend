import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFacturaProveedorComponent } from './detalle-factura-proveedor.component';

describe('DetalleFacturaProveedorComponent', () => {
  let component: DetalleFacturaProveedorComponent;
  let fixture: ComponentFixture<DetalleFacturaProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleFacturaProveedorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFacturaProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
