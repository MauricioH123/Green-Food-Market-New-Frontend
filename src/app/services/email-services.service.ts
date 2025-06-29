import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class EmailServicesService {

  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl+"/correo";

  enviarCorreo(id:number):Observable<string>{
    return this.http.get<string>(`${this.apiUrl}/${id}`)
  }
}
