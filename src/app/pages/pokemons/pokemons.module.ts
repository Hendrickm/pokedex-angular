import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PokemonsRoutingModule
  ]
})
export class PokemonsModule { }
