import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { SiderbarComponent } from './layout/main-layout/molecules/siderbar/siderbar.component';
import { authGuard, loginGuard } from './guards/auth.guard';

export const routes: Routes = [
    {path:'', title:'Login', component: LoginComponent, canActivate:[loginGuard] },
    {path:'homes', title:'home', component: SiderbarComponent, canActivate: [authGuard] }

];
