import { Injectable, inject} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clientes } from '../models/clientes';

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
}
