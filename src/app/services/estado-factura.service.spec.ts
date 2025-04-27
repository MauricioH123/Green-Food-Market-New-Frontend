import { TestBed } from '@angular/core/testing';

import { EstadoFacturaService } from './estado-factura.service';

describe('EstadoFacturaService', () => {
  let service: EstadoFacturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoFacturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
