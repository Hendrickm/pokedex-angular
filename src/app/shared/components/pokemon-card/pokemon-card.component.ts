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
    this.capturedPokemons = this.getStorage();
  }

  onImgError(event: any): void {
    event.target.src = '/assets/images/silhouette.png';
  }

  public releasePokemon(): void {
    let capturedPokemons = this.getStorage();
    capturedPokemons = capturedPokemons.filter( p => p !== this.pokemon.id);
    this.updateStorage(capturedPokemons);
  }

  public capturePokemon(): void {
    const capturedPokemons = this.getStorage();
    capturedPokemons.push(this.pokemon.id);
    this.updateStorage(capturedPokemons);
  }

  public isCaptured(): boolean {
    return this.capturedPokemons.some( p => p === this.pokemon.id);
  }

  private updateStorage(capturedPokemons: number[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(capturedPokemons));
    this.capturedPokemons = this.getStorage();
  }

  private getStorage(): number[] {
    const storage = localStorage.getItem(this.STORAGE_KEY);
    const capturedPokemons: number[] = storage ? JSON.parse(storage) : [];
    return capturedPokemons;
  }

}
