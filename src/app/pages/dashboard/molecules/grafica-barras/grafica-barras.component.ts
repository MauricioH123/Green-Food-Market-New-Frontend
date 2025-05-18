import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexTitleSubtitle,
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-grafica-barras',
  imports: [ChartComponent],
  templateUrl: './grafica-barras.component.html',
  styleUrl: './grafica-barras.component.css'
})
export class GraficaBarrasComponent  implements OnChanges{
  @Input() nombresProductos: string[] = [];
  @Input() cantidadProductos: number[] = [];

  public chartOptions!: Partial<ChartOptions>;

  datosDeGrafica():void{
     this.chartOptions = {
      series: [
        {
          name: "distibuted",
          data: this.cantidadProductos
        }
      ],
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function(chart, w, e) {
          }
        }
      },      title: {
        text: "Cantidad de unidades vendidas por productos",
        align: "left"
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: this.nombresProductos,
        labels: {
          style: {
            colors: [
              "#008FFB",
              "#00E396",
              "#FEB019",
              "#FF4560",
              "#775DD0",
              "#546E7A",
              "#26a69a",
              "#D10CE8"
            ],
            fontSize: "12px"
          }
        }
      }
    };

  }

  
  ngOnChanges(changes: SimpleChanges): void {
       if(changes['cantidadProductos'].currentValue && changes['nombresProductos'].currentValue){
          this.datosDeGrafica();
        }
  }
}
