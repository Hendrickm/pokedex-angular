import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonSpecies } from 'src/app/models/pokemon-species';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-captured-pokemons',
  templateUrl: './captured-pokemons.component.html',
  styleUrls: ['./captured-pokemons.component.scss']
})
export class CapturedPokemonsComponent implements OnInit {

  private STORAGE_KEY = 'captured-pokemons';

  public pokemons: Pokemon[] = [];
  public loading = false;

  public selectedPokemon: Pokemon;
  public selectedPokemonSpecies: PokemonSpecies;

  constructor(
    private pokemonService: PokemonService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    const storage = localStorage.getItem(this.STORAGE_KEY);
    let capturedPokemons: number[] = storage ? JSON.parse(storage) : [];

    if (capturedPokemons.length) {
      capturedPokemons = capturedPokemons.sort( (a, b) =>  a - b );
      const observables = capturedPokemons.map( p => this.pokemonService.findById(p));
      this.getPokemonDetails(observables, );
    }
  }

  private getPokemonDetails(observables: Observable<Pokemon>[]): void {
    forkJoin(observables)
      .subscribe( pokemons => {
        this.pokemons = pokemons;
      });
  }

  open(content: any, pokemon: Pokemon): void {
    this.pokemonSpeciesService.findById(pokemon.id)
      .subscribe( res => {
        this.selectedPokemonSpecies = res;
        this.selectedPokemon = pokemon;
        const type = this.selectedPokemon.types[0].type.name;
        this.modalService.open(content, {
          ariaLabelledBy: 'modal-basic-title',
          size: 'xl',
          centered: true,
          windowClass: `bg-${type}`
        });
      });
  }

}
