import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalInit = new EventEmitter<number>();

  interval;
  lastNumber = 0;

  ngOnInit() {
  }

  onStartGame() {
    this.interval = setInterval( () => {
      this.lastNumber++;
      this.intervalInit.emit(this.lastNumber);
    }, 1000 );
  }

  onStopGame() {
    this.interval.clearInterval();
  }
}
