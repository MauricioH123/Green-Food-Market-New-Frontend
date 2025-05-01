export interface DetalleFacturaProveedores {
    entrada_id: number,
    fecha_entrada: string,
    nombre_proveedor: string,
    productos: [{
        cantidad: number,
        nombre_producto: string,
        precio_compra: number
    }]
}
