import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';



@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  exports: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PokemonDetailModule { }
