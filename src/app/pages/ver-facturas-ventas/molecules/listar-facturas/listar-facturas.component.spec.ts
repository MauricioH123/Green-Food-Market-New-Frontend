import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFacturasComponent } from './listar-facturas.component';

describe('ListarFacturasComponent', () => {
  let component: ListarFacturasComponent;
  let fixture: ComponentFixture<ListarFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFacturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
