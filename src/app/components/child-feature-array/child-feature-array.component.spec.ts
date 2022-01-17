import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatureArrayComponent } from './child-feature-array.component';

describe('ChildFeatureArrayComponent', () => {
  let component: ChildFeatureArrayComponent;
  let fixture: ComponentFixture<ChildFeatureArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain cards equal to array length', () => {
    const cards = fixture.debugElement.nativeElement.querySelectorAll('.array-item');
    const cardsArrayLength = component.cards.length;

    expect(cards.length).toEqual(cardsArrayLength);
  })
});
