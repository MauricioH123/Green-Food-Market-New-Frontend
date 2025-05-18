import { Component, inject, OnInit } from '@angular/core';
import { FacturaServiceService } from '../../services/factura-service.service';
import { ListarFacturasComponent } from './molecules/listar-facturas/listar-facturas.component';
import { PaginacionDetallePagos } from '../../models/paginacion-detalle-pagos';
import { EstadoFacturaService } from '../../services/estado-factura.service';
import { PagoRequest } from '../../models/pago-request';
import { EmailServicesService } from '../../services/email-services.service';

@Component({
  selector: 'app-ver-facturas-ventas',
  imports: [ListarFacturasComponent],
  templateUrl: './ver-facturas-ventas.component.html',
  styleUrl: './ver-facturas-ventas.component.css'
})
export class VerFacturasVentasComponent implements OnInit {
  
  api = inject(FacturaServiceService);
  apiEstados = inject(EstadoFacturaService);
  emailService = inject(EmailServicesService);

  paginaActual = 1;
  paginaSiguiente!:number;

  respuestaDeEnvio:boolean = false;


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
        // console.log(data);
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

  // pruebaDetalleF(){
  //   this.api.listarDetalleFactura(42).subscribe((data)=>{
  //     console.log(data)
  //   }
  //   )
  // }

  enviarCorreo(id:number){
    this.emailService.enviarCorreo(id).subscribe(response =>{
      this.respuestaDeEnvio = true;

      setTimeout(()=>{
        this.respuestaDeEnvio = false;
      }, 1000)
    })
  }


  ngOnInit(): void {
      this.datosFactura();
      // this.pruebaDetalleF();

  }
}
