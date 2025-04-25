import { FacturaCliente } from "./factura-cliente";
import { TotalFactura } from "./total-factura";

export interface DetallePagos {
    id:number,
    estado: number,
    nombre: string
    total:number
}
