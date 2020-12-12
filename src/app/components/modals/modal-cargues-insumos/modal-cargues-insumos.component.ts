import { ApiService } from './../../../core/api.service';
import { Insumo } from './../../../models/api/insumo-api.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-cargues-insumos',
  templateUrl: './modal-cargues-insumos.component.html',
  styleUrls: ['./modal-cargues-insumos.component.css']
})
export class ModalCarguesInsumosComponent implements OnInit {
  @Input() public insumo: Insumo;

  cargues: any[] = []

  cantidadTotal = 0

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.cantidadTotal = 0
    if (this.insumo) {
      this.apiService.datosService.getCarguesInsumos(this.insumo.id).subscribe(
        data => {
          this.cargues = data
          this.cargues.forEach((value) => {
            this.cantidadTotal += value.valorTotal
          })
        }
      )
    }
  }

}
