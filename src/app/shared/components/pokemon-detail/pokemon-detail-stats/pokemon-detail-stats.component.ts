import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { Stat } from 'src/app/models/stat';

@Component({
  selector: 'app-pokemon-detail-stats',
  templateUrl: './pokemon-detail-stats.component.html',
  styleUrls: ['./pokemon-detail-stats.component.scss']
})
export class PokemonDetailStatsComponent implements OnInit {

  @Input() set stats(stats: Stat[]) {
    if (stats) {
      this.radarChartLabels = stats.map( s => s.stat.name);
      const data = stats.map( s => s.base_stat);
      this.radarChartData = [{ data, label: 'Stat', backgroundColor: '#2D70B789', borderColor: '#2D70B7', pointBackgroundColor: '#2D70B7'}];
    }
  }

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: { display: false },
  };
  public radarChartLabels: Label[];

  public radarChartData: ChartDataSets[];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
