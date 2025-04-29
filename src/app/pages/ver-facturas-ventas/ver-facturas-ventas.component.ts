import { Component, inject, OnInit } from '@angular/core';
import { FacturaServiceService } from '../../services/factura-service.service';
import { ListarFacturasComponent } from './molecules/listar-facturas/listar-facturas.component';
import { PaginacionDetallePagos } from '../../models/paginacion-detalle-pagos';
import { PagoServiceService } from '../../services/pago-service.service';
import { EstadoFacturaService } from '../../services/estado-factura.service';
import { PagoRequest } from '../../models/pago-request';

@Component({
  selector: 'app-ver-facturas-ventas',
  imports: [ListarFacturasComponent],
  templateUrl: './ver-facturas-ventas.component.html',
  styleUrl: './ver-facturas-ventas.component.css'
})
export class VerFacturasVentasComponent implements OnInit {
  
  api = inject(FacturaServiceService);
  apiEstados = inject(EstadoFacturaService);

  paginaActual = 1;
  paginaSiguiente!:number;


  listaFactura:PaginacionDetallePagos = {
    current_page: 1,
    data: [],
    total: 0,
    per_page: 10,
    last_page: 1
  };

  datosFactura(page: number = 1){
    this.api.listarFactura(page).subscribe(
      (data:PaginacionDetallePagos) => {
        this.listaFactura = data;
        this.paginaActual = data.current_page;
        this.paginaSiguiente = data.last_page;
        console.log(data);
      }
    );
  }

  actulizarEstadoFactura(datos:PagoRequest){
    const idFactura = datos.factura_id;
    const estadoActualFactura = datos.estado;
    let estadoActualizado:boolean;
    if(estadoActualFactura === 1){
      estadoActualizado = false;
    }else{
      estadoActualizado = true;
    }

    if(estadoActualizado !== null){
      this.apiEstados.actualizarEstado(estadoActualizado, idFactura).subscribe({
        next: (respuesta) =>{
          console.log('Estado actualizado correctamente:', respuesta)
        },
        error: (error) =>{
          console.error('Error al actualizar el estado:', error);
        }
        })
    }

  }
  
  siguientePagina(pagina: number){
    this.datosFactura(pagina);
  }

  anteriorPagina(pagina: number){
    this.datosFactura(pagina);
  }


  ngOnInit(): void {
      this.datosFactura()
  }
}
