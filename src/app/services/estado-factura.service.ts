import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoRequest } from '../models/pago-request';

@Injectable({
  providedIn: 'root'
})
export class EstadoFacturaService {

  private http = inject(HttpClient);
  private apiUrl = 'http://127.0.0.1:8000/api/detalle-pago'

  actualizarEstado(estado:boolean, factura:number):Observable<any>{
    return this.http.put(`${this.apiUrl}/${factura}`, {estado:estado})
  }
}
