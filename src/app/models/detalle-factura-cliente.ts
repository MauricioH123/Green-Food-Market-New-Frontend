import { Clientes } from "./clientes";
import { DetalleProducto } from "./detalle-producto";

export interface DetalleFacturaCliente {
    id: number,
    cliente_id: number,
    fecha: string,
    cliente:Clientes,
    detalle_factura: DetalleProducto[],
    detalle_pago: any
}
