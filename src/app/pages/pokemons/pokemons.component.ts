import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonSpecies } from 'src/app/models/pokemon-species';
import { PokemonSpeciesService } from 'src/app/services/pokemon-species.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public loading = false;

  public selectedPokemon: Pokemon;
  public selectedPokemonSpecies: PokemonSpecies;

  private total: number;
  private pageSize = 12;


  constructor(
    private pokemonService: PokemonService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getPokemons(true);
  }

  private getPokemons(initList: boolean): void {
    this.pokemonService.findPage(this.pageSize, this.pokemons.length)
      .subscribe( res => {
        this.total = res.count;
        const observables: Observable<Pokemon>[] = res.results.map( (r: Pokemon) => {
          return this.pokemonService.findByName(r.name);
        });
        this.getPokemonDetails(observables, initList);
      });
  }

  private getPokemonDetails(observables: Observable<Pokemon>[], initList: boolean): void {
    forkJoin(observables)
      .subscribe( pokemons => {
        if (initList) {
          this.pokemons = pokemons;
        } else {
          this.pokemons = this.pokemons.concat(pokemons);
        }
        this.loading = false;
      });
  }

  public onScroll(): void {
    if (this.pokemons.length < this.total) {
      this.loading = true;
      this.getPokemons(false);
    }
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
