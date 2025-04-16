import { DetalleProductoProveedor } from "./detalle-producto-proveedor";

export interface FacturaProveedor {
    proveedor_id: number,
    fecha_entrada: string,
    productos:DetalleProductoProveedor[],
}
