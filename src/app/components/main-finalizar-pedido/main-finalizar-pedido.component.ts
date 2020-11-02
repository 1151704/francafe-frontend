import { ClienteApi } from './../../models/api/cliente-api';
import { ApiService } from './../../core/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-finalizar-pedido',
  templateUrl: './main-finalizar-pedido.component.html',
  styleUrls: ['./main-finalizar-pedido.component.css']
})
export class MainFinalizarPedidoComponent implements OnInit {

  cliente: any = null

  tiposId: any[] = []
  sexos: any[] = []
  formasPago: any[] = []

  tipoId: any = null;
  sexo: any = null;
  formaPago: any = null;

  nombres = ''
  apellidos = ''
  telefono = ''
  identificacion = ''

  @Output() public finalizarCompra = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.datosService.getTiposId().subscribe(datos => {
      this.tiposId = datos
      for (const tipo of this.tiposId) {
        if (tipo.tipo == 'CC') {
          this.tipoId = tipo
        }
      }
    })

    this.apiService.datosService.getSexos().subscribe(datos => {
      this.sexos = datos
      this.sexo = this.sexos[0]
    })

    this.apiService.datosService.getFormasPago().subscribe(datos => {
      this.formasPago = datos
      this.formaPago = this.formasPago[0]
    })
  }

  busquedaCliente() {
    this.apiService.datosService.buscarCliente(this.identificacion).subscribe(
      data => {
        if (data && data.id) {
          this.cliente = data

          this.nombres = data.nombres
          this.apellidos = data.apellidos
          this.telefono = data.telefono

          for (const tipo of this.tiposId) {
            if (tipo.tipo == data.tipoId.tipo) {
              this.tipoId = tipo
            }
          }
          for (const sexo of this.sexos) {
            if (sexo.id == data.sexo.id) {
              this.sexo = sexo
            }
          }
        }
      }
    )
  }

  enviarPedido() {

    let mensaje = null;

    if (this.identificacion.length == 0 || 
      this.nombres.length == 0 || 
      this.apellidos.length == 0) {
      mensaje = 'Debe ingresar los datos del cliente'
    }

    if (mensaje == null) {

      let cliente = new ClienteApi();
      cliente.identificacion = this.identificacion
      cliente.nombres = this.nombres
      cliente.apellidos = this.apellidos 
      cliente.idSexo = this.sexo.id
      cliente.idTipo = this.tipoId.id
      cliente.telefono = this.telefono

      this.finalizarCompra.emit({cliente, 'idFormaPago': this.formaPago.id})
    } else {
      alert(mensaje)
    }

  }

}
