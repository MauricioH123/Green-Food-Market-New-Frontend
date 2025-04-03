import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import { identity, map, Observable } from 'rxjs';
import { Router } from '@angular/router';


export const authGuard: CanActivateFn = (route, state): Observable<boolean> => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  return authService.estaAutenticado$().pipe(
    map( estaAutenticado => {
      if(!estaAutenticado){
        router.navigate(["/"])
        return false;
      }
      return true;
    })
  )
};



export const loginGuard: CanActivateFn =  (route, state): Observable<boolean> => {
  const authService = inject(AuthServiceService);
  const router = inject(Router);

  return authService.estaAutenticado$().pipe(
    map(estadoAutenticado =>{
      if(estadoAutenticado){
        router.navigate(['/homes']);
        return false;
      }
      return true
    })
  )
}
