import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacioProductosInventario } from '../models/paginacio-productos-inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioServiceService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/inventario";

  listarProductos(page:number = 1):Observable<PaginacioProductosInventario>{
    return this.http.get<PaginacioProductosInventario>(`${this.apiUrl}?page=${page}`);
  }
}
