/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
      './styles/app.css'
  ],
  template: `
    <app-nav></app-nav>
    <header class="app-header">
        <div class="app-header__content">
            <div class="app-header__logo">
                <a [routerLink]="['./']" class="app-header__link">Books <span>App</span></a>
            </div>
        </div>
    </header>

    <main class="app-main">
        <div class="app-main__content">
            <router-outlet></router-outlet>
            <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>
        </div>
    </main>

    <footer class="app-footer">&copy; 2017 Angular App</footer>
  `
})
export class AppComponent {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
