import { UsuariosService } from './../services/usuarios.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificacionService } from './notificacion.service';
import { UtilsService } from './utils.service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  usuariosService: UsuariosService;

  constructor(private http: HttpClient, public notifService: NotificacionService, public utilService: UtilsService) {

    this.usuariosService = new UsuariosService(http)
    
  }

}
