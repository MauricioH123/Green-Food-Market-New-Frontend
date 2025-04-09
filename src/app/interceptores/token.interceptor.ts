import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {

  const router = inject(Router)
  const token = sessionStorage.getItem('auth_token')


  let authReq = req;

  if(token){
    authReq = req.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(authReq).pipe();
};
