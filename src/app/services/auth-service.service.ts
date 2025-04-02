import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InisioSesion } from '../models/inisio-sesion';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private http = inject(HttpClient);
  private apiUrl  = "http://127.0.0.1:8000/api";

  constructor() { }

  postLogin(email: string, password:string):Observable<InisioSesion>{
    const body = { email, password };
    return this.http.post<InisioSesion>(this.apiUrl + "/login" , body)
  }
}
