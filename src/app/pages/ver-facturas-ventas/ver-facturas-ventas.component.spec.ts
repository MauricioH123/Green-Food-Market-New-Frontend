import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFacturasVentasComponent } from './ver-facturas-ventas.component';

describe('VerFacturasVentasComponent', () => {
  let component: VerFacturasVentasComponent;
  let fixture: ComponentFixture<VerFacturasVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerFacturasVentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFacturasVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
