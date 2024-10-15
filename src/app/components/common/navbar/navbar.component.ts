import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  menu: {
    route: string;
    text: string;
    dropdown?: {
      route: string;
      text: string;
    }[]
  }[] = [
    {
      route: '',
      text: 'Información'
    },
    {
      route: 'descargas',
      text: 'Descargas'
    },
    {
      route: '',
      text: 'Panel',
      dropdown: [
        {
          text: 'Mis cuentas',
          route: 'panel/mis-cuentas'
        },
        {
          text: 'Ranking PVP',
          route: 'panel/pvp-ranking'
        }
      ]
    },
    {
      route: 'usuario',
      text: 'Usuario'
    },
  ]
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  goToPage(route: string){
    this.router.navigateByUrl(route)
  }
}
