import { Rol } from './../../../models/rol.model';
import { Router } from '@angular/router';
import { ApiService } from './../../../core/api.service';
import { TokenStorageService } from './../../../auth/token-storage.service';
import { TIPOS_DOCUMENTOS, ROLES } from './../../../data/datos.constants';
import { JwtResponse } from './../../../auth/jwt-response';
import { Usuario } from './../../../models/usuario.model';
import { TipoIdentificacion } from './../../../models/tipoIdentificacion.model';
import { UsuarioEntradaApi } from './../../../models/api/usuario-entrada-api.model';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-usuario-registrar',
  templateUrl: './modal-usuario-registrar.component.html',
  styleUrls: ['./modal-usuario-registrar.component.css']
})
export class ModalUsuarioRegistrarComponent implements OnInit {

  usuario: Usuario;
  usuarioEdit: Usuario;
  usuarioForm: FormGroup;

  @Output() public updateUsuario = new EventEmitter();

  info: JwtResponse;

  tipos = TIPOS_DOCUMENTOS;

  roles = ROLES;

  rol: Rol;
  tipoId: any;
  
  @ViewChild("modalClose", { static: false }) modalClose: ElementRef;

  constructor(private token: TokenStorageService, private apiService: ApiService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.token.validate();
    this.info = this.token.getInfo();
    this.usuario = new Usuario();

    this.usuarioForm = this.fb.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      email: ['', Validators.required],
      identificacion: ['', Validators.required]
    });
    this.rol = this.roles[0]
    this.tipoId = this.tipos[0]
  }

  showModal() {
    this.ngOnInit();
  }

  hideModal() {
    this.modalClose.nativeElement.click();
  }

  onSubmit() {

    this.usuarioEdit = Object.assign({}, this.usuarioForm.value);

    this.usuarioEdit.tipoId = new TipoIdentificacion();
    this.usuarioEdit.rol = this.rol;
    this.usuarioEdit.tipoId.tipo = this.tipoId.value;

    let usuarioSave = new UsuarioEntradaApi();

    usuarioSave.apellidos = this.usuarioEdit.apellidos;
    usuarioSave.email = this.usuarioEdit.email;
    usuarioSave.enable = true;
    usuarioSave.identificacion = this.usuarioEdit.identificacion;

    usuarioSave.nombres = this.usuarioEdit.nombres;
    usuarioSave.tipoId = this.usuarioEdit.tipoId.tipo;
    usuarioSave.rol = this.rol.rol

    this.apiService.usuariosService.saveUsuario(usuarioSave).subscribe(data => {
      this.apiService.notifService.success('Hecho', 'Se ha registrado los cambios');
      this.updateUsuario.emit(data);
      this.hideModal();
    }, error => {
      console.log(error)
      this.apiService.notifService.error('Error', error);
    });

  }

  public isValido(rol: string) {
    return this.token.isRol(rol);
  }

}
