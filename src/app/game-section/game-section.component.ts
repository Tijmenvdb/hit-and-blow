import { Component, Input, Output, EventEmitter} from '@angular/core';
import { defaultUrlMatcher } from '@angular/router';
import { find } from 'rxjs';

export enum COLOR{
    RED,
    BLUE,
    GREEN,
    PINK,
    WHITE,
    YELLOW,
    BLACK
}

@Component({
    selector: 'game-section',
    templateUrl: './game-section.component.html',
    styleUrls: ['./game-section.component.scss']
})

export class GameSectionComponent {

    @Input()
    public selectedColor = COLOR.BLACK;

    @Input()
    public disabled = false;

    @Input()
    public showResults = true;

    @Output()
    public done = new EventEmitter<boolean>()

    public showConfirm = false;

    public result = [
        COLOR.BLACK,
        COLOR.BLACK,
        COLOR.BLACK,
        COLOR.BLACK
    ]

    @Input()
    public answer = [
        COLOR.RED,
        COLOR.BLUE,
        COLOR.BLUE,
        COLOR.GREEN
    ]

    @Input()
    public guess = [
        COLOR.BLACK,
        COLOR.BLACK,
        COLOR.BLACK,
        COLOR.BLACK
    ]

    ngOnInit() {
        
    }

    onPegClick(index: number) {
        this.guess[index] = this.selectedColor;
        if(!this.guess.includes(COLOR.BLACK)) {
            this.showConfirm = true;
        }
    }

    onConfirm() {
        var result = [];
        var blowsGuess = [];
        var blowsAnswer: COLOR[] = [];

        for(var i = 0; i < this.answer.length; i++) {
            if(this.answer[i] === this.guess[i]) {
                result.push(COLOR.RED);
            } else {
                blowsGuess.push(this.guess[i]);
                blowsAnswer.push(this.answer[i]);
            }
        }

        for(var i = 0; i < blowsAnswer.length; i++) {
            if(blowsGuess.includes(blowsAnswer[i])) {
                result.push(COLOR.WHITE);
                var index = blowsGuess.findIndex((color) => {
                    return color === blowsAnswer[i];
                })
                blowsGuess.splice(index, 1);
            }
        }

        for(var i = result.length; i < this.answer.length; i++) {
            result.push(COLOR.BLACK);
        }

        this.result = result
        this.showConfirm = false;
        this.disabled = true;

        if(!this.result.includes(COLOR.BLACK) && !this.result.includes(COLOR.WHITE)) { 
            this.done.emit(true);
        } else {
            this.done.emit(false);
        }
    }

    getClassName(color: COLOR): string {
        switch(color) {
            case COLOR.RED:
                return "red";
            case COLOR.BLUE:
                return "blue";
            case COLOR.GREEN:
                return "green";
            case COLOR.YELLOW:
                return "yellow";
            case COLOR.PINK:
                return "pink";
            case COLOR.WHITE:
                return "white";
            default:
                return "";
        }
    }

}