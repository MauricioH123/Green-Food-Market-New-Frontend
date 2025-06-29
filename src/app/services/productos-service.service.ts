import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductosServiceService {
  
  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl+"/productos"

  constructor() { }

  getProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.apiUrl}/factura`);
  }

  getDetalleProducto(id:number):Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  actualizarProducto(id:number, data:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  crearProducto(data: any):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  getProductosSumatoria():Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/total`)
  }
}
