import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public menus = [
    { img: '/assets/images/pokedex.png', link: '/pokemons' },
    { img: '/assets/images/bag.png', link: '/my-pokemons' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
