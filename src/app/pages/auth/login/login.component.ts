import { Component, inject } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { FormularioLoginComponent } from './molecules/formulario-login/formulario-login.component';
import { AuthServiceService } from '../../../services/auth-service.service';
import { InisioSesion } from '../../../models/inisio-sesion';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, FormularioLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  serviceOuth = inject(AuthServiceService);

  recibirCredenciales(datos:InisioSesion){
    console.log(datos)
  }

  

}
