export interface Producto {
    id?:number,
    proveedor_id: number,
    nombre_producto: string,
    precio_venta?: bigint
}
