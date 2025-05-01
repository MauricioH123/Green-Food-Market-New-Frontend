import { Component, inject, OnInit } from '@angular/core';
import { DetalleFacturaProveedorComponent } from "./molecules/detalle-factura-proveedor/detalle-factura-proveedor.component";
import { FacturaProveedorServiceService } from '../../services/factura-proveedor-service.service';
import { ActivatedRoute } from '@angular/router';
import { DetalleFacturaProveedores } from '../../models/detalle-factura-proveedores';

@Component({
  selector: 'app-ver-detalle-factura-compras',
  imports: [DetalleFacturaProveedorComponent],
  templateUrl: './ver-detalle-factura-compras.component.html',
  styleUrl: './ver-detalle-factura-compras.component.css'
})
export class VerDetalleFacturaComprasComponent implements OnInit {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  servicioFacturaProveedor = inject(FacturaProveedorServiceService);
  detallesFactura!:DetalleFacturaProveedores;
  totalFactua!: number;

  datosFacturas(){
    let idFactura = Number(this.route.snapshot.params['id']);
  
    this.servicioFacturaProveedor.listarDetallesProveedores(idFactura).subscribe((data:DetalleFacturaProveedores) =>{
      this.detallesFactura = data;
      console.log(data)
      this.getTotalFactura();
    });
  }

  getTotalFactura(){
    this.totalFactua = 0; // Reinicia el acumulador
    const arreglo = this.detallesFactura?.productos;
    for (let index = 0; index < arreglo.length; index++) {
      this.totalFactua += arreglo[index].cantidad * arreglo[index].precio_compra;
    }
  }


  ngOnInit(): void {
      this.datosFacturas()
  }
}
