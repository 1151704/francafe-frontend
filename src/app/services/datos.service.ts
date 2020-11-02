import { API_REST } from './../url.constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  baseUrl = API_REST + 'datos/';

  constructor(private http: HttpClient) { }

  public buscarCliente(identificacion: string) {
    return this.http.get<any>(`${this.baseUrl}cliente/${identificacion}`)
  }

  public getRoles() {
    return this.http.get<any[]>(`${this.baseUrl}roles`)
  }

  public getTiposId() {
    return this.http.get<any[]>(`${this.baseUrl}tiposId`)
  }

  public getSexos() {
    return this.http.get<any[]>(`${this.baseUrl}sexos`)
  }

  public getCategorias() {
    return this.http.get<any[]>(`${this.baseUrl}categorias`)
  }

  public getFormasPago() {
    return this.http.get<any[]>(`${this.baseUrl}formasPago`)
  }

  public getProductos(busqueda: string, idCategoria: number) {
    return this.http.get<any[]>(`${this.baseUrl}productos/${busqueda}/${idCategoria ? idCategoria : '0'}`)
  }

}
