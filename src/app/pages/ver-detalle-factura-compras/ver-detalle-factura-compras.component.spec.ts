import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerDetalleFacturaComprasComponent } from './ver-detalle-factura-compras.component';

describe('VerDetalleFacturaComprasComponent', () => {
  let component: VerDetalleFacturaComprasComponent;
  let fixture: ComponentFixture<VerDetalleFacturaComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerDetalleFacturaComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerDetalleFacturaComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
