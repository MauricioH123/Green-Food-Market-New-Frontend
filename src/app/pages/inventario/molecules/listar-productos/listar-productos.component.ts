import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductosInventario } from '../../../../models/productos-inventario';
import { PaginacioProductosInventario } from '../../../../models/paginacio-productos-inventario';

@Component({
  selector: 'app-listar-productos',
  imports: [],
  templateUrl: './listar-productos.component.html',
  styleUrl: './listar-productos.component.css'
})
export class ListarProductosComponent {
  @Input() productos!:PaginacioProductosInventario;
  @Output() paginaSiguiente = new EventEmitter;
  @Output() paginaAnterior = new EventEmitter;
  @Input() paginaActual!:number;
  @Input() paginaSiguienteA!:number;


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

}
