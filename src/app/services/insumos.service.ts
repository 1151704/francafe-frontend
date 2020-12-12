import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InsumosService {

  baseUrl = API_REST + 'insumo/';

  constructor(private http: HttpClient) { }

  saveLoteInsumos(file: File, fechaIngreso: string): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    formdata.append('fechaIngreso', fechaIngreso);

    const req = new HttpRequest('POST', `${this.baseUrl}cargaMasivaInsumos`, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  public excelInsumos() {
    return this.http.get(`${this.baseUrl}generarInsumos`, { responseType: "blob" });
  }

}
