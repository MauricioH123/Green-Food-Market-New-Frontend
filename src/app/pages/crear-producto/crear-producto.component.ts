import { Component, inject, OnInit } from '@angular/core';
import { FormularioCrearProductoComponent } from "./molecules/formulario-crear-producto/formulario-crear-producto.component";
import { ProductosServiceService } from '../../services/productos-service.service';
import { ProveedoresService } from '../../services/proveedores.service';
import { Proveedor } from '../../models/proveedor';

@Component({
  selector: 'app-crear-producto',
  imports: [FormularioCrearProductoComponent],
  templateUrl: './crear-producto.component.html',
  styleUrl: './crear-producto.component.css'
})
export class CrearProductoComponent  implements OnInit{
  productoService = inject(ProductosServiceService);
  proveedorService = inject(ProveedoresService);

  proveedores!:Proveedor[];
  seCreoElProducto:boolean = false

  enviarDatosProveedores(){
    this.proveedorService.getProveedores().subscribe(resultado =>{
      this.proveedores = resultado;
    });
  }

  crearProducto(data:any){
    this.productoService.crearProducto(data).subscribe(
      resultado =>{
        this.seCreoElProducto = true;
        setTimeout(() => {
          this.seCreoElProducto = false
        }, 1000);

      }
    )
  }

  ngOnInit(): void {
      this.enviarDatosProveedores();
  }
}
