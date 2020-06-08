import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { BuscarMockComponent } from './buscar-mock/buscar-mock.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LibrosComponent, BuscarMockComponent],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ]
})
export class LibrosModule { }
