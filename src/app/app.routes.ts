import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard, loginGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { FacturaProveedoresComponent } from './pages/factura-proveedores/factura-proveedores.component';

export const routes: Routes = [
    {path:'', title:'Login', component: LoginComponent, canActivate:[loginGuard] },
    {path:'homes', title:'Green Food Market', component: MainLayoutComponent, canActivate: [authGuard], children:[
        {path:'', component:DashboardComponent},
        {path:'crearFactura', component:FacturasComponent},
        {path: 'crearFacturaCompra', component:FacturaProveedoresComponent}
    ] },

];
