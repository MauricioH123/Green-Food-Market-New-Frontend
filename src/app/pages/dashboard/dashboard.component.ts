import { Component, inject, OnInit } from '@angular/core';
import { GraficaLinealComponent } from "./molecules/grafica-lineal/grafica-lineal.component";
import { FacturaServiceService } from '../../services/factura-service.service';
import { ProductosServiceService } from '../../services/productos-service.service';
import { GraficaBarrasComponent } from "./molecules/grafica-barras/grafica-barras.component";

@Component({
  selector: 'app-dashboard',
  imports: [GraficaLinealComponent, GraficaBarrasComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  facturaService = inject(FacturaServiceService);
  productoService = inject(ProductosServiceService);

  totalFacturas: number[] = [];
  fechaFacturas: string[] = [];

  totalProductos: number[] = [];
  nombresProductos: string[] = [];


  obtenerValores(){
    this.facturaService.listarFacturaTotal().subscribe(data =>{
      this.crearArrayTotalFactura(data);
      this.crearArryFechasFacturas(data);
    })
  }


  crearArrayTotalFactura(data:any){
    for (let i = 0; i < data.length; i++) {
      this.totalFacturas[i] = parseFloat(data[i].total)/100;
    }
  }

  crearArryFechasFacturas(data:any){
    for (let i = 0; i < data.length; i++) {
      this.fechaFacturas[i] = data[i].mes_anio;
    }
  }

  obtenerValoresProductos(){
    this.productoService.getProductosSumatoria().subscribe(
      data =>{
        this.crearArryTotalProductos(data);
        this.crearArryNombreProductos(data);
      }
    )
  }

  crearArryTotalProductos(data:any){
    for (let i = 0; i < data.length; i++) {
      this.nombresProductos[i] = data[i].nombre_producto;
    }
  }

  crearArryNombreProductos(data:any){
    for (let i = 0; i < data.length; i++) {
      this.totalProductos[i] = data[i].total_vendido;
    }
  }

  ngOnInit(): void {
      this.obtenerValores();
      this.obtenerValoresProductos();
  }
}
