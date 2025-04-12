import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';

@Injectable({
  providedIn: 'root'
})
export class PagoServiceService {

  private http = inject(HttpClient)
  private apiUrl = "http://127.0.0.1:8000/api/pagos"

  listarPagos():Observable<Pagos[]>{
   return this.http.get<Pagos[]>(this.apiUrl);
  }

}
