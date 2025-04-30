import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFacturasVentasComponent } from './listar-facturas-ventas.component';

describe('ListarFacturasVentasComponent', () => {
  let component: ListarFacturasVentasComponent;
  let fixture: ComponentFixture<ListarFacturasVentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFacturasVentasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFacturasVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
