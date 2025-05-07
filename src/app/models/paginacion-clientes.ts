import { Clientes } from "./clientes";

export interface PaginacionClientes {
    current_page: number;
    data: Clientes[];
    per_page: number;
    last_page: number;
}
