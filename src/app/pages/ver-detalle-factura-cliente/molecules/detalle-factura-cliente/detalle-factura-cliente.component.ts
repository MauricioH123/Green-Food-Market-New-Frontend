import { Component, Input } from '@angular/core';
import { DetalleFacturaCliente } from '../../../../models/detalle-factura-cliente';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-factura-cliente',
  imports: [CurrencyPipe],
  templateUrl: './detalle-factura-cliente.component.html',
  styleUrl: './detalle-factura-cliente.component.css'
})
export class DetalleFacturaClienteComponent{

  @Input() datellesFactura!:DetalleFacturaCliente;

  @Input() totalFactua!:number;

}
