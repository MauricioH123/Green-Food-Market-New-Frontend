import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl, FormArray, Validators} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Clientes } from '../../../../models/clientes';
import { Producto } from '../../../../models/producto';
import { Pagos } from '../../../../models/pagos';
import { FacturaRequest } from '../../../../models/factura-request';
import { DetalleProducto } from '../../../../models/detalle-producto';

@Component({
  selector: 'app-crear-facturas',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-facturas.component.html',
  styleUrl: './crear-facturas.component.css'
})
export class CrearFacturasComponent implements OnInit, OnChanges {

  @Output() ValoresInputNombre = new EventEmitter<any>();
  @Input() clientes!:Clientes[];
  @Output() clienteSeleccionado = new EventEmitter<number>();
  @Input() cliente!:Clientes;
  @Input() productos!:Producto[];
  @Input() Pagos!:Pagos[];
  @Output() factura = new EventEmitter<FacturaRequest>();


  facturaForm = new FormGroup({
    cliente: new FormControl('', Validators.required),
    correo: new FormControl('', [Validators.required, Validators.email]),
    direccion: new FormControl('', Validators.required),
    numero: new FormControl('', Validators.required),
    productos: new FormArray([
      new FormGroup({
        idProducto: new FormControl(null, Validators.required),
        cantidad: new FormControl(1, [Validators.required, Validators.min(1)]),
        precio: new FormControl(0, [Validators.required, Validators.min(0.01)]),
      })
    ]),
    tipo_pago_id: new FormControl('',[Validators.required]),
  });

  extraerId(valor: string):number | null{
    const match = valor.match(/ID:(\d+)/);
    return match ? parseInt(match[1]) : null;
  }

  enviarNombreCliente(){
    this.facturaForm.get("cliente")?.valueChanges.subscribe(valor => {
      if (valor !== null) {
        const idExtraído = this.extraerId(valor);
  
        if (idExtraído !== null) {
          this.clienteSeleccionado.emit(idExtraído);
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
    });
    this.productoss.push(nuevoProducto);
  }

  eliminarProducto(index:number){
    this.productoss.removeAt(index);
  }

  enviar():void {
    const datosOriginales = this.facturaForm.value;

    if(datosOriginales.cliente && datosOriginales.tipo_pago_id){
      const cliente_id = parseInt(datosOriginales.cliente.split('ID:')[1]);
      const productosTransformados:DetalleProducto[] = (datosOriginales.productos?? []).map((p:any)=>({
        producto_id:parseInt(p.idProducto),
        cantidad: parseInt(p.cantidad),
        precio_unitario: parseFloat(p.precio)
      }));
  
      const facturaTransformada:FacturaRequest ={
        cliente_id: cliente_id,
        fecha: new Date().toISOString().split('T')[0],
        productos: productosTransformados,
        tipo_pago_id: parseInt(datosOriginales.tipo_pago_id)
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




  ngOnInit(): void{
    this.enviarNombreCliente();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['cliente'] && changes['cliente'].currentValue){
        const clienteActual = changes['cliente'].currentValue as Clientes;

        this.facturaForm.patchValue({
          correo: clienteActual.correo,
          direccion:clienteActual.direccion,
          numero: clienteActual.celular
        })
      }

      if(changes['reiniciar'] && changes['reiniciar'].currentValue === true) {
        this.facturaForm.reset();
      }
  }


}