import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServicesService {

  private http = inject(HttpClient);
  private apiUrl = "http://127.0.0.1:8000/api/correo";

  enviarCorreo(id:number):Observable<string>{
    return this.http.get<string>(`${this.apiUrl}/${id}`)
  }
}
