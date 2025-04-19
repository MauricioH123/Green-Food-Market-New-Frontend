import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

 private  http = inject(HttpClient);
 private apiUrl = "http://127.0.0.1:8000/api/proveedores"

  getProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.apiUrl}/factura`)
  }
  
}
