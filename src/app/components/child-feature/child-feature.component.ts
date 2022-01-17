import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-feature',
  templateUrl: './child-feature.component.html',
  styleUrls: ['./child-feature.component.scss']
})
export class ChildFeatureComponent implements OnInit {

  backgroundColor: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  paintBgColor(color: string) {
    if (color === 'blue') {
      this.backgroundColor = 'blue';
    } else if (color === 'red') {
      this.backgroundColor = 'red';
    }
  }

}
