import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { SiderbarComponent } from './layout/siderbar/siderbar.component';
import { LoginComponent } from "./pages/auth/login/login.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Green-Food-Market-New-Frontend';
}
