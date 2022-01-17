import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ChildFeatureInputComponent } from './child-feature-input.component';

describe('ChildFeatureInputComponent', () => {
  let component: ChildFeatureInputComponent;
  let fixture: ComponentFixture<ChildFeatureInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureInputComponent ],
      imports: [
        ReactiveFormsModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a label and an input', () => {
    const label = fixture.debugElement.nativeElement.querySelectorAll('label');
    const input = fixture.debugElement.nativeElement.querySelectorAll('input');

    expect(label).toBeTruthy();
    expect(input).toBeTruthy();
    expect(input[0].placeholder).toBe('write something...');
  });

  it('should display required validation error', () => {
    const input = fixture.debugElement.nativeElement.querySelectorAll('input');

    input[0].dispatchEvent(new Event('input'));
    input[0].dispatchEvent(new Event('blur'));
    fixture.detectChanges();

    const span = fixture.debugElement.nativeElement.querySelector('span');
    const errorMessage = fixture.debugElement.nativeElement.querySelector('.error-message');
    
    expect(span).toBeTruthy();
    expect(errorMessage.innerHTML).toContain('campo obrigatório!');
    expect(component.input.invalid).toBe(true);
    expect(component.input.errors).toBeTruthy();
  });

  it('should be valid input if there is some text on it', () => {
    const input = fixture.debugElement.nativeElement.querySelectorAll('input');

    input[0].value = 'Hello World!'
    input[0].dispatchEvent(new Event('input'));
    fixture.detectChanges();
    
    expect(component.input.valid).toBe(true);
    expect(component.input.errors).toBeFalsy();
  });
});
