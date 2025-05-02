import { ProductosInventario } from "./productos-inventario";

export interface PaginacioProductosInventario {
    current_page: number;
    data: ProductosInventario[];
    per_page: number;
    last_page: number;
}
