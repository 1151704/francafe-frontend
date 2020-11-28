import { ModalProductoRegistrarComponent } from './../modals/modal-producto-registrar/modal-producto-registrar.component';
import { ApiService } from './../../core/api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../auth/token-storage.service';
import { Producto } from './../../models/api/producto.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-productos',
  templateUrl: './main-productos.component.html',
  styleUrls: ['./main-productos.component.css']
})
export class MainProductosComponent implements OnInit {

  productos: Producto[] = [];
   
  @ViewChild("modalProductoRegistrar", { static: true }) modalProductoRegistrar: ModalProductoRegistrarComponent;

  @ViewChild("showModalProducto", { static: false })
  showModalProducto: ElementRef;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.apiService.datosService.getProductosCategoria(null)
      .subscribe(data => {
        this.productos = [];
        if (data) {
          this.productos = data;
        }
      });
  }


  editProducto(usuario: Producto) {

    this.apiService.productoService.changeState(usuario.codigo, !usuario.enable)
      .subscribe(data => {        
        var indexProducto = this.productos.map(e => {
          return e.id
        }).indexOf(data.id);
        
        if (indexProducto != -1) {
          this.productos[indexProducto] = data
        }
      }, error => {
        console.error(error)
        this.apiService.notifService.error('Error', error);
      })

  }

  updateProducto(usuario: Producto) {
    var indexProducto = this.productos.map(e => {
      return e.id
    }).indexOf(usuario.id);

    if (indexProducto == -1) {
      this.productos.push(usuario)
    } else {
      this.productos[indexProducto] = usuario
    }
  }

  modificarProducto(producto: Producto) {
    this.modalProductoRegistrar.producto = producto;
    this.showModalProducto.nativeElement.click();
    this.modalProductoRegistrar.ngOnInit();
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
