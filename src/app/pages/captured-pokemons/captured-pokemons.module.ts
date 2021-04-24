import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CapturedPokemonsComponent } from './captured-pokemons.component';
import { CapturedPokemonsRoutingModule } from './captured-pokemons-routing.module';


@NgModule({
  declarations: [
    CapturedPokemonsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CapturedPokemonsRoutingModule
  ]
})
export class CapturedPokemonsModule { }
