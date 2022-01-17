import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-feature-dropdown',
  templateUrl: './child-feature-dropdown.component.html',
  styleUrls: ['./child-feature-dropdown.component.scss']
})
export class ChildFeatureDropdownComponent implements OnInit {

  options: any[] = [
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
  placeholder = 'select some tasty food';
  selectedOption: any = {}
  text = 'Select a tasty food';

  constructor() { }

  ngOnInit(): void {

  }

}
