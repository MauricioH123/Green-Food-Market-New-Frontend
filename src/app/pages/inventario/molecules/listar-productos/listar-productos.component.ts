import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { PaginacioProductosInventario } from '../../../../models/paginacio-productos-inventario';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Proveedor } from '../../../../models/proveedor';

@Component({
  selector: 'app-listar-productos',
  imports: [ReactiveFormsModule],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent implements OnChanges{
  @Input() productos!:PaginacioProductosInventario;
  @Output() paginaSiguiente = new EventEmitter;
  @Output() paginaAnterior = new EventEmitter;
  @Input() paginaActual!:number;
  @Input() paginaSiguienteA!:number;
  @Output() idProducto = new EventEmitter;
  @Input() detalleProducto!:any;
  @Input() proveedores!:Proveedor[];
  @Output() datosActualizadosProductos = new EventEmitter;

  idProductoo!:number;
  mostrarAlert = false;

  actualizacionForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    idProveedor: new FormControl('', Validators.required),
    idProducto: new FormControl(0, Validators.required)
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
    this.idProductoo = 0;
    this.idProducto.emit(id);
    this.idProductoo = id;
  }

  datosActualizar(){
    const nombre = this.actualizacionForm.get('nombre')?.value;
    const idProveedor = this.actualizacionForm.get('idProveedor')?.value;
    const idProducto = this.actualizacionForm.get('idProducto')?.value;
    const datosProductoActualizar = {
      nombre_producto:nombre,
      proveedor_id: idProveedor,
      id_producto: idProducto
    };
    this.datosActualizadosProductos.emit(datosProductoActualizar);
    // console.log(datosProductoActualizar);

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
      if(changes['detalleProducto'] && this.detalleProducto?.[0]){
        this.actualizacionForm.patchValue({
          nombre: this.detalleProducto[0].nombre_producto || '',
          idProveedor: this.detalleProducto[0].id || '',
          idProducto: this.idProductoo || 0,
        });
      }
  }
}
