import { Usuario } from './../../models/usuario.model';
import { Router } from '@angular/router';
import { ApiService } from './../../core/api.service';
import { TokenStorageService } from './../../auth/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-usuarios',
  templateUrl: './main-usuarios.component.html',
  styleUrls: ['./main-usuarios.component.css']
})
export class MainUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  info: Usuario;

  constructor(private token: TokenStorageService, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.token.validate();
    this.info = this.token.getUser();
    this.apiService.usuariosService.getUsuarios()
      .subscribe(data => {
        this.usuarios = [];
        if (data) {
          this.usuarios = data;
        }
      });
  }


  editUsuario(usuario: Usuario) {

    this.apiService.usuariosService.saveEstado(!usuario.enable, usuario.identificacion)
    .subscribe(data => {
      this.ngOnInit();
    }, error => {
      console.error(error)
      this.apiService.notifService.error('Error', error);
    })

  }

  adminUsuario(usuario: Usuario) {
    localStorage.removeItem("editUsuarioId");
    localStorage.setItem("editUsuarioId", usuario.identificacion);
    this.router.navigate(['/main/usuario-edit']);
  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
