import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ChildFeatureComponent } from './child-feature.component';

describe('ChildFeatureComponent', () => {
  let component: ChildFeatureComponent;
  let fixture: ComponentFixture<ChildFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain a h1 and two button as content', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    const redBtn = fixture.debugElement.query(By.css('#red-btn'));
    const text = fixture.debugElement.nativeElement.querySelector('h1');

    expect(buttons.length).toEqual(2);
    expect(text).toBeTruthy();
    expect(text.innerHTML).toContain('This text will receive a ngClass');
    expect(buttons[0].innerHTML).toContain('Paint it blue');
    expect(redBtn.nativeElement.textContent.trim()).toContain('Paint it red');
  })

  it('should call function paintBgColor when buttons Paint it blue or Paint it red are clicked', () => {
    const buttons = fixture.debugElement.nativeElement.querySelectorAll('button');
    const redBtn = fixture.debugElement.nativeElement.querySelector('#red-btn');
    const spiedMethod = spyOn(component, 'paintBgColor');

    buttons[0].click();
    redBtn.click();
    component.paintBgColor('red');

    expect(spiedMethod).toHaveBeenCalled();
    expect(spiedMethod).toHaveBeenCalledTimes(3);
  })
});
