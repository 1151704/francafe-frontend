import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoSalidaApi } from './../models/api/producto-salida-api.model';
import { Injectable } from '@angular/core';
import { API_REST } from '../url.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  baseUrl = API_REST + 'producto/';

  constructor(private http: HttpClient) { }

  save(producto: ProductoSalidaApi): Observable<any> {
    return this.http.post(this.baseUrl, producto)
  }

  changeState(codigo: string, estado: boolean): Observable<any> {
    return this.http.post(`${this.baseUrl}enableEdit/${codigo}/${estado}`, {})
  }
  
}
