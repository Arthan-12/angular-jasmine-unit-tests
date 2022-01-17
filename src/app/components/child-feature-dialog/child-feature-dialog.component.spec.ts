import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFeatureDialogComponent } from './child-feature-dialog.component';

describe('ChildFeatureDialogComponent', () => {
  let component: ChildFeatureDialogComponent;
  let fixture: ComponentFixture<ChildFeatureDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildFeatureDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFeatureDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the open dialog function on  mouse enter', () => {
    const button =  fixture.debugElement.nativeElement.querySelector('button');
    const spiedMethod = spyOn(component, 'openDialog');

    button.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();

    expect(spiedMethod).toHaveBeenCalledTimes(1);
    
  });

  it('should switch the flag showDialog to true after the function openDialog is called', () => {
    const dialog = fixture.debugElement.nativeElement.querySelector('dialog');

    component.openDialog();
    fixture.detectChanges();

    expect(component.showDialog).toBe(true);
    expect(dialog.getAttribute('open')).toBeTruthy();
  });

  it('should contain a dialog with a "Hello!" text and a close button', () => {
    const dialog = fixture.debugElement.nativeElement.querySelector('dialog');
    const text = fixture.debugElement.nativeElement.querySelectorAll('p');
    const button = fixture.debugElement.nativeElement.querySelectorAll('button');

    expect(dialog).toBeTruthy();
    expect(text[1].innerHTML).toContain('Hello!');
    expect(button[1].innerHTML).toContain('Close');
  });

  it('should call the function close() when button Close is clicked', () => {
    const button = fixture.debugElement.nativeElement.querySelectorAll('button');
    const spiedMethod = spyOn(component, 'close')

    button[1].click();

    expect(spiedMethod).toHaveBeenCalledTimes(1);
  });

  it('should switch the flag showDialog to false after the function close() is called', () => {
    const dialog = fixture.debugElement.nativeElement.querySelector('dialog');

    component.close();
    fixture.detectChanges();

    expect(component.showDialog).toBe(false);
    expect(dialog.getAttribute('open')).toBeFalsy();
  });
});
