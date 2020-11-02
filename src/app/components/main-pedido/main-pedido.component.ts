import { MainFinalizarPedidoComponent } from './../main-finalizar-pedido/main-finalizar-pedido.component';
import { DetallePedido } from './../../models/api/detalle-pedido.api';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-pedido',
  templateUrl: './main-pedido.component.html',
  styleUrls: ['./main-pedido.component.css']
})
export class MainPedidoComponent implements OnInit {

  detalles: DetallePedido[] = []

  valorNeto = 0;
  valorIva = 0;
  valorTotal = 0;  
    
  @ViewChild("finalizarPedido", { static: true }) finalizarPedido: MainFinalizarPedidoComponent;

  constructor() {
    this.finalizarPedido

   }

  ngOnInit(): void {
  }

  agregarProducto({ producto, cantidad }) {

    var indexDetalle = this.detalles.map(e => {
      return e.producto.id
    }).indexOf(producto.id);

    if (indexDetalle != -1) {

      this.detalles[indexDetalle].cantidad += cantidad;
      this.detalles[indexDetalle].valorTotal += producto.precio * cantidad

    } else {

      let detalle = new DetallePedido();

      detalle.producto = producto;
      detalle.cantidad = cantidad;
      detalle.valorTotal = producto.precio * cantidad

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

}
