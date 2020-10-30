import { UsuarioEntradaApi } from './../models/api/usuario-entrada-api.model';
import { Usuario } from './../models/usuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_REST } from './../url.constants';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  baseUrl = API_REST + 'usuario/';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl + 'all');
  }

  getUsuarioByIdentificacion(identificacion: string): Observable<Usuario> {
    return this.http.get<Usuario>(this.baseUrl + 'byUsuario/' + identificacion);
  }

  saveUsuario(usuario: UsuarioEntradaApi): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario);
  }

  updateUsuario(usuario: UsuarioEntradaApi): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl+'update', usuario);
  }

  savePassword(password: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl+'passwordEdit', password);
  }

  saveEstado(enable: boolean, identificacion: string): Observable<boolean> {
    return this.http.post<boolean>(this.baseUrl+'enableEdit/'+identificacion+'/'+enable, {});
  }
}
