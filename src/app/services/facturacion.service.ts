import { PedidoApi } from './../models/api/pedido-api';
import { API_REST } from './../url.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacturacionService {

  baseUrl = API_REST + 'factura/';

  constructor(private http: HttpClient) { }

  public guardarFactura(pedido: PedidoApi) {
    return this.http.post<any>(`${this.baseUrl}`, pedido)
  }

}
