import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginacioProductosInventario } from '../models/paginacio-productos-inventario';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class InventarioServiceService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl+"/inventario";

  listarProductos(page:number = 1):Observable<PaginacioProductosInventario>{
    return this.http.get<PaginacioProductosInventario>(`${this.apiUrl}?page=${page}`);
  }
}
