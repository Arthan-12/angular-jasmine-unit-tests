import { Injectable } from '@angular/core';
import { BehaviorSubject, first, Observable } from 'rxjs';
import { Pokemon } from '../api/models/pokemon-response';
import { PokemonApiService } from '../api/pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonStoreService {

  private pokemonSubject: BehaviorSubject<Pokemon>;
  private pokemonListSubject: BehaviorSubject<Pokemon[]>;
  private pokemonRequestNamesSubject: BehaviorSubject<string[]>;
  private pokemonList: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonApiService
  ) {
    this.pokemonSubject = new BehaviorSubject<Pokemon>({});
    this.pokemonListSubject = new BehaviorSubject<Pokemon[]>([]);
    this.pokemonRequestNamesSubject = new BehaviorSubject<string[]>([]);
   }

  get pokemon$() {
    return this.pokemonSubject.asObservable();
  }

  get pokemonList$() {
    return this.pokemonListSubject.asObservable();
  }

  get pokemonRequestNames$() {
    return this.pokemonRequestNamesSubject.asObservable();
  }

  setPokemon(pokemon: Pokemon) {
    this.pokemonSubject.next(pokemon);
  }

  setPokemonRequestList(pokemonNames: string[]) {
    this.pokemonRequestNamesSubject.next(pokemonNames);
  } 

  setPokemonList(pokemonList: Pokemon[]) {
    this.pokemonListSubject.next(pokemonList);
  }

  requestPokemonListByName() {
    this.pokemonRequestNamesSubject.value.forEach(name => {
      this.pokemonService.findByName(name)
      .pipe(first())
      .subscribe(pokemon => {
        const pokemonResponse = Object.assign({}, pokemon);
        this.pokemonList.push(pokemonResponse);
        this.setPokemonList(this.pokemonList);
      });
    });
  }
}
