import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proveedor } from '../models/proveedor';
import { PaginacionFacturaProveedor } from '../models/paginacion-factura-proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {

 private  http = inject(HttpClient);
 private apiUrl = "http://127.0.0.1:8000/api/proveedores"

  getProveedores():Observable<Proveedor[]>{
    return this.http.get<Proveedor[]>(`${this.apiUrl}/factura`)
  }
  
  getProveedoresPaginados(page = 1):Observable<PaginacionFacturaProveedor>{
    return this.http.get<PaginacionFacturaProveedor>(`${this.apiUrl}?page=${page}`);
  }

  getProveedor(id:number):Observable<Proveedor>{
    return this.http.get<Proveedor>(`${this.apiUrl}/${id}`)
  }

  actualizarProveedor(id:number, nombre:object){
    return this.http.put(`${this.apiUrl}/${id}`, nombre);
  }

  crearProveedor(nombre:object){
    return this.http.post(`${this.apiUrl}`, nombre);
  }
}
