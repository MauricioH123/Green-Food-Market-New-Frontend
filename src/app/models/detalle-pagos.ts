import { FacturaCliente } from "./factura-cliente";

export interface DetallePagos {
    id:number,
    factura_id: number,
    estado: number,
    factura: FacturaCliente[]
}
