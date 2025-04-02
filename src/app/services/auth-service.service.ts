import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { InisioSesion } from '../models/inisio-sesion';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private http = inject(HttpClient);
  private apiUrl  = "http://127.0.0.1:8000/api";

  constructor() { }

  login(credenciales: InisioSesion):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, credenciales).pipe(tap(response =>{
      if(response && response.access_token){
        sessionStorage.setItem("auth_token", response.access_token)
      }
    }))
  }
}
