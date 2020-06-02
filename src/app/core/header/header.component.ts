import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cas-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;
  logo: string;

  constructor() {}

  ngOnInit(): void {
    this.title = 'Curso de Angular';
    this.logo = '../../../assets/angular_logo.svg';
  }

}
