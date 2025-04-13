import { DetalleProducto } from "./detalle-producto";

export interface FacturaRequest {
    cliente_id: number,
    fecha: string,
    productos: DetalleProducto[],
    tipo_pago_id: number,

}
