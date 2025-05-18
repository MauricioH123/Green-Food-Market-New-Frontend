import { Component, inject, OnInit } from '@angular/core';
import { GraficaLinealComponent } from "./molecules/grafica-lineal/grafica-lineal.component";
import { FacturaServiceService } from '../../services/factura-service.service';

@Component({
  selector: 'app-dashboard',
  imports: [GraficaLinealComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  facturaService = inject(FacturaServiceService);
  totalFacturas: number[] = [];
  fechaFacturas: string[] = [];


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

  ngOnInit(): void {
      this.obtenerValores();
  }
}
