import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SaludoComponent } from '../home/saludo/saludo.component';


const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'contacts', component: ContactoComponent },
      { path: 'saludo', component: SaludoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
