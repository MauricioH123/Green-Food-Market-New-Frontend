import { Component } from '@angular/core';
import { EjemploComponent } from './molecules/ejemplo/ejemplo.component';

@Component({
  selector: 'app-dashboard',
  imports: [EjemploComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
