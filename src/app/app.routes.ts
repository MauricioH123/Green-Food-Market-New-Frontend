import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { authGuard, loginGuard } from './guards/auth.guard';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { FacturaProveedoresComponent } from './pages/factura-proveedores/factura-proveedores.component';
import { VerFacturasVentasComponent } from './pages/ver-facturas-ventas/ver-facturas-ventas.component';
import { VerDetalleFacturaClienteComponent } from './pages/ver-detalle-factura-cliente/ver-detalle-factura-cliente.component';
import { VerFacturasCompraComponent } from './pages/ver-facturas-compra/ver-facturas-compra.component';
import { VerDetalleFacturaComprasComponent } from './pages/ver-detalle-factura-compras/ver-detalle-factura-compras.component';
import { InventarioComponent } from './pages/inventario/inventario.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CrearClienteComponent } from './pages/crear-cliente/crear-cliente.component';

export const routes: Routes = [
    {path:'', title:'Login', component: LoginComponent, canActivate:[loginGuard] },
    {path:'homes', title:'Green Food Market', component: MainLayoutComponent, canActivate: [authGuard], children:[
        {path:'', component:DashboardComponent},
        {path:'crearFactura', component:FacturasComponent},
        {path: 'crearFacturaCompra', component:FacturaProveedoresComponent},
        {path: 'verFacturaCliente', component:VerFacturasVentasComponent},
        {path: 'detalleFacturaCliente/:id', component: VerDetalleFacturaClienteComponent},
        {path: 'verFacturasCompras', component: VerFacturasCompraComponent},
        {path: 'detalleFacturaProveedor/:id', component: VerDetalleFacturaComprasComponent},
        {path: 'inventario', component: InventarioComponent},
        {path: 'cliente', component: ClienteComponent},
        {path: 'crearCliente', component: CrearClienteComponent}
    ] },

];
