import { Component, Input } from '@angular/core';
import { DetallePagos } from '../../../../models/detalle-pagos';
import { TotalFactura } from '../../../../models/total-factura';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-listar-facturas',
  imports: [CurrencyPipe],
  templateUrl: './listar-facturas.component.html',
  styleUrl: './listar-facturas.component.css'
})
export class ListarFacturasComponent {

  @Input() datosLista!:DetallePagos[];
  @Input() total!:TotalFactura[];


}
