import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { InisioSesion } from '../models/inisio-sesion';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private http = inject(HttpClient);
  private apiUrl  = "http://127.0.0.1:8000/api";
  public estadoAuth = new BehaviorSubject<boolean>(this.verificarToken());
  private router = inject(Router);


  constructor() { }

  public estaAutenticado$():Observable<boolean>{
    return this.estadoAuth.asObservable();
  }

  private verificarToken():boolean{
    try{
      const token = sessionStorage?.getItem("auth_token");
      return !!token;
    }catch(e){
      return false;
    }

  }

  login(credenciales: InisioSesion):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, credenciales).pipe(tap(response =>{
      if(response && response.access_token){
        sessionStorage.setItem("auth_token", response.access_token)
        this.estadoAuth.next(true);

        this.router.navigate(['/homes'])
      }
    }),
    catchError(error => {
      console.error("Error en la autenticación:", error); // Log del error en consola
      return throwError(() => new Error("Correo/Contraseña incorrectas"));
    })
  )
  }

  logout() {
    sessionStorage.removeItem("auth_token");
    this.estadoAuth.next(false);
    this.router.navigate(['/']);
  }
}
