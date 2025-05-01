import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturaProveedor } from '../models/factura-proveedor';
import { PaginacionFacturaProveedor } from '../models/paginacion-factura-proveedor';
import { DetalleFacturaProveedores } from '../models/detalle-factura-proveedores';

@Injectable({
  providedIn: 'root'
})
export class FacturaProveedorServiceService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/entradas";

  crearFacturaProveedor(data:FacturaProveedor):Observable<any>{
    return this.http.post(this.apiUrl, data)
  }

  listarFacturasProveedor(page:number = 1):Observable<PaginacionFacturaProveedor>{
    return this.http.get<PaginacionFacturaProveedor>(`${this.apiUrl}?page=${page}`)
  }

  listarDetallesProveedores(id:number):Observable<DetalleFacturaProveedores>{
    return this.http.get<DetalleFacturaProveedores>(`${this.apiUrl}/${id}/detalle`)
  }
}
