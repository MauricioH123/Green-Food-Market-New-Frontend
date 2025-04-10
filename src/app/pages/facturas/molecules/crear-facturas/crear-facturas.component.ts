import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Clientes } from '../../../../models/clientes';

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


  facturaForm = new FormGroup({
    cliente: new FormControl(''),
    correo: new FormControl(''),
    direccion: new FormControl(''),
    numero: new FormControl(''),
    nombreProducto: new FormControl('')
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
  }
}