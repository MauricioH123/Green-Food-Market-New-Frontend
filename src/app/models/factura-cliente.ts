import { Clientes } from "./clientes";

export interface FacturaCliente {
    id: number,
    cliente_id: number,
    cliente: Clientes[]
}
