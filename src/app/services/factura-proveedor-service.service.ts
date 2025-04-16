import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturaProveedor } from '../models/factura-proveedor';

@Injectable({
  providedIn: 'root'
})
export class FacturaProveedorServiceService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/entradas";

  crearFacturaProveedor(data:FacturaProveedor):Observable<any>{
    return this.http.post(this.apiUrl, data)
  }
}
