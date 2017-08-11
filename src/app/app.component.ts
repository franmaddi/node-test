import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-micomponent></app-micomponent><app-otro></app-otro>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app demo';
}
