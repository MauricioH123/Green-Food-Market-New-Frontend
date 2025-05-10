import { Component, inject, OnInit } from '@angular/core';
import { ListarProveedoresComponent } from "./molecules/listar-proveedores/listar-proveedores.component";
import { ProveedoresService } from '../../services/proveedores.service';
import { PaginacionFacturaProveedor } from '../../models/paginacion-factura-proveedor';
import { Proveedor } from '../../models/proveedor';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-proveedor',
  imports: [ListarProveedoresComponent],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css'
})
export class ProveedorComponent implements OnInit {
  proveedorService = inject(ProveedoresService);

  proveedoresPaginados:PaginacionFacturaProveedor = {
    current_page: 1,
    data: [],
    per_page: 1,
    last_page: 1,
  };
  paginaActual = 1;
  paginaSiguiente!:number;
  datosDelProveedorId!:Proveedor;
  seActualizoElProveedor:boolean = false;

  obtenerProveedores(pagina = 1){
    this.proveedorService.getProveedoresPaginados(pagina).subscribe(data =>{
      this.proveedoresPaginados = data
      this.paginaActual = data.current_page;
      this.paginaSiguiente = data.last_page;
    })
  }


  obterDatosDelProveedorId(id: number){
    this.proveedorService.getProveedor(id).subscribe(data=>{
      this.datosDelProveedorId = data;
    });
  }

  actualizarDatosProveedor(data:Proveedor){
    const nombre = {
      nombre_proveedor: data.nombre_proveedor
    }

    this.proveedorService.actualizarProveedor(data.id, nombre).subscribe(
      resultado =>{
        this.seActualizoElProveedor = true;
        setTimeout(() => {
          this.reinicarVariableDeEstado();
        }, 1000);
      }
    )
  }

  reinicarVariableDeEstado(){
    this.seActualizoElProveedor = false
  }

  siguientePagina(pagina: number){
    this.obtenerProveedores(pagina);
  }

  anteriorPagina(pagina: number){
    this.obtenerProveedores(pagina);
  }

  ngOnInit(): void {
      this.obtenerProveedores();
  }

}
