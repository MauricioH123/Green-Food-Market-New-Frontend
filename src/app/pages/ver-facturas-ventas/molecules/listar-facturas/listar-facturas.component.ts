import { Component, Input, Output,EventEmitter } from '@angular/core';
import { DetallePagos } from '../../../../models/detalle-pagos';
import { TotalFactura } from '../../../../models/total-factura';
import { CurrencyPipe } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { PagoRequest } from '../../../../models/pago-request';

@Component({
  selector: 'app-listar-facturas',
  imports: [CurrencyPipe, ReactiveFormsModule],
  templateUrl: './listar-facturas.component.html',
  styleUrl: './listar-facturas.component.css'
})
export class ListarFacturasComponent {

  @Input() datosLista!:DetallePagos[];
  @Input() total!:TotalFactura[];
  @Output() estadoFactura = new EventEmitter<PagoRequest>;
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




}
