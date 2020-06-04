import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  tarea: string;
  aTareas: Array<string>;
  constructor() {
  }

  ngOnInit(): void {
    this.aTareas = [];
  }

  addTarea() {
    this.aTareas.push(this.tarea);
    this.tarea = '';
    console.log(this.aTareas);
  }

}
