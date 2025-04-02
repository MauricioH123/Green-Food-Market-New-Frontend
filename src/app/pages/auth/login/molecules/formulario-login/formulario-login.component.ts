import { Component, Output,EventEmitter } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { InisioSesion } from '../../../../../models/inisio-sesion';

@Component({
  selector: 'app-formulario-login',
  imports: [ReactiveFormsModule, ],
  templateUrl: './formulario-login.component.html',
  styleUrl: './formulario-login.component.css'
})
export class FormularioLoginComponent {
  formularioInicio = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

 @Output() credenciales = new EventEmitter<InisioSesion>();

  // Método para enviar los datos al componente padre
  public envioAlPadre() {
    const datosLogin: InisioSesion = {
      email: this.formularioInicio.value.email || '',
      password: this.formularioInicio.value.password || ''
    };
    
    this.credenciales.emit(datosLogin);
  }
}
