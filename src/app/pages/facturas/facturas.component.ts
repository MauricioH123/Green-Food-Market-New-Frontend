import { Component, inject, OnInit } from '@angular/core';
import { CrearFacturasComponent } from "./molecules/crear-facturas/crear-facturas.component";
import { FacturaServiceService } from '../../services/factura-service.service';
import { FacturaRequest } from '../../models/factura-request';
import { ClientesServiceService } from '../../services/clientes-service.service';
import { Clientes } from '../../models/clientes';
import { ProductosServiceService } from '../../services/productos-service.service';
import { Producto } from '../../models/producto';
import { PagoServiceService } from '../../services/pago-service.service';
import { Pagos } from '../../models/pagos';

@Component({
  selector: 'app-facturas',
  imports: [CrearFacturasComponent],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})
export class FacturasComponent implements OnInit {
  serviceFactura = inject(FacturaServiceService);
  serviceClientes = inject(ClientesServiceService);
  serviceProducto = inject(ProductosServiceService);
  ServicePagos = inject(PagoServiceService);

  clientes:Clientes[] = []
  clientesRelacionados!:Clientes[]
  idCliente!:number;
  cliente!:Clientes;
  productosList: Producto[] = [];
  pagosLista: Pagos[] = []
  

  mostrarClientes(){
    this.serviceClientes.getClientes().subscribe((data:Clientes[]) => {
      this.clientes = data;
    });
  }

  relacionClientes(nomrbe:string){
    this.clientesRelacionados = this.clientes.filter(cliente => cliente.nombre.toLowerCase().includes(nomrbe))
  }

  asiganrIdCliente(id:number){
    this.idCliente = id;
    const clienteEncontrado = this.clientes.find(cliente => cliente.id === this.idCliente)
    if(clienteEncontrado){
      this.cliente = clienteEncontrado;
    }

  }

  productos(){
    this.serviceProducto.getProductos().subscribe((productos:Producto[])=>{
      this.productosList = productos
      // console.log(this.productosList)
    });
  }

  listaPagos(){
    this.ServicePagos.listarPagos().subscribe( (pagos:Pagos[])=>{
      this.pagosLista = pagos
      console.log(this.pagosLista)
    });
  }



  enviarFactura(factura:FacturaRequest){
    
  }
  ngOnInit(){
    this.mostrarClientes();
    this.productos();
    this.listaPagos();
  }


}
