import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';
import { PaginacionClientes } from '../models/paginacion-clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  constructor() { }

    private http = inject(HttpClient);
    private apiUrl = "http://127.0.0.1:8000/api/clientes";

    getClientes():Observable<Clientes[]>{
      return this.http.get<Clientes[]>(`${this.apiUrl}/facturas`);
    }

    listarTodosLosClientes(page:number = 1 ):Observable<PaginacionClientes>{
      return this.http.get<PaginacionClientes>(`${this.apiUrl}?page=${page}`);
    }

    datalleClienteId(id:number):Observable<Clientes>{
      return this.http.get<Clientes>(`${this.apiUrl}/${id}`);
    }

    actualizarDetalleClienteId(id:number ,data:any):Observable<any>{
      return this.http.put(`${this.apiUrl}/${id}`, data);
    }
}
