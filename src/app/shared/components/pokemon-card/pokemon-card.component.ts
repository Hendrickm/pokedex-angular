import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  private STORAGE_KEY = 'captured-pokemons';

  @Input() pokemon: Pokemon;

  private capturedPokemons: number[] = [];

  constructor() { }

  ngOnInit(): void {
    const storage = localStorage.getItem(this.STORAGE_KEY);
    const capturedPokemons: number[] = storage ? JSON.parse(storage) : [];
    this.capturedPokemons = capturedPokemons;
  }

  onImgError(event: any): void {
    event.target.src = '/assets/images/silhouette.png';
  }

  public releasePokemon(): void {
    this.capturedPokemons = this.capturedPokemons.filter( p => p !== this.pokemon.id);
    this.updateStorage();
  }

  public capturePokemon(): void {
    this.capturedPokemons.push(this.pokemon.id);
    this.updateStorage();
  }

  public isCaptured(): boolean {
    return this.capturedPokemons.some( p => p === this.pokemon.id);
  }

  private updateStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.capturedPokemons));
  }

}
