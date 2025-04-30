import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleFacturaClienteComponent } from './ver-detalle-factura-cliente.component';

describe('VerDetalleFacturaClienteComponent', () => {
  let component: VerDetalleFacturaClienteComponent;
  let fixture: ComponentFixture<VerDetalleFacturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDetalleFacturaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalleFacturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
