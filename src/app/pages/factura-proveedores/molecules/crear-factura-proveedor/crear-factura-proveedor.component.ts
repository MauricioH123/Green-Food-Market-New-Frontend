import { Component, Input, Output,EventEmitter, OnInit, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Proveedor } from '../../../../models/proveedor';
import { Producto } from '../../../../models/producto';
import { FacturaProveedor } from '../../../../models/factura-proveedor';
import { DetalleProductoProveedor } from '../../../../models/detalle-producto-proveedor';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-crear-factura-proveedor',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './crear-factura-proveedor.component.html',
  styleUrl: './crear-factura-proveedor.component.css'
})
export class CrearFacturaProveedorComponent implements OnInit, OnChanges{
  @Output() ValoresInputNombre = new EventEmitter<any>();
  @Input() proveedores!: Proveedor[];
  @Output() proveedorSeleccionado = new EventEmitter<number>();
  @Input() proveedor!:Proveedor;
  @Input() productos!:Producto[];
  @Output() factura = new EventEmitter<FacturaProveedor>();

  totalFactura!:number;

  facturaForm = new FormGroup({
    proveedor: new FormControl('', Validators.required),
    productos: new FormArray([
      new FormGroup({
        idProducto: new FormControl(null, Validators.required),
        cantidad: new FormControl(1, [Validators.required, Validators.min(1)]),
        precio: new FormControl(0, [Validators.required, Validators.min(0.01)]),
        total: new FormControl(0, Validators.required),
      })
    ]),
  });

  extraerId(valor: string):number | null{
    const match = valor.match(/ID:(\d+)/);
    return match ? parseInt(match[1]) : null;
  }

  enviarNombreProveedor(){
    this.facturaForm.get("proveedor")?.valueChanges.subscribe(valor => {
      if (valor !== null) {
        const idExtraído = this.extraerId(valor);
  
        if (idExtraído !== null) {
          this.proveedorSeleccionado.emit(idExtraído);
        }
  
        this.ValoresInputNombre.emit(valor.toLowerCase());
      }
    })
  }  

  get productoss():FormArray{
    return this.facturaForm.get('productos') as FormArray;
  }

  agregarProducto(){
    const nuevoProducto = new FormGroup({
      idProducto: new FormControl(null, Validators.required),
      cantidad: new FormControl(1, [Validators.required, Validators.min(1)]),
      precio: new FormControl(0, [Validators.required, Validators.min(0.01)]),
      total: new FormControl(0, Validators.required),
    });
    this.productoss.push(nuevoProducto);
    this.obtenerTotalPorProducto();
  }

  eliminarProducto(index:number){
    this.productoss.removeAt(index);
  }

  enviar():void {
      const datosOriginales = this.facturaForm.value;
  
      if(datosOriginales.proveedor){
        const cliente_id = parseInt(datosOriginales.proveedor.split('ID:')[1]);
        const productosTransformados:DetalleProductoProveedor[] = (datosOriginales.productos?? []).map((p:any)=>({
          producto_id:parseInt(p.idProducto),
          cantidad: parseInt(p.cantidad),
          precio_compra: parseFloat(p.precio)
        }));
    
        const facturaTransformada:FacturaProveedor ={
          proveedor_id: cliente_id,
          fecha_entrada: new Date().toISOString().split('T')[0],
          productos: productosTransformados,
        }
        this.factura.emit(facturaTransformada);
        this.facturaForm.reset();
  
        while(this.productoss.length !== 0){
          this.productoss.removeAt(0);
        }
  
        this.agregarProducto();
      }
      return undefined;
    }

  obtenerTotalPorProducto(){
    this.productoss.controls.forEach((element, index) => {
      let productos = this.productoss.at(index);
    productos.get('cantidad')?.valueChanges.subscribe( cantidad =>{
      let precio = productos.get('precio')?.value;
      productos.get('total')?.setValue(cantidad * precio);
    })

    productos.get('precio')?.valueChanges.subscribe( precio =>{
      let cantidad = productos.get('cantidad')?.value;
      productos.get('total')?.setValue(precio * cantidad);
    })
    });
  }
  
  obtenerTotalFactura(){
    this.productoss?.valueChanges.subscribe(productos => {
      const total = productos.reduce((acc: number, p: any) =>{
        const subtotal = parseFloat(p.total) || 0;
        return acc + subtotal;
      }, 0);
      this.totalFactura = total;
    })
  }

    ngOnInit(): void{
      this.enviarNombreProveedor();
      this.obtenerTotalPorProducto();
      this.obtenerTotalFactura();
    }

    ngOnChanges(changes: SimpleChanges): void {
      if(changes['reiniciar'] && changes['reiniciar'].currentValue === true) {
        this.facturaForm.reset();
      }
    }
}
