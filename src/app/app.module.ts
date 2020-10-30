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
    MainPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
