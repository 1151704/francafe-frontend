import { ApiService } from './../../core/api.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-buscar-producto',
  templateUrl: './main-buscar-producto.component.html',
  styleUrls: ['./main-buscar-producto.component.css']
})
export class MainBuscarProductoComponent implements OnInit {

  categorias: any[] = []
  categoria: any
  busqueda: string = ''
  productos: any[] = []

  cantidad = 1;

  @Output() public nuevoProducto = new EventEmitter();

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.datosService.getCategorias().subscribe(datos => {
      this.categorias = datos
      if (this.categorias.length>0) {
        this.categoria = this.categorias[0]
      }
    })
  }

  busquedaProducto(datos: any) {
    this.productos = []
    this.apiService.datosService.getProductos(this.busqueda, this.categoria ? this.categoria.id:0).subscribe(
      data => {
        this.productos = data
      }
    )
  }

  seleccionar(producto: any) {
    if (this.cantidad <= 0) {
      alert('Ingrese una cantidad valida')
      return;
    }

    this.nuevoProducto.emit({producto, 'cantidad': this.cantidad})

    this.productos = []
    this.cantidad = 1
    this.busqueda = ''
  }

}
