import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-crear-proveedor',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-crear-proveedor.component.html',
  styleUrl: './formulario-crear-proveedor.component.css'
})
export class FormularioCrearProveedorComponent {
  @Output() nombre = new EventEmitter<string>();
  @Input() mostrarMensaje!:boolean;

  proveedorForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
  })

  obtenerNombre(){
    const nombre:string = String(this.proveedorForm.get('nombre')?.value);
    return nombre;
  }

  asignarValorAlOutputNombre(nombre:string){
    this.nombre.emit(nombre);
  }

  reiniciarFormulario(){
    this.proveedorForm.reset();
  }

  enviarFormulario(){
    const nombre:string = this.obtenerNombre();

    this.asignarValorAlOutputNombre(nombre);
    this.reiniciarFormulario();
  }
}
