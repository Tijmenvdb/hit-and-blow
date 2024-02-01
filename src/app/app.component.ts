import { Component } from '@angular/core';
import { COLOR } from './game-section/game-section.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hit-and-blow';
  public selectedColor = COLOR.BLACK;
  public numTries = 10;
  public gameSections: any[] = [];
  
  public answer = [
    COLOR.RED,
    COLOR.WHITE,
    COLOR.BLUE,
    COLOR.GREEN
  ]

  public displayedAnswer = [
    COLOR.BLACK,
    COLOR.BLACK,
    COLOR.BLACK,
    COLOR.BLACK
  ]

  public colorOptions = [
    COLOR.RED,
    COLOR.GREEN,
    COLOR.BLUE,
    COLOR.YELLOW,
    COLOR.PINK,
    COLOR.WHITE
  ]
  
  ngOnInit() {
    this.answer = [];
    for(var i = 0; i < 4; i++) {
      var random = Math.floor((Math.random() * 6));
      this.answer[i] = this.colorOptions[random];
    }

    this.gameSections = []
    for(var i = 0; i < this.numTries; i++) {
      this.gameSections.push({
        disabled: true
      })
    }
    this.gameSections[0].disabled = false;
  }

  onColorClick(color: string) {
    switch(color) {
      case 'red':
      this.selectedColor = COLOR.RED
      break;
      case 'green':
      this.selectedColor = COLOR.GREEN
      break;
      case 'blue':
      this.selectedColor = COLOR.BLUE
      break;
      case 'yellow':
      this.selectedColor = COLOR.YELLOW
      break;
      case 'pink':
      this.selectedColor = COLOR.PINK
      break;
      case 'white':
      this.selectedColor = COLOR.WHITE
      break;
    }
  }

  onCompleteSection(index: number, correctGuess: boolean) {
    if(correctGuess) {
      this.displayedAnswer = this.answer;
      return;
    }

    if(index == this.numTries - 1) {
      this.displayedAnswer = this.answer;
      return;
    }

    this.gameSections[index + 1].disabled = false;
    
  }
}
