import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { FooterComponent } from './molecules/footer/footer.component';

@Component({
  selector: 'app-main-layout',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent {

}
