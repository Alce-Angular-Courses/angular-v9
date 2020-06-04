import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'cas-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Input() index: number;
  @Output() checkChanged: EventEmitter<number>;
  @Output() clickDeleted: EventEmitter<number>;

  constructor() {
    this.checkChanged = new EventEmitter();
    this.clickDeleted = new EventEmitter();
  }

  ngOnInit(): void {
    this.tarea = {...this.tarea };
  }

  sendCheckChnage() {
    this.checkChanged.next(this.index - 1);
  }

  sendDeleteClick() {
    this.clickDeleted.next(this.index - 1);
  }
}
