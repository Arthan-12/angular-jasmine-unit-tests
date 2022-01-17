import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-feature-input',
  templateUrl: './child-feature-input.component.html',
  styleUrls: ['./child-feature-input.component.scss']
})
export class ChildFeatureInputComponent implements OnInit {

  input: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.input.setValidators(Validators.required);
  }



}
