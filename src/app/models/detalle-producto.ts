export interface DetalleProducto {
    producto_id:number,
    cantidad: number,
    precio_unitario: number,
    producto?:{
        id: number,
        nombre_producto: string
    }
}
