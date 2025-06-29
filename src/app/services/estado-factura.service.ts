import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagoRequest } from '../models/pago-request';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EstadoFacturaService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl+'/detalle-pago'

  actualizarEstado(estado:boolean, factura:number):Observable<any>{
    return this.http.put(`${this.apiUrl}/${factura}`, {estado:estado})
  }
}
