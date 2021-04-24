import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-detail-about',
  templateUrl: './pokemon-detail-about.component.html',
  styleUrls: ['./pokemon-detail-about.component.scss']
})
export class PokemonDetailAboutComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

}
