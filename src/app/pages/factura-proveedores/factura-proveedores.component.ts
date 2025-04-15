import { Component } from '@angular/core';
import { CrearFacturaProveedorComponent } from "./molecules/crear-factura-proveedor/crear-factura-proveedor.component";

@Component({
  selector: 'app-factura-proveedores',
  imports: [CrearFacturaProveedorComponent],
  templateUrl: './factura-proveedores.component.html',
  styleUrl: './factura-proveedores.component.css'
})
export class FacturaProveedoresComponent {

}
