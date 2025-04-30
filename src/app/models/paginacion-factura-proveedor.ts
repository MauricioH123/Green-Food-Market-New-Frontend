import { FacturaProveedorRequest } from "./factura-proveedor-request";

export interface PaginacionFacturaProveedor {
        current_page: number;
        data:FacturaProveedorRequest[]
        per_page: number;
        last_page: number;
}
