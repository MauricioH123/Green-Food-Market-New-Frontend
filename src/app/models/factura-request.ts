import { DetalleProducto } from "./detalle-producto";

export interface FacturaRequest {
    cliente_id: number,
    fecha: string,
    producto: DetalleProducto[],
    tipo_pago_id: number,

}
