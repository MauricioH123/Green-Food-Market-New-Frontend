import { Component, inject, OnInit } from '@angular/core';
import { FacturaServiceService } from '../../services/factura-service.service';
import { ListarFacturasComponent } from './molecules/listar-facturas/listar-facturas.component';
import { PaginacionDetallePagos } from '../../models/paginacion-detalle-pagos';

@Component({
  selector: 'app-ver-facturas-ventas',
  imports: [ListarFacturasComponent],
  templateUrl: './ver-facturas-ventas.component.html',
  styleUrl: './ver-facturas-ventas.component.css'
})
export class VerFacturasVentasComponent implements OnInit {
  
  api = inject(FacturaServiceService);

  listaFactura:PaginacionDetallePagos = {
    current_page: 1,
    data: [],
    total: 0,
    per_page: 10,
    last_page: 1
  };

  datosFactura(){
    this.api.listarFactura().subscribe(
      (data:PaginacionDetallePagos) => {
        this.listaFactura = data;
        console.log(data);
      }
    );
  }

  ngOnInit(): void {
      this.datosFactura()
  }
}
