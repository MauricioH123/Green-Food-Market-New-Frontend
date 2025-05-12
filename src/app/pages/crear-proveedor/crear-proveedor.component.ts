import { Component, inject } from '@angular/core';
import { FormularioCrearProveedorComponent } from "./molecules/formulario-crear-proveedor/formulario-crear-proveedor.component";
import { ProveedoresService } from '../../services/proveedores.service';

@Component({
  selector: 'app-crear-proveedor',
  imports: [FormularioCrearProveedorComponent],
  templateUrl: './crear-proveedor.component.html',
  styleUrl: './crear-proveedor.component.css'
})
export class CrearProveedorComponent {

  proveedorService = inject(ProveedoresService);
  seEnvioElFormulario:boolean = false;


  crearProveedores(nombre:string){
    const data = {
      nombre_proveedor: nombre
    }
    this.proveedorService.crearProveedor(data).subscribe({
      next: respuesta=>{
        this.confirmacionDeEnvio();
      },
      error: error=>{
        console.log(error);
      }
    })
  }

  confirmacionDeEnvio(){
    this.seEnvioElFormulario = true;

    setTimeout(()=>{
      this.seEnvioElFormulario = false
    }, 1000);
  }
}
