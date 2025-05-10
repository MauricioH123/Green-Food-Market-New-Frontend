import { Proveedor } from "./proveedor";

export interface PaginacionProveedores {
    current_page: number;
    data: Proveedor[];
    per_page: number;
    last_page: number;
}
