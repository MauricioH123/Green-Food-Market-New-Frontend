import { Component, Input } from '@angular/core';
import { DetalleFacturaProveedores } from '../../../../models/detalle-factura-proveedores';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-detalle-factura-proveedor',
  imports: [CurrencyPipe],
  templateUrl: './detalle-factura-proveedor.component.html',
  styleUrl: './detalle-factura-proveedor.component.css'
})
export class DetalleFacturaProveedorComponent {

    @Input() datellesFactura!:DetalleFacturaProveedores;
  
    @Input() totalFactua!:number;
}
