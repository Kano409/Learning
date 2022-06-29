import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // selector: '[app-root]',
  // selector: '.app-root',
  templateUrl: './app.component.html',
  // template: `<h1>This is component</h1>`,
  styleUrls: ['./app.component.css'],
  //   styles:[`
  //   h1 {
  //   color: aqua;
  //   }
  // `]
})
export class AppComponent {
  title = 'my-app';
  name:any;
}
