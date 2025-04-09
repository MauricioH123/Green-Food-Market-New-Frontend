import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'
import { Clientes } from '../../../../models/clientes';

@Component({
  selector: 'app-crear-facturas',
  imports: [ReactiveFormsModule],
  templateUrl: './crear-facturas.component.html',
  styleUrl: './crear-facturas.component.css'
})
export class CrearFacturasComponent implements OnInit {

  @Output() ValoresInputNombre = new EventEmitter<any>();
  @Input() clientes!:Clientes[];
  @Output() clienteSeleccionado = new EventEmitter<number>();


  facturaForm = new FormGroup({
    cliente: new FormControl(''),
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
}