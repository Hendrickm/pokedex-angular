import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  // public pokemon: Pokemon;

  public pokemons: Pokemon[];

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    // this.pokemonService.findById(1)
    //   .subscribe( res => {
    //     this.pokemon = res;
    //   });

    this.pokemonService.findAll()
      .subscribe( res => {
        const observables: Observable<Pokemon>[] = res.results.map( (r: Pokemon) => {
          return this.pokemonService.findByName(r.name);
        });

        forkJoin(observables)
          .subscribe( pokemons => {
            this.pokemons = pokemons;
          });
      });
  }

}
