import { Component } from '@angular/core';
import { FORM_DIRECTIVES } from '@angular/common';

@Component({
  selector: 'test',  // <home></home>
  providers: [],
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [],
  template: require('./test.html')
})

export class TestViewComponent {
  data = { value: '' };

  constructor() {

  }

  ngOnInit() {
    console.log('hello `Home` component');
  }

  asyncMethod() {

  }
}

export const route = {
  path: 'test',
  component: TestViewComponent
};
