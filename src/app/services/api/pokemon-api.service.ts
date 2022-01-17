import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon-response';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiService {

  public readonly API_URL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) { }

  findByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<any>(this.API_URL + '/' + pokemonName)
  }
}
