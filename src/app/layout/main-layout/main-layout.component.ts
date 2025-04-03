import { Component } from '@angular/core';
import { FooterComponent } from './molecules/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [FooterComponent,],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
