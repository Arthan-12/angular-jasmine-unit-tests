import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PokemonStoreService } from './pokemon-store.service';
import { Pokemon } from '../api/models/pokemon-response';
import { PokemonApiService } from '../api/pokemon-api.service';

describe('PokemonStoreService', () => {
  let service: PokemonStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonStoreService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should do the requestPokemonbyName() ', fakeAsync(() => {
    const pokemonName = ['mewtwo'];
    const pokeMock: Pokemon = {
      name: 'Mewtwo',
    }

    service.setPokemonRequestList(pokemonName);
    service.requestPokemonListByName();

    service.pokemonList$.subscribe(res => {
      tick()
      console.log(res);
      
    })


  }));
});
