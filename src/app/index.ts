import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { FORM_PROVIDERS} from '@angular/common';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS,  ],
  directives: [ ...ROUTER_DIRECTIVES ],
  pipes: [],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li>
            <a [routerLink]="['/']">Index</a>
          </li>
          <li>
            <a [routerLink]="['/test']">Index</a>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer>
      WebPack Angular 2 Starter
    </footer>
  `
})
export default class App {
  name = 'Angular 2 Webpack Starter';
  constructor() {

  }
}
