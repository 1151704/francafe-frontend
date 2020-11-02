import { FacturacionService } from './../services/facturacion.service';
import { DatosService } from './../services/datos.service';
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
  datosService: DatosService;
  facturacionService: FacturacionService;

  constructor(private http: HttpClient, public notifService: NotificacionService, public utilService: UtilsService) {

    this.usuariosService = new UsuariosService(http)
    this.datosService = new DatosService(http)
    this.facturacionService = new FacturacionService(http)
    
  }

}
