import { Component, inject } from '@angular/core';
import { AuthServiceService } from '../../../../services/auth-service.service';

@Component({
  selector: 'app-siderbar',
  imports: [],
  templateUrl: './siderbar.component.html',
  styleUrl: './siderbar.component.css'
})
export class SiderbarComponent {

  authService = inject(AuthServiceService);

  cerrarSesion(){
    return this.authService.logout()
  }
}
