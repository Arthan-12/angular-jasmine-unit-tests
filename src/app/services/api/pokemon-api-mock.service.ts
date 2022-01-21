import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './models/pokemon-response';

export const MOCK_URL = 'http://mockurl/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonApiMockService {

  constructor(private http: HttpClient) { }

  findByName(pokemonName: string): Observable<Pokemon> {
    return this.http.get<any>(MOCK_URL + '/' + pokemonName)
  }
}
