import { ApiService } from './../../../core/api.service';
import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal-insumos-registrar',
  templateUrl: './modal-insumos-registrar.component.html',
  styleUrls: ['./modal-insumos-registrar.component.css']
})
export class ModalInsumosRegistrarComponent implements OnInit {
  @Output() updateInsumos = new EventEmitter();

  @ViewChild("modalClose", { static: false }) modalClose: ElementRef;
  
  now = moment();

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  nameFile: string = null;

  fechaIngreso = this.now.format('YYYY-MM-DD')

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

  }

  hideModal() {
    this.modalClose.nativeElement.click();
  }

  handleFileInput(event: any) {
    this.selectedFiles = event.target.files;
    this.nameFile = this.selectedFiles.item(0).name;
    this.currentFileUpload = null;
    this.progress.percentage = 0;
  }

  onSubmit() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);

    this.apiService.insumosService
      .saveLoteInsumos(this.currentFileUpload, this.fechaIngreso)
      .subscribe(
        event => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress.percentage = Math.round(
              (100 * event.loaded) / event.total
            );
          } else if (event instanceof HttpResponse) {
            if (event.ok) {
              this.currentFileUpload = null;
              this.progress.percentage = 0;
              this.apiService.notifService.success(
                "Hecho",
                "Se ha realizado la importación con exito"
              );
              this.hideModal()
              this.actualizarSuministros();
            } else {
              this.apiService.notifService.error("Error", event);
            }
          }
        },
        error => {
          console.error(error);
        }
      );
  }

  actualizarSuministros(){
    this.updateInsumos.emit(undefined);
  }

}
