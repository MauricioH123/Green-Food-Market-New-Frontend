import { Component, Output, Input, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { PaginacionClientes } from '../../../../models/paginacion-clientes';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Clientes } from '../../../../models/clientes';

@Component({
  selector: 'app-listado-clientes',
  imports: [ReactiveFormsModule],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent implements OnChanges {

  @Input() clientesPaginados!:PaginacionClientes;
  @Output() paginaSiguiente = new EventEmitter;
  @Output() paginaAnterior = new EventEmitter;
  @Input() paginaActual!:number;
  @Input() paginaSiguienteA!:number;
  @Output() idClientePadre =  new EventEmitter;
  @Input() detalleCliente!:Clientes;
  @Output() detalleClientePadre = new EventEmitter;

  

  mostrarAlert = false;

  ActualizarClienteForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required),
    celular: new FormControl('', Validators.required),
    correo: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
  })



  enviarSiguientePagina(pagina:number){
    if(this.paginaActual === this.paginaSiguienteA){
      this.paginaSiguiente.emit(pagina);
      return
    }
    this.paginaSiguiente.emit(pagina + 1);
  }

  enviarAnteriorPagina(pagina:number){
    if(this.paginaActual === 1){
      this.paginaAnterior.emit(pagina);
      return 
    }
    this.paginaAnterior.emit(pagina - 1);
  }

  obtenerProducto(id:number){
    this.idClientePadre.emit(id);
  }

  obtenerDatosActualizadosCliente(){
    const id =  this.ActualizarClienteForm.get('id')?.value;
    const nombre =  this.ActualizarClienteForm.get('nombre')?.value;
    const celular =  this.ActualizarClienteForm.get('celular')?.value;
    const correo =  this.ActualizarClienteForm.get('correo')?.value;
    const direccion =  this.ActualizarClienteForm.get('direccion')?.value;

    const data = {
      id: id,
      nombre: nombre,
      celular: celular,
      correo: correo,
      direccion: direccion
    };
    this.detalleClientePadre.emit(data)

    const modal: HTMLDialogElement | null = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }

    this.mostrarAlert = true
    setTimeout(() => {
      this.mostrarAlert = false
    }, 1000)
    
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.detalleCliente){
        this.ActualizarClienteForm.patchValue({
          id: this.detalleCliente.id || 0 ,
          nombre: this.detalleCliente.nombre || '',
          celular: this.detalleCliente.celular || '',
          correo: this.detalleCliente.correo || '',
          direccion: this.detalleCliente.direccion || '',
        })
      }
  }


}
