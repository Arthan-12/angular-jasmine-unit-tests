import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-feature-conditional',
  templateUrl: './child-feature-conditional.component.html',
  styleUrls: ['./child-feature-conditional.component.scss']
})
export class ChildFeatureConditionalComponent implements OnInit {

  title = 'ngIf conditional test';
  isHidden = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleClick() {
    this.isHidden = !this.isHidden;
  }

}
