import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-examples',
  template: `
    <p>Menu</p>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
