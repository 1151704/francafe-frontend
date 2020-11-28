import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ApiService } from './../../core/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-main-reportes',
  templateUrl: './main-reportes.component.html',
  styleUrls: ['./main-reportes.component.css']
})
export class MainReportesComponent implements OnInit {

  now = moment();
  reporteForm: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    let fecha = this.now.format('YYYY-MM-DD');
    this.reporteForm = this.fb.group({
      fechaInicial: [fecha, Validators.required],
      fechaFinal: [fecha, Validators.required],
    });
  }

  onSubmit() {
    Swal.fire({
      title: "Generando reporte",
      allowOutsideClick: false,
      onBeforeOpen: () => Swal.showLoading()
    });

    let { fechaInicial, fechaFinal } = this.reporteForm.value;

    this.apiService.reportesService.consolidadoFacturas(fechaInicial, fechaFinal).subscribe(
      response => {
        this.apiService.utilService.downloadFile(
          response,
          "ReporteContabilidad_" + fechaInicial + "_" + fechaFinal,
          "pdf"
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

}
