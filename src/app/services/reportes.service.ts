import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  baseUrl = API_REST + 'reportes/';

  constructor(private http: HttpClient) { }
  
  public consolidadoFacturas(fechaInicio: string, fechaFinal: string) {
    return this.http.get(`${this.baseUrl}contabilidad/${fechaInicio}/${fechaFinal}?format=pdf`, { responseType: "blob" });
  }
}
