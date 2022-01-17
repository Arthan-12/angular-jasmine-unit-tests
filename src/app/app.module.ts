import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildFeatureComponent } from './components/child-feature/child-feature.component';
import { ChildFeatureArrayComponent } from './components/child-feature-array/child-feature-array.component';
import { ChildFeatureDialogComponent } from './components/child-feature-dialog/child-feature-dialog.component';
import { ChildFeatureTableComponent } from './components/child-feature-table/child-feature-table.component';
import { ChildFeatureInputComponent } from './components/child-feature-input/child-feature-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildFeatureAsyncComponent } from './components/child-feature-async/child-feature-async.component';
import { HttpClientModule } from '@angular/common/http';
import { ChildFeatureConditionalComponent } from './components/child-feature-conditional/child-feature-conditional.component';
import { ChildFeatureDropdownComponent } from './components/child-feature-dropdown/child-feature-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildFeatureComponent,
    ChildFeatureArrayComponent,
    ChildFeatureDialogComponent,
    ChildFeatureTableComponent,
    ChildFeatureInputComponent,
    ChildFeatureAsyncComponent,
    ChildFeatureConditionalComponent,
    ChildFeatureDropdownComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
