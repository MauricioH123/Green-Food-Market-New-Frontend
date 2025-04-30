import { Component, inject, OnInit } from '@angular/core';
import { DetalleFacturaClienteComponent } from "./molecules/detalle-factura-cliente/detalle-factura-cliente.component";
import { ActivatedRoute } from '@angular/router';
import { FacturaServiceService } from '../../services/factura-service.service';
import { DetalleFacturaCliente } from '../../models/detalle-factura-cliente';


@Component({
  selector: 'app-ver-detalle-factura-cliente',
  imports: [DetalleFacturaClienteComponent],
  templateUrl: './ver-detalle-factura-cliente.component.html',
  styleUrl: './ver-detalle-factura-cliente.component.css'
})
export class VerDetalleFacturaClienteComponent implements OnInit {

  route: ActivatedRoute = inject(ActivatedRoute);
  facturaService = inject(FacturaServiceService);
  detallesFactura!:DetalleFacturaCliente;
  totalFactua!: number;


datosFacturas(){
  let idFactura = Number(this.route.snapshot.params['id']);

  this.facturaService.listarDetalleFactura(idFactura).subscribe((data:DetalleFacturaCliente) =>{
    this.detallesFactura = data;
    console.log(data)
    this.getTotalFactura();
  });
}

getTotalFactura(){
  this.totalFactua = 0; // Reinicia el acumulador
  const arreglo = this.detallesFactura?.detalle_factura;
  for (let index = 0; index < arreglo.length; index++) {
    this.totalFactua += arreglo[index].cantidad * arreglo[index].precio_unitario;
  }
}

ngOnInit(): void {
  this.datosFacturas();
}
}
