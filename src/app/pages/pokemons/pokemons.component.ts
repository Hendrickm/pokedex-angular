import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { forkJoin, Observable } from 'rxjs';
import { Pokemon } from 'src/app/models/pokemon';
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

  private total: number;
  private pageSize = 12;


  constructor(
    private pokemonService: PokemonService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getPokemons(true);
  }

  private getPokemons(initList: boolean): void {
    this.pokemonService.findAll(this.pageSize, this.pokemons.length)
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
    this.selectedPokemon = pokemon;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg', centered: true });
  }
}
