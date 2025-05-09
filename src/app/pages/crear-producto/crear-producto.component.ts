import { Component } from '@angular/core';
import { FormularioCrearProductoComponent } from "./molecules/formulario-crear-producto/formulario-crear-producto.component";

@Component({
  selector: 'app-crear-producto',
  imports: [FormularioCrearProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent {

}
