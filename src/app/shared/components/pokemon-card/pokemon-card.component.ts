import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event: any): void {
    event.target.src = '/assets/silhouette.png';
  }

  get type() {
    return this.pokemon.types[0].type.name;
  }

}
