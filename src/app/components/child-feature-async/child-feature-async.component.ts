import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, first } from 'rxjs';
import { Pokemon } from 'src/app/services/api/models/pokemon-response';
import { PokemonApiService } from 'src/app/services/api/pokemon-api.service';
import { PokemonStoreService } from 'src/app/services/stores/pokemon-store.service';

@Component({
  selector: 'app-child-feature-async',
  templateUrl: './child-feature-async.component.html',
  styleUrls: ['./child-feature-async.component.scss']
})
export class ChildFeatureAsyncComponent implements OnInit {

  pokemonList: Pokemon[] = [];
  pokemonRequestList = ['blaziken', 'empoleon', 'greninja', 'articuno', 'charizard', 'salamence']

  constructor(
    private pokemonStoreService: PokemonStoreService
  ) { }

  ngOnInit(): void {
    this.setPokemonRequestNames(this.pokemonRequestList);
    this.requestPokemon();
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonStoreService.pokemonList$.subscribe(response => {
      this.pokemonList = response;
    })
  }

  setPokemonRequestNames(pokemonRequestList: string[]) {
    this.pokemonStoreService.setPokemonRequestList(pokemonRequestList);
  }

  requestPokemon() {
    this.pokemonStoreService.requestPokemonListByName();
  }

}
