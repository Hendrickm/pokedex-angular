import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonSpecies } from 'src/app/models/pokemon-species';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  private ENGLISH = 'en';

  @Input() pokemon: Pokemon;

  private _pokemonSpecies: PokemonSpecies;
  @Input() set pokemonSpecies(species: PokemonSpecies) {
    if (species) {
      this._pokemonSpecies = species;
      this.genera = species.genera.find( g => g.language.name === this.ENGLISH)?.genus || '';
    }
  }
  get pokemonSpecies(): PokemonSpecies {
    return this._pokemonSpecies;
  }
  public genera: string;

  public active = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onImgError(event: any): void {
    event.target.src = '/assets/silhouette.png';
  }

}
