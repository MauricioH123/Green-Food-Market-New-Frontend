import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FacturaRequest } from '../models/factura-request';
import { Observable } from 'rxjs';
import { PaginacionDetallePagos } from '../models/paginacion-detalle-pagos';

@Injectable({
  providedIn: 'root'
})
export class FacturaServiceService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/facturas";


  constructor() { }

  crearFactura(data: FacturaRequest):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  listarFactura(page:number = 1):Observable<PaginacionDetallePagos>{
    return this.http.get<PaginacionDetallePagos>(`${this.apiUrl}?page=${page}`)
  }
}
