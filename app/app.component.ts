import   {Component} from '@angular/core';

@Component({
  selector:'my-app',
  template: `
    <header>
      <div className="navbar navbar-inverse">
        <div className="navbar-header">
          <a href="/" className="navbar-brand">My Angular 2 App!</a>
        </div>
      </div>
    </header>


    <div className="jumbotron">
      <h1>HiepXanh App!</h1>
    </div>


    <footer class="text-center">
      copyright &copy; 2016
    </footer>
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]

})
export class AppComponent { }
