import { Component } from '@angular/core';
import templateString from './template.html'
console.log("templateString=", templateString);

@Component({
  selector: 'hello-angular',
  template: templateString
})
export class AppComponent {
  name = 'Angular!';
}
