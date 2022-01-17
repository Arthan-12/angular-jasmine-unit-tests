import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatureConditionalComponent } from './child-feature-conditional.component';

describe('ChildFeatureConditionalComponent', () => {
  let component: ChildFeatureConditionalComponent;
  let fixture: ComponentFixture<ChildFeatureConditionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureConditionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureConditionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ngIf conditional test'`, () => {

    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngIf conditional test');
  });

  it('should render title', () => {

    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('ngIf conditional test');
  });

  it('should render button', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');

    expect(button).toBeTruthy();
  });

  it('should call toggleClick function when button is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelector('button');
    const spiedMethod = spyOn(component, 'toggleClick');

    button.click();
    fixture.detectChanges();
    
    expect(spiedMethod).toHaveBeenCalled();
  });

  it('should change the flag isClicked to true', () => {
    expect(component.isHidden).toBe(true);

    component.toggleClick();
    fixture.detectChanges();

    expect(component.isHidden).toBe(false);
  });

  it('should render child component in DOM if flag isClicked is true', () => {
    const hiddenElement = fixture.debugElement.nativeElement.querySelector('div .conditional-box');
    const button = fixture.debugElement.nativeElement.querySelector('button');

    expect(component.isHidden).toBe(true);
    expect(hiddenElement).toBeFalsy();

    button.click();
    fixture.detectChanges();
    const showElement = fixture.debugElement.nativeElement.querySelector('div .conditional-box');
    
    expect(component.isHidden).toBe(false);
    expect(showElement).toBeTruthy();
  });
});
