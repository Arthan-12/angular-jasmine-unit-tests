import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Pokemon } from 'src/app/services/api/models/pokemon-response';
import { pokeMocks, pokeMocksListName, PokemonStoreMockService } from 'src/app/services/stores/pokemon-store-mock.service';
import { PokemonStoreService } from 'src/app/services/stores/pokemon-store.service';

import { ChildFeatureAsyncComponent } from './child-feature-async.component';

describe('ChildFeatureAsyncComponent', () => {
  let component: ChildFeatureAsyncComponent;
  let fixture: ComponentFixture<ChildFeatureAsyncComponent>;
  let store: PokemonStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureAsyncComponent ],
      imports: [HttpClientModule],
    })
    .compileComponents();
    store = TestBed.inject(PokemonStoreService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Pokemon if the store has data', () => {
    const spiedMethod = spyOn(component, 'requestPokemon');
    const spiedMethod2 = spyOn(component, 'getPokemonList');

    component.pokemonRequestList = pokeMocksListName;
    fixture.detectChanges();
    component.ngOnInit();

    expect(spiedMethod).toHaveBeenCalled();
    expect(spiedMethod2).toHaveBeenCalled();

  });

  it('should set the a Pokemon if the store has data', () => {

    store.setPokemonList(pokeMocks);

    expect(component.pokemonList.length).toEqual(2);
    expect(component.pokemonList).toEqual(pokeMocks);
  });

  it('should clear Pokemon list when clearList is called', fakeAsync(() => {
    store.setPokemonList(pokeMocks);
    component.clearList();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      store.pokemonList$.subscribe(data => {
        expect(data.length).toEqual(0);
        expect(component.pokemonList).toEqual([]);
      });
    });
  }));

});
