import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}


// Home Component
@Component({
  selector: 'app-home',
  template: `<h1>Home</h1>`
})

export class HomeComponent {
}

// Users Component
@Component({
  selector: 'app-users',
  template: `<h1>Users</h1>`
})

export class UsersComponent {
}

// User Profile Component
@Component({
  selector: 'app-user',
  template: `<h1>User</h1>`
})

export class UserComponent {
}

// Pages Component
@Component({
  selector: 'app-pages',
  template: `<h1>Pages</h1>
  <router-outlet></router-outlet>`
})

export class PagesComponent {
}

// Page One
@Component({
  selector: 'app-page-one',
  template: `<h1>Page One</h1>`
})

export class PageOneComponent {
}

// Page Two
@Component({
  selector: 'app-page-two',
  template: `<h1>Page Two</h1>`
})

export class PageTwoComponent {
}
