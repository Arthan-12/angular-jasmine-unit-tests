import { HttpClientTestingModule } from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PokemonStoreService } from './pokemon-store.service';
import { Pokemon } from '../api/models/pokemon-response';
import { PokemonApiService } from '../api/pokemon-api.service';
import { PokemonStoreMockService, pokeMock, pokeMocks, pokeMocksListName } from './pokemon-store-mock.service';

describe('PokemonStoreService', () => {
  let service: PokemonStoreService;
  let serviceMock: PokemonStoreMockService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonStoreService);
    serviceMock = TestBed.inject(PokemonStoreMockService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set and return pokemon data', () => {

    service.setPokemon(pokeMock);

    service.pokemon$.subscribe(data => {
      expect(data).toEqual(pokeMock);
    });
  });

  it('should set and return pokemon list data', () => {

    service.setPokemonList(pokeMocks);

    service.pokemonList$.subscribe(data => {
      expect(data).toEqual(pokeMocks);
    });
  });

  it('should set and return pokemon request list names', () => {

    service.setPokemonRequestList(pokeMocksListName);

    service.pokemonRequestNames$.subscribe(data => {
      expect(data).toEqual(pokeMocksListName);
    });
  });

});
