import { DetallePagos } from "./detalle-pagos";

export interface PaginacionDetallePagos {
    current_page: number;
    data: DetallePagos[];
    total: number;
    per_page: number;
    last_page: number;
}
