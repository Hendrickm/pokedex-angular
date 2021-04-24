import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapturedPokemonsComponent } from './captured-pokemons.component';

const routes: Routes = [
  { path: '', component: CapturedPokemonsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CapturedPokemonsRoutingModule { }
