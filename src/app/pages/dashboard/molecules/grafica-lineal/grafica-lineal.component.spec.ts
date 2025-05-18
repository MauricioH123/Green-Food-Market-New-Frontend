import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaLinealComponent } from './grafica-lineal.component';

describe('GraficaLinealComponent', () => {
  let component: GraficaLinealComponent;
  let fixture: ComponentFixture<GraficaLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaLinealComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
