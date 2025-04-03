import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../../services/auth-service.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    authService = inject(AuthServiceService);
  
    cerrarSesion(){
      return this.authService.logout()
    }

}
