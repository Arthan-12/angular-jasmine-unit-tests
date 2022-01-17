import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child-feature-dialog',
  templateUrl: './child-feature-dialog.component.html',
  styleUrls: ['./child-feature-dialog.component.scss']
})
export class ChildFeatureDialogComponent implements OnInit {

  @ViewChild('dialog', { static: true })
  dialog!: ElementRef;
  showDialog = false;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.nativeElement.setAttribute('open', true);
    this.showDialog = true;
  }

  close() {
    let dialog = document.getElementById('dialog');
    dialog?.removeAttribute('open');
    this.showDialog = false;
  }

}
