import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Pokemon } from './models/pokemon-response';

import { PokemonApiService } from './pokemon-api.service';

describe('PokemonApiService', () => {
  let service: PokemonApiService;
  let httpController: HttpTestingController;
  let url = 'https://pokeapi.co/api/v2/pokemon';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PokemonApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('it should call a Pokemon by name and return it', () => {
    const pokemonName = 'mewtwo';
    const pokeMock: Pokemon = {
      name: 'mewtwo',
    }

    service.findByName(pokemonName).subscribe(pokemonResponse => {
      console.log(pokemonResponse);
      expect(pokemonResponse.name).toEqual(pokemonName)
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/${pokemonName}`,
    });

    req.flush(pokeMock);
  })
});
