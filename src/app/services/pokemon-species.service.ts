import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonSpecies } from '../models/pokemon-species';

@Injectable({
  providedIn: 'root'
})
export class PokemonSpeciesService {

  private url = environment.apiUrl + 'pokemon-species/';

  constructor(private http: HttpClient) { }


  public findById(id: number): Observable<PokemonSpecies> {
    return this.http.get<PokemonSpecies>(`${this.url}${id}`);
  }


}
