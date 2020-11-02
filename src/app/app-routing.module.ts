import { EjemploComponent } from './components/ejemplo/ejemplo.component';
import { MainPedidoComponent } from './components/main-pedido/main-pedido.component';
import { MainPerfilComponent } from './components/main-perfil/main-perfil.component';
import { MainUsuariosComponent } from './components/main-usuarios/main-usuarios.component';
import { MainInicioComponent } from './components/main-inicio/main-inicio.component';
import { InicioSignInComponent } from './components/inicio-sign-in/inicio-sign-in.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent, children: [
      { path: '', component: InicioSignInComponent },
      { path: 'signin', component: InicioSignInComponent }
    ]
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'ejemplo', component: EjemploComponent },
  {
    path: 'main', component: MainComponent, children: [
      { path: '', component: MainInicioComponent },
      { path: 'usuarios', component: MainUsuariosComponent },
      { path: 'perfil', component: MainPerfilComponent },
      { path: 'pedido', component: MainPedidoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
