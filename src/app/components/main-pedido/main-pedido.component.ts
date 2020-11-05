import { MainFinalizarPedidoComponent } from './../main-finalizar-pedido/main-finalizar-pedido.component';
import { ApiService } from './../../core/api.service';
import { PedidoApi } from './../../models/api/pedido-api';
import { DetallePedidoApi } from '../../models/api/detalle-pedido-api';
import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-pedido',
  templateUrl: './main-pedido.component.html',
  styleUrls: ['./main-pedido.component.css']
})
export class MainPedidoComponent implements OnInit {

  detalles: DetallePedidoApi[] = []

  valorNeto = 0;
  valorIva = 0;
  valorTotal = 0;

  @ViewChild("mainFinalizarPedido", { static: true })
  mainFinalizarPedido: MainFinalizarPedidoComponent;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.detalles= []

    this.valorNeto = 0;
    this.valorIva = 0;
    this.valorTotal = 0;
    this.mainFinalizarPedido.ngOnInit()
  }

  agregarProducto({ producto, cantidad }) {

    var indexDetalle = this.detalles.map(e => {
      return e.idProducto
    }).indexOf(producto.id);

    if (indexDetalle != -1) {

      this.detalles[indexDetalle].cantidad += cantidad;
      this.detalles[indexDetalle].valorTotal += producto.precio * cantidad

    } else {

      let detalle = new DetallePedidoApi();

      detalle.producto = producto;
      detalle.cantidad = cantidad;
      detalle.valorTotal = producto.precio * cantidad
      detalle.idProducto = producto.id

      this.detalles.push(detalle)
    }

    this.valorNeto += (producto.precio * cantidad)
    this.valorIva += (producto.valorIva * cantidad)
    this.valorTotal = this.valorNeto + this.valorIva
  }

  eliminarDetalle(detalle: any) {


    this.valorNeto -= (detalle.producto.precio * detalle.cantidad)
    this.valorIva -= (detalle.producto.valorIva * detalle.cantidad)
    this.valorTotal = this.valorNeto + this.valorIva

    var indexDetalle = this.detalles.map(e => {
      return e.producto.id
    }).indexOf(detalle.producto.id);

    this.detalles.splice(indexDetalle, 1)

  }

  finalizarCompra({cliente, idFormaPago}) {

    if (this.detalles.length == 0) {
      alert('No puede finalizar la compra sin ningún producto agregado')
    }

    let pedido = new PedidoApi();

    pedido.detalles = this.detalles
    pedido.cliente = cliente
    pedido.valorIva = this.valorIva
    pedido.valorTotal = this.valorTotal
    pedido.valorNeto = this.valorNeto
    pedido.idFormaPago = idFormaPago

    this.apiService.facturacionService.guardarFactura(pedido).subscribe(
      data => {
        Swal.fire('Factura realizada', `La factura ha sido registrada con el número ${data.codigo}`, 'success');
        this.ngOnInit()
      }, 
      error => {
        this.apiService.notifService.error("Error", error);
        console.error(error);
      }
    )

  }

}
