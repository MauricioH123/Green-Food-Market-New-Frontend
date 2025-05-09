import { Component, inject } from '@angular/core';
import { FormularioCrearClienteComponent } from "./molecules/formulario-crear-cliente/formulario-crear-cliente.component";
import { ClientesServiceService } from '../../services/clientes-service.service';


@Component({
  selector: 'app-crear-cliente',
  imports: [FormularioCrearClienteComponent],
  templateUrl: './crear-cliente.component.html',
  styleUrl: './crear-cliente.component.css'
})
export class CrearClienteComponent {
  clienteService = inject(ClientesServiceService);
  clienteCreado:boolean = false;


  crearCliente(data:any){
    this.clienteService.crearCliente(data).subscribe(resultado => {
      this.clienteCreado = true;
      setTimeout(() => this.clienteCreado = false, 1000)
    })
  }
}
