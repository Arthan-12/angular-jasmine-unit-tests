import { HttpClientModule } from '@angular/common/http';
import { TestBed, async, fakeAsync, ComponentFixture, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ChildFeatureArrayComponent } from './components/child-feature-array/child-feature-array.component';
import { ChildFeatureAsyncComponent } from './components/child-feature-async/child-feature-async.component';
import { ChildFeatureConditionalComponent } from './components/child-feature-conditional/child-feature-conditional.component';
import { ChildFeatureDialogComponent } from './components/child-feature-dialog/child-feature-dialog.component';
import { ChildFeatureDropdownComponent } from './components/child-feature-dropdown/child-feature-dropdown.component';
import { ChildFeatureInputComponent } from './components/child-feature-input/child-feature-input.component';
import { ChildFeatureTableComponent } from './components/child-feature-table/child-feature-table.component';
import { ChildFeatureComponent } from './components/child-feature/child-feature.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        ChildFeatureComponent,
        ChildFeatureArrayComponent,
        ChildFeatureDialogComponent,
        ChildFeatureTableComponent,
        ChildFeatureInputComponent,
        ChildFeatureConditionalComponent,
        ChildFeatureAsyncComponent,
        ChildFeatureDropdownComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create the app', () => {

    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
