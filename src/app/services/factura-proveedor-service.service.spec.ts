import { TestBed } from '@angular/core/testing';

import { FacturaProveedorServiceService } from './factura-proveedor-service.service';

describe('FacturaProveedorServiceService', () => {
  let service: FacturaProveedorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturaProveedorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
