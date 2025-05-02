import { Component, inject, OnInit } from '@angular/core';
import { ListarProductosComponent } from "./molecules/listar-productos/listar-productos.component";
import { InventarioServiceService } from '../../services/inventario-service.service';
import { PaginacioProductosInventario } from '../../models/paginacio-productos-inventario';

@Component({
  selector: 'app-inventario',
  imports: [ListarProductosComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit{

  inventarioService = inject(InventarioServiceService);
  productosInventario:PaginacioProductosInventario = {
        current_page: 1,
        data: [],
        per_page: 1,
        last_page: 1,
  };

  paginaActual = 1;
  paginaSiguiente!:number;

  getInventarios(page:number = 1){
    this.inventarioService.listarProductos(page).subscribe(
      data => {
        this.productosInventario = data;
        this.paginaActual = data.current_page;
        this.paginaSiguiente = data.last_page;
        console.log(data)
      }
    )
  }

  siguientePagina(pagina: number){
    this.getInventarios(pagina);
  }

  anteriorPagina(pagina: number){
    this.getInventarios(pagina);
  }


  ngOnInit(): void {
      this.getInventarios();
  }
}
