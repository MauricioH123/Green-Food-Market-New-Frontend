import { Component, inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FormularioLoginComponent } from './molecules/formulario-login/formulario-login.component';
import { AuthServiceService } from '../../../services/auth-service.service';
import { InisioSesion } from '../../../models/inisio-sesion';
import { error } from 'console';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormularioLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  serviceOuth = inject(AuthServiceService);
  errorMensaje: string = '';



  recibirCredenciales(datos:InisioSesion){
    this.serviceOuth.login(datos).subscribe({
      next: (response) =>{
        console.log('Login exitoso', response);
        this.errorMensaje = '';
      },
      error: (error) =>{
        console.log("error ", error);
        this.errorMensaje = error;
      }
    })
  }

  



}
