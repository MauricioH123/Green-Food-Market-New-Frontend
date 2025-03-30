import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaListarComponent } from './factura-listar.component';

describe('FacturaListarComponent', () => {
  let component: FacturaListarComponent;
  let fixture: ComponentFixture<FacturaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacturaListarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacturaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
