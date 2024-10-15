import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headers: string[] = [
    'assets/imgs/header01.jpg',
    'assets/imgs/header02.jpg',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
