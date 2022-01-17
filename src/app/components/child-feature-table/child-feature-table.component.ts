import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-feature-table',
  templateUrl: './child-feature-table.component.html',
  styleUrls: ['./child-feature-table.component.scss']
})
export class ChildFeatureTableComponent implements OnInit {

  columns = [
    'NAME',
    'AGE',
    'COUNTRY'
   ]
 people = [
   {
     name:'Victor',
     age: 28,
     country:'Brazil'
   },
   {
     name:'Augusto',
     age: 18,
     country:'Canada'
   },
   {
     name:'Souza',
     age: 38,
     country:'India'
   },
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
