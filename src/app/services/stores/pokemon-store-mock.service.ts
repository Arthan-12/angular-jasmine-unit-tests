import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Pokemon } from '../api/models/pokemon-response';

export const pokeMock: Pokemon = {
  name: 'ditto',
  id: 203,
  height: 3,
  weight: 40,
  types: 'normal',
  sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
}

export const pokeMocks: Pokemon[] = [
  {
    name: 'ditto',
    id: 132,
    height: 3,
    weight: 1220,
    types: 'normal',
    sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
  },
  {
    name: 'mewtwo',
    id: 150,
    height: 20,
    weight: 40,
    types: 'psychic',
    sprites: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
  }
]

export const pokeMocksListName = ['charmander','bulbasaur','squirtle']

@Injectable({
  providedIn: 'root'
})
export class PokemonStoreMockService {

  constructor() { }

  get pokemon$() {
    return of(pokeMock);
  }

  get pokemonList$() {
    return of(pokeMocks);
  }

  get pokemonRequestNames$() {
    return of(pokeMocksListName);
  }
}
