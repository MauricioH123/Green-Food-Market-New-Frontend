import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FacturaRequest } from '../models/factura-request';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaServiceService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/facturas";
  private router = inject(Router) 

  constructor() { }

  crearFactura(data: FacturaRequest):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

}
