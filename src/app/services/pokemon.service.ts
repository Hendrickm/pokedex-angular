import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public findAll(limit: number, offset = 0): Observable<any> {
    const params = new HttpParams()
      .append('limit', '12')
      .append('offset', '0');
    return this.http.get<any>(`${this.url}pokemon/`, { params });
  }

  public findByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.url}pokemon/${name}`);
  }

}
