import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { PokemonDetailModule } from './pokemon-detail/pokemon-detail.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonCardModule,
    PokemonDetailModule
  ]
})
export class ComponentsModule { }
