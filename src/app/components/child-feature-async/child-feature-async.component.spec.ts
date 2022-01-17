import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { Pokemon } from 'src/app/services/api/models/pokemon-response';
import { PokemonStoreService } from 'src/app/services/stores/pokemon-store.service';

import { ChildFeatureAsyncComponent } from './child-feature-async.component';

describe('ChildFeatureAsyncComponent', () => {
  let component: ChildFeatureAsyncComponent;
  let fixture: ComponentFixture<ChildFeatureAsyncComponent>;
  let store: PokemonStoreService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureAsyncComponent ],
      imports: [HttpClientModule]
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

  it('should call Pokemon if the store has data', fakeAsync(() => {
    const spiedMethod = spyOn(component, 'requestPokemon');
    const spiedMethod2 = spyOn(component, 'getPokemonList');
    const pokeNameList = ['mewtwo'];

    component.pokemonRequestList = pokeNameList;
    fixture.detectChanges();
    component.ngOnInit();

    expect(spiedMethod).toHaveBeenCalled();
    expect(spiedMethod2).toHaveBeenCalled();

  }));

  it('should set the a Pokemon if the store has data', () => {
    const pokeMockList: Pokemon[] = [{
      name: 'mewtwo',
      order: 230,
      height: 20,
    }]

    store.setPokemonList(pokeMockList);

    expect(component.pokemonList.length).toEqual(1);
    expect(component.pokemonList).toEqual(pokeMockList)
  });

  it('', waitForAsync(() => {
    const pokeName = ['mewtwo'];

    component.pokemonRequestList = pokeName;
    fixture.detectChanges();
    
    fixture.whenStable().then(() => {
      component.setPokemonRequestNames(pokeName);
      component.requestPokemon();
      component.getPokemonList();
      fixture.detectChanges();
    });
  }))

});
