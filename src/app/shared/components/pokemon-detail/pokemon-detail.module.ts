import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailComponent } from './pokemon-detail.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDetailStatsComponent } from './pokemon-detail-stats/pokemon-detail-stats.component';
import { ChartsModule } from 'ng2-charts';
import { PokemonDetailAboutComponent } from './pokemon-detail-about/pokemon-detail-about.component';

@NgModule({
  declarations: [
    PokemonDetailComponent,
    PokemonDetailStatsComponent,
    PokemonDetailAboutComponent
  ],
  exports: [
    PokemonDetailComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    NgbNavModule
  ]
})
export class PokemonDetailModule { }
