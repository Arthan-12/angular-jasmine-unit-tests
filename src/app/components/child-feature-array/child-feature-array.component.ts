import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-feature-array',
  templateUrl: './child-feature-array.component.html',
  styleUrls: ['./child-feature-array.component.scss']
})
export class ChildFeatureArrayComponent implements OnInit {

  cards = [
    {
      title: 'card 1',
      description: 'some card description'
    },
    {
      title: 'card 2',
      description: 'some card description'
    },
    {
      title: 'card 3',
      description: 'some card description'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
