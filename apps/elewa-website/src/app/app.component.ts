import { Component } from '@angular/core';

@Component({
  selector: 'elewa-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elewa-website';
  data = {
        text: 'Click Me',
        bgColor: 'blue',
        color: 'red',
        hoverBgColor: 'red',
        hoverColor: 'yellow'
  }
}
