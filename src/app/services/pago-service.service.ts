import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pagos } from '../models/pagos';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PagoServiceService {

  private http = inject(HttpClient)
  private apiUrl = environment.apiUrl+"/pagos"

  listarPagos():Observable<Pagos[]>{
   return this.http.get<Pagos[]>(this.apiUrl);
  }

}
