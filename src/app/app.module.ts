import { NotificacionService } from './core/notificacion.service';
import { ApiService } from './core/api.service';
import { TokenInterceptor } from './core/interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainPerfilComponent } from './components/main-perfil/main-perfil.component';
import { ModalUsuarioRegistrarComponent } from './components/modals/modal-usuario-registrar/modal-usuario-registrar.component';
import { MainPedidoComponent } from './components/main-pedido/main-pedido.component';
import { MainBuscarProductoComponent } from './components/main-buscar-producto/main-buscar-producto.component';
import { MainFinalizarPedidoComponent } from './components/main-finalizar-pedido/main-finalizar-pedido.component';
import { MainProductosComponent } from './components/main-productos/main-productos.component';
import { MainReportesComponent } from './components/main-reportes/main-reportes.component';
import { ModalProductoRegistrarComponent } from './components/modals/modal-producto-registrar/modal-producto-registrar.component';
import { NotificationListComponent } from './components/notification-list/notification-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioSignInComponent,
    InicioComponent,
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainMenuComponent,
    MainInicioComponent,
    MainUsuariosComponent,
    MainPerfilComponent,
    ModalUsuarioRegistrarComponent,
    MainPedidoComponent,
    MainBuscarProductoComponent,
    MainFinalizarPedidoComponent,
    MainProductosComponent,
    MainReportesComponent,
    ModalProductoRegistrarComponent,
    NotificationListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [NotificacionService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
