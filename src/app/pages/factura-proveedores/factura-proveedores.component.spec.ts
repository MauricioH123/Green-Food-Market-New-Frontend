import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaProveedoresComponent } from './factura-proveedores.component';

describe('FacturaProveedoresComponent', () => {
  let component: FacturaProveedoresComponent;
  let fixture: ComponentFixture<FacturaProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaProveedoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
