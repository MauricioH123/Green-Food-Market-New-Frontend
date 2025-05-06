import { Component, inject, OnInit } from '@angular/core';
import { ListarProductosComponent } from "./molecules/listar-productos/listar-productos.component";
import { InventarioServiceService } from '../../services/inventario-service.service';
import { PaginacioProductosInventario } from '../../models/paginacio-productos-inventario';
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-inventario',
  imports: [ListarProductosComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit{

  inventarioService = inject(InventarioServiceService);
  productoService = inject(ProductosServiceService);
  proveedorService = inject(ProveedoresService);

  productosInventario:PaginacioProductosInventario = {
        current_page: 1,
        data: [],
        per_page: 1,
        last_page: 1,
  };

  detalleProducto!:any;

  paginaActual = 1;
  paginaSiguiente!:number;

  proveedores!:Proveedor[];

  getInventarios(page:number = 1){
    this.inventarioService.listarProductos(page).subscribe(
      data => {
        this.productosInventario = data;
        this.paginaActual = data.current_page;
        this.paginaSiguiente = data.last_page;
        // console.log(data)
      }
    )
  }

  siguientePagina(pagina: number){
    this.getInventarios(pagina);
  }

  anteriorPagina(pagina: number){
    this.getInventarios(pagina);
  }

  obtenerDatosProductoId(id: number){
    this.productoService.getDetalleProducto(id).subscribe(
      data => {
        // console.log(data);
        this.detalleProducto = data;
        // console.log(this.detalleProducto);
      }
    );
  }

  obtenerProveedores(){
    this.proveedorService.getProveedores().subscribe(
      data =>{
        this.proveedores = data
      }
    )
  }

  actualizarProducto(idProducto:number, idProveedor:number, nombreProducto:string){
    const data = {
      nombre_producto:nombreProducto,
      proveedor_id: idProveedor,
    }
    this.productoService.actualizarProducto(idProducto, data).subscribe( result =>{
      console.log(result);
    }
    );
  }


  ngOnInit(): void {
      this.getInventarios();
      this.obtenerProveedores();
  }
}
