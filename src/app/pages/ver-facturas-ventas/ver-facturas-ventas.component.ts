import { Component, inject, OnInit } from '@angular/core';
import { FacturaServiceService } from '../../services/factura-service.service';
import { DetallePagos } from '../../models/detalle-pagos';

@Component({
  selector: 'app-ver-facturas-ventas',
  imports: [],
  templateUrl: './ver-facturas-ventas.component.html',
  styleUrl: './ver-facturas-ventas.component.css'
})
export class VerFacturasVentasComponent implements OnInit {
  api = inject(FacturaServiceService);

  mostrar(){
    this.api.listarFactura().subscribe(
      (data:DetallePagos) => {
        console.log(data)
      }
    )

  }

  ngOnInit(): void {
      this.mostrar()
  }
}
