import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleFacturaClienteComponent } from './detalle-factura-cliente.component';

describe('DetalleFacturaClienteComponent', () => {
  let component: DetalleFacturaClienteComponent;
  let fixture: ComponentFixture<DetalleFacturaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleFacturaClienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleFacturaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
