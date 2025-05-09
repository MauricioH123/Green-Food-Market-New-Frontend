import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-formulario-crear-cliente',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-crear-cliente.component.html',
  styleUrl: './formulario-crear-cliente.component.css'
})
export class FormularioCrearClienteComponent {

  @Output() datosCliente = new EventEmitter();
  @Input() mostrarMensaje!:boolean;

  crearClienteForm  = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.maxLength(205)]),
    celular: new FormControl('',[Validators.required, Validators.maxLength(205)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    direccion: new FormControl('', [Validators.required, Validators.maxLength(205)]),
  })
  
  enviarDatosAlPadre(){
    const nombre = this.crearClienteForm.get('nombre')?.value;
    const celular = this.crearClienteForm.get('celular')?.value;
    const correo = this.crearClienteForm.get('correo')?.value;
    const direccion = this.crearClienteForm.get('direccion')?.value;

    const data = {
      nombre: nombre,
      celular: celular,
      correo: correo,
      direccion: direccion,
    }

    this.datosCliente.emit(data);
    this.crearClienteForm.reset();
  }
}
