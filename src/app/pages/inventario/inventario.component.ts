import { Component } from '@angular/core';
import { ListarProductosComponent } from "./molecules/listar-productos/listar-productos.component";

@Component({
  selector: 'app-inventario',
  imports: [ListarProductosComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

}
