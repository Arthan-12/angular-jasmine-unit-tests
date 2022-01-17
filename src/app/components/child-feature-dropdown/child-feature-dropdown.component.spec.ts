import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { ChildFeatureDropdownComponent } from './child-feature-dropdown.component';

describe('ChildFeatureDropdownComponent', () => {
  let component: ChildFeatureDropdownComponent;
  let fixture: ComponentFixture<ChildFeatureDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureDropdownComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a dropdown selection', () => {
    const dropdown = fixture.debugElement.query(By.css('#dropdown')).nativeElement;
    const label = fixture.debugElement.nativeElement.querySelectorAll('label');
    const options = fixture.debugElement.queryAll(By.css('.options'));
    const mockedFood: any[] = [
      {
        name: 'pizza',
        icon: './assets/images/pizza.png'
      },
      {
        name: 'hamburger',
        icon: './assets/images/hamburger.png'
      },
      {
        name: 'cake',
        icon: './assets/images/cake-slice.png'
      }
    ];

    component.options = mockedFood;
    fixture.detectChanges();

    expect(dropdown).toBeTruthy();
    expect(label).toBeTruthy();
    expect(options).toBeTruthy();
    expect(options).toBeTruthy();
    expect(options[0].nativeElement.textContent).toBe('pizza');
    expect(options[1].nativeElement.textContent).toBe('hamburger');
    expect(options[2].nativeElement.textContent).toBe('cake');
  });



  it('should display the selected item', () => {
    const selectedOption = fixture.debugElement.queryAll(By.css('label'));
    const mockedFood =
      {
        name: 'pizza',
        icon: 'http://localhost:9876/assets/images/pizza.png'
      }

    component.selectedOption = mockedFood;
    fixture.detectChanges();

    const selectedOptionImage = fixture.debugElement.queryAll(By.css('.image'));


    expect(selectedOption[1].nativeElement.innerHTML).toBe(mockedFood.name);
    expect(selectedOptionImage[0].nativeElement.src).toBe(mockedFood.icon);
  });
});
