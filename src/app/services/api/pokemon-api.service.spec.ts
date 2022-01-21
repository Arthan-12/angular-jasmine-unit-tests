import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Pokemon } from './models/pokemon-response';
import { PokemonApiMockService, MOCK_URL } from './pokemon-api-mock.service';

import { PokemonApiService } from './pokemon-api.service';

describe('PokemonApiService', () => {
  let service: PokemonApiService;
  let httpController: HttpTestingController;
  

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: PokemonApiService,
          useClass: PokemonApiMockService
      },
    ],
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

    service.findByName(pokemonName).subscribe();

    const req = httpController.expectOne({
      method: 'GET',
      url: `${MOCK_URL}/${pokemonName}`,
    });

    req.flush(pokeMock);
  })
});
