import { Component, inject, OnInit } from '@angular/core';
import { ListarFacturasVentasComponent } from "./molecules/listar-facturas-ventas/listar-facturas-ventas.component";
import { FacturaProveedorServiceService } from '../../services/factura-proveedor-service.service';
import { observeNotification } from 'rxjs/internal/Notification';
import { PaginacionFacturaProveedor } from '../../models/paginacion-factura-proveedor';

@Component({
  selector: 'app-ver-facturas-compra',
  imports: [ListarFacturasVentasComponent],
  templateUrl: './ver-facturas-compra.component.html',
  styleUrl: './ver-facturas-compra.component.css'
})
export class VerFacturasCompraComponent implements OnInit {

  servicioFacturas = inject(FacturaProveedorServiceService);
  datosDeFactura:PaginacionFacturaProveedor = {
    current_page: 1,
    data: [],
    per_page: 10,
    last_page: 1
  };;
  paginaActual = 1;
  paginaSiguiente!:number;


  obtenerListasFacturasProveedor(pagina:number = 1){
    return this.servicioFacturas.listarFacturasProveedor(pagina).subscribe(
      data =>{
        this.datosDeFactura = data;
        this.paginaActual = data.current_page;
        this.paginaSiguiente = data.last_page;
        // console.log(data);
      }
    )
  }

  siguientePagina(pagina: number){
    this.obtenerListasFacturasProveedor(pagina);
  }

  anteriorPagina(pagina: number){
    this.obtenerListasFacturasProveedor(pagina);
  }

  ngOnInit(): void {
      this.obtenerListasFacturasProveedor();
  }
}
