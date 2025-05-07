import { Component, inject, OnInit } from '@angular/core';
import { ListadoClientesComponent } from "./molecules/listado-clientes/listado-clientes.component";
import { ClientesServiceService } from '../../services/clientes-service.service';
import { PaginacionClientes } from '../../models/paginacion-clientes';
import { Clientes } from '../../models/clientes';

@Component({
  selector: 'app-cliente',
  imports: [ListadoClientesComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent implements OnInit {

  serviceClientes = inject(ClientesServiceService);

  clientesPaginados:PaginacionClientes = {
    current_page: 1,
    data: [],
    per_page: 1,
    last_page: 1,
  };

  paginaActual = 1;
  paginaSiguiente!:number;
  detalleCliente!:Clientes;


  obtenerCliente(page:number = 1){
    this.serviceClientes.listarTodosLosClientes(page).subscribe( data => {
      this.clientesPaginados = data;
      this.paginaActual = data.current_page;
      this.paginaSiguiente = data.last_page;
      // console.log(this.clientesPaginados);
    });
  }

  obtenerDetalleCliente(id:number){
    this.serviceClientes.datalleClienteId(id).subscribe(data =>{
      this.detalleCliente = data;
    })
  }

  actualizarDatosCliente(id:number, nombre:string, celular:string, correo:string, direccion:string){
    const datos = {
      nombre:nombre, 
      celular:celular, 
      correo:correo, 
      direccion: direccion,
    }
    
    this.serviceClientes.actualizarDetalleClienteId(id, datos).subscribe( response =>{
      console.log(response);
    });
  }

  siguientePagina(pagina: number){
    this.obtenerCliente(pagina);
  }

  anteriorPagina(pagina: number){
    this.obtenerCliente(pagina);
  }

  ngOnInit(): void {
    this.obtenerCliente();
  }
}
