import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Producto } from '../../../../models/producto';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-formulario-crear-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-crear-producto.component.html',
  styleUrl: './formulario-crear-producto.component.css'
})
export class FormularioCrearProductoComponent{
  @Output() datosProducto = new EventEmitter<Producto>();
  @Input() proveedores!:Proveedor[];
  @Input() mostrarMensaje!:boolean;

  crearProductoForm = new FormGroup({
    proveedorId: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    precio: new FormControl(0, [Validators.required, Validators.min(0)])
  })

  obtenerDatos(){
    const idProveedor =  this.crearProductoForm.get('proveedorId')?.value;
    const nombre =  this.crearProductoForm.get('nombre')?.value;
    const precio = this.crearProductoForm.get('precio')?.value;

    const datosProducto = {
      proveedor_id: idProveedor,
      nombre_producto: nombre,
      precio_venta: precio
    };
    // console.log(datosProducto);

    this.enviarDatos(datosProducto);
    this.borrarDatosFormulario();

  }

  enviarDatos(datos:any){
    this.datosProducto.emit(datos)
  }

  borrarDatosFormulario(){
    this.crearProductoForm.reset();
  }
}
