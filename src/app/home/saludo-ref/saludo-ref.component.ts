import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'cas-saludo-ref',
  templateUrl: './saludo-ref.component.html',
  styleUrls: ['./saludo-ref.component.css']
})
export class SaludoRefComponent implements OnInit {

  @ViewChild('refUserName', {static: true}) userName: ElementRef;
  constructor() { }

  ngOnInit(): void {
    console.dir(this.userName.nativeElement);
  }

}
