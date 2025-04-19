import { Component, inject, OnInit } from '@angular/core';
import { CrearFacturaProveedorComponent } from "./molecules/crear-factura-proveedor/crear-factura-proveedor.component";
import { ProveedoresService } from '../../services/proveedores.service';
import { FacturaProveedorServiceService } from '../../services/factura-proveedor-service.service';
import { ProductosServiceService } from '../../services/productos-service.service';
import { Proveedor } from '../../models/proveedor';
import { Producto } from '../../models/producto';
import { FacturaProveedor } from '../../models/factura-proveedor';

@Component({
  selector: 'app-factura-proveedores',
  imports: [CrearFacturaProveedorComponent],
  templateUrl: './factura-proveedores.component.html',
  styleUrl: './factura-proveedores.component.css'
})
export class FacturaProveedoresComponent implements OnInit {
  proveedorService = inject(ProveedoresService);
  facturaProveedorService = inject(FacturaProveedorServiceService);
  productosService = inject(ProductosServiceService);
  
  proveedores:Proveedor[] = [];
  proveedorRelacionados!:Proveedor[];
  idProveedor!:number;
  proveedor!:Proveedor;
  productosList: Producto[] = [];
  formatearFormulario = false;

  mostrarProveedor(){
    this.proveedorService.getProveedores().subscribe((data:Proveedor[]) => {
      this.proveedores = data;
    });
  }

  relacionProveedor(nomrbe:string){
    this.proveedorRelacionados = this.proveedores.filter(proveedor => proveedor.nombre_proveedor.toLowerCase().includes(nomrbe))
  }

  asiganrIdProveedor(id:number){
    this.idProveedor = id;
    const proveedorEncontrado = this.proveedores.find(proveedor => proveedor.id === this.idProveedor)
    if(proveedorEncontrado){
      this.proveedor = proveedorEncontrado;
    }
  }

  productos(){
    this.productosService.getProductos().subscribe((productos:Producto[])=>{
      this.productosList = productos
      // console.log(this.productosList)
    });
  }

    enviarFactura(factura:FacturaProveedor){
      this.facturaProveedorService.crearFacturaProveedor(factura).subscribe({
        next: (response) =>{
          this.formatearFormulario = true
          setTimeout(() => this.formatearFormulario = false, 500);
        },
        error:(err) =>{
          alert('❌ Hubo un error al enviar la factura');
          this.formatearFormulario = false
          console.log(err);
        }
      }
  
  
      )
    }

    ngOnInit(): void {
        this.mostrarProveedor();
        this.productos();
        

    }
}
