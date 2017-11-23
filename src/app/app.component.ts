import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  evenNumbers = [];
  oddNumbers = [];

  onIntervalInit(number){
    if(number%2 === 0) {
      this.evenNumbers.push(number);
    }
    else {
      this.oddNumbers.push(number);
    }
  }
}
