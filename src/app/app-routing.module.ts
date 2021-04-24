import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'pokemons'
  },
  {
    path: 'pokemons',
    loadChildren: () => import('./pages/pokemons/pokemons.module').then(m => m.PokemonsModule)
  },
  {
    path: 'captured-pokemons',
    loadChildren: () => import('./pages/captured-pokemons/captured-pokemons.module').then(m => m.CapturedPokemonsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
