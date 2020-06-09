import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { HomeModule } from '../home/home.module';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuComponent } from './menu/menu.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AboutComponent,
    UsuariosComponent,
    ContactoComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingModule,
    HomeModule,
    NgbModule
  ]
})
export class AboutModule { }
