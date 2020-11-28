import Swal from 'sweetalert2';
import { ProductoSalidaApi } from './../../../models/api/producto-salida-api.model';
import { Router } from '@angular/router';
import { ApiService } from './../../../core/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-producto-registrar',
  templateUrl: './modal-producto-registrar.component.html',
  styleUrls: ['./modal-producto-registrar.component.css']
})
export class ModalProductoRegistrarComponent implements OnInit {
  @Input() public producto: any;
  productoForm: FormGroup;
  categorias: any[] = []
  productoNuevo: ProductoSalidaApi;

  @Output() public updateProducto = new EventEmitter();

  @ViewChild("modalClose", { static: false }) modalClose: ElementRef;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {

    this.apiService.datosService.getCategorias().subscribe(
      data => {
        this.categorias = data
      }
    )
    if (this.producto) {
      this.productoForm = this.fb.group({
        nombre: [this.producto.nombre, Validators.required],
        codigo: [this.producto.codigo, Validators.required],
        precio: [this.producto.precio, Validators.required],
        valorIva: [this.producto.valorIva, Validators.required],
        idCategoria: [this.producto.categoria.id, Validators.required],
      });
    } else {
      this.productoForm = this.fb.group({
        nombre: ['', Validators.required],
        codigo: ['', Validators.required],
        precio: ['0', Validators.required],
        valorIva: ['0', Validators.required],
        idCategoria: [null, Validators.required],
      });
    }
  }

  hideModal() {
    this.modalClose.nativeElement.click();
  }

  onSubmit() {
    this.productoNuevo = Object.assign({}, this.productoForm.value)

    if (this.producto) {
      this.productoNuevo.id = this.producto.id
      this.productoNuevo.enable = this.producto.enable
    } else {
      this.productoNuevo.enable = true
    }
    this.apiService.productoService.save(this.productoNuevo).subscribe(
      data => {
        Swal.fire({
          title: "Registro exitoso",
          text: "El producto ha sido registrado "
        })
        this.updateProducto.emit(data);
        this.hideModal()
      }, error => {
        console.log(error)
        this.apiService.notifService.error('Error', error)
      }
    )
  }

}
