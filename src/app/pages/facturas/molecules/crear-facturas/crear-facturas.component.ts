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


  facturaForm = new FormGroup({
    cliente: new FormControl(''),
  });

  enviarNombreCliente(){
    this.facturaForm.get("cliente")?.valueChanges.subscribe(valor => {
      this.ValoresInputNombre.emit( valor?.toLowerCase() || "");
    })
  }  

  ngOnInit(): void{
    this.enviarNombreCliente();
  }
}