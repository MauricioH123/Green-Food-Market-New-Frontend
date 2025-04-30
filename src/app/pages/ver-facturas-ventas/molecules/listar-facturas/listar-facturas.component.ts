import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DetallePagos } from '../../../../models/detalle-pagos';
import { TotalFactura } from '../../../../models/total-factura';
import { CurrencyPipe } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { PagoRequest } from '../../../../models/pago-request';
import {RouterOutlet, RouterLink} from '@angular/router';

@Component({
  selector: 'app-listar-facturas',
  imports: [CurrencyPipe, ReactiveFormsModule, RouterLink],
  templateUrl: './listar-facturas.component.html',
  styleUrl: './listar-facturas.component.css'
})
export class ListarFacturasComponent {

  @Input() datosLista!:DetallePagos[];
  @Input() total!:TotalFactura[];
  @Output() estadoFactura = new EventEmitter<PagoRequest>;
  @Output() paginaSiguiente = new EventEmitter;
  @Output() paginaAnterior = new EventEmitter;
  @Input() paginaActual!:number;
  @Input() paginaSiguienteA!:number;
  modalFacturaSeleccionada: any = null;
  
  abrirModal(dato: any) {
    this.modalFacturaSeleccionada = dato;
  }

  cerrarModal() {
    this.modalFacturaSeleccionada = null;
  }

  enviarEstadoFacturaAlPadre(idFactura:number, estadoFactura:number ){
    this.estadoFactura.emit( {
      factura_id:idFactura,
      estado:estadoFactura,
    })
  }

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
