import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FacturaProveedor } from '../models/factura-proveedor';
import { PaginacionFacturaProveedor } from '../models/paginacion-factura-proveedor';
import { DetalleFacturaProveedores } from '../models/detalle-factura-proveedores';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class FacturaProveedorServiceService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl+"/entradas";

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
