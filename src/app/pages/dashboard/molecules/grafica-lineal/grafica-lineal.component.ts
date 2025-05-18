import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafica-lineal',
  imports: [ChartComponent,],
  templateUrl: './grafica-lineal.component.html',
  styleUrl: './grafica-lineal.component.css'
})
export class GraficaLinealComponent implements OnChanges{

  @Input() totalesFactura:number[] = [];
  @Input() fechasFactura:string[] = [];

  public chartOptions!: Partial<ChartOptions>;
  

  datosDeGrafica():void{
    this.chartOptions = {
      series: [
        {
          name: "ventas",
          data: this.totalesFactura
        }
      ],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Ventas Mensuales",
        align: "left"
      },grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: this.fechasFactura

      }
    };
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(changes['totalesFactura'].currentValue && changes['fechasFactura'].currentValue){
          this.datosDeGrafica();
        }
    }
}

