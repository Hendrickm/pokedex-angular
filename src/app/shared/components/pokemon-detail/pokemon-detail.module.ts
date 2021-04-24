import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PokemonDetailComponent
  ],
  exports: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    NgbNavModule
  ]
})
export class PokemonDetailModule { }
