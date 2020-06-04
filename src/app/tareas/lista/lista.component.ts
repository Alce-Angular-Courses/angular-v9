import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  aTareas: Array<Tarea>;
  nueva: Tarea;
  constructor() { }

  ngOnInit(): void {
    this.aTareas = [];
    this.nueva = new Tarea();
  }

  addTareas(tarea: Tarea) {
    this.aTareas.push(tarea);
    console.log(this.aTareas);
  }

  delete() {}

}
