import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PaginacionProveedores } from '../../../../models/paginacion-proveedores';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-listar-proveedores',
  imports: [ReactiveFormsModule],
  templateUrl: './listar-proveedores.component.html',
  styleUrl: './listar-proveedores.component.css'
})
export class ListarProveedoresComponent implements OnChanges{

  @Input() proveedores!:PaginacionProveedores;
  @Output() paginaSiguiente = new EventEmitter;
  @Output() paginaAnterior = new EventEmitter;
  @Input() paginaActual!:number;
  @Input() paginaSiguienteA!:number;
  @Output() idProveedorPadre = new EventEmitter;
  @Input() datosDelProveedorId!:Proveedor;
  @Output() datosDelProveedorActualizados = new EventEmitter<Proveedor>();
  @Input() mostrarMensaje!:boolean;

  actualizarProveedorForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    nombre: new FormControl('', Validators.required)
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

  obtenerProveedorId(id:number){
    this.idProveedorPadre.emit(id);
  }

  obtenerDatosProveedorActualizado(){
    const id = this.actualizarProveedorForm.get('id')?.value;
    const nombre = this.actualizarProveedorForm.get('nombre')?.value;

    const dato = {
      id: id  || 0,
      nombre_proveedor: nombre || ''
    }

    this.enviarDatosActualizadosAlPadre(dato);
    this.reiniciarFormulario();
    this.cerrarModal();
    
  }

  enviarDatosActualizadosAlPadre(data:Proveedor){
    this.datosDelProveedorActualizados.emit(data);
  }

  reiniciarFormulario(){
    this.actualizarProveedorForm.reset();
  }

  cerrarModal(){
      const modal: HTMLDialogElement | null = document.getElementById('my_modal_4') as HTMLDialogElement;
    if (modal) {
      modal.close();
    }
  }


  ngOnChanges(changes: SimpleChanges): void {
      if(this.datosDelProveedorId){
        this.actualizarProveedorForm.patchValue({
          id: this.datosDelProveedorId.id || 0,
          nombre: this.datosDelProveedorId.nombre_proveedor || '',
        })
      }
  }
}
