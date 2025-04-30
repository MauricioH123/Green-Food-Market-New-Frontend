import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFacturasCompraComponent } from './ver-facturas-compra.component';

describe('VerFacturasCompraComponent', () => {
  let component: VerFacturasCompraComponent;
  let fixture: ComponentFixture<VerFacturasCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFacturasCompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFacturasCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
