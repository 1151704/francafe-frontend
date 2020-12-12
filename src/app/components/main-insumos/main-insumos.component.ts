import { ModalCarguesInsumosComponent } from './../modals/modal-cargues-insumos/modal-cargues-insumos.component';
import { ApiService } from './../../core/api.service';
import { Router } from '@angular/router';
import { TokenStorageService } from './../../auth/token-storage.service';
import { ModalInsumosRegistrarComponent } from './../modals/modal-insumos-registrar/modal-insumos-registrar.component';
import { Insumo } from './../../models/api/insumo-api.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-main-insumos',
  templateUrl: './main-insumos.component.html',
  styleUrls: ['./main-insumos.component.css']
})
export class MainInsumosComponent implements OnInit {

  productos: Insumo[] = [];
   
  @ViewChild("modalInsumoRegistrar", { static: true }) modalInsumoRegistrar: ModalInsumosRegistrarComponent;
   
  @ViewChild("modalInsumoCargues", { static: true }) modalInsumoCargues: ModalCarguesInsumosComponent;

  @ViewChild("showModalProducto", { static: false })
  showModalProducto: ElementRef;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.apiService.datosService.getInsumos()
      .subscribe(data => {
        this.productos = [];
        if (data) {
          this.productos = data;
        }
      });
  }

  updateInsumos(event) {
    this.ngOnInit()
  }

  carguesInsumos(insumo) {
    this.modalInsumoCargues.insumo = insumo
    this.modalInsumoCargues.ngOnInit()
  }

  generarInsumos() {
    Swal.fire({
      title: "Descargando insumos",
      allowOutsideClick: false,
      onBeforeOpen: () => Swal.showLoading()
    });
    this.apiService.insumosService.excelInsumos().subscribe(
      response => {
        this.apiService.utilService.downloadFile(
          response,
          "Insumos",
          "xlsx"
        );
        Swal.close();
      },
      error => {
        console.log(error);
        this.apiService.notifService.error("Error", error);
        Swal.close();
      }
    );
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
