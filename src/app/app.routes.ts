import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard, loginGuard } from './guards/auth.guard';
import { NavbarComponent } from './layout/main-layout/molecules/navbar/navbar.component';

export const routes: Routes = [
    {path:'', title:'Login', component: LoginComponent, canActivate:[loginGuard] },
    {path:'homes', title:'home', component: NavbarComponent, canActivate: [authGuard] },

];
