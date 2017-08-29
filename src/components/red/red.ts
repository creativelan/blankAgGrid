import { Component } from '@angular/core';

/**
 * Generated class for the RedComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'red',
  templateUrl: 'red.html'
})
export class RedComponent {

  text: string;

  constructor() {
    console.log('Hello RedComponent Component');
    this.text = 'Hello World';
  }

}
