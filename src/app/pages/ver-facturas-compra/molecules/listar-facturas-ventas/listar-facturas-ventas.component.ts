import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PaginacionFacturaProveedor } from '../../../../models/paginacion-factura-proveedor';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-listar-facturas-ventas',
  imports: [CurrencyPipe],
  templateUrl: './listar-facturas-ventas.component.html',
  styleUrl: './listar-facturas-ventas.component.css'
})
export class ListarFacturasVentasComponent {

  @Input() datosFacturas!:PaginacionFacturaProveedor;
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