import { Component, OnInit, HostListener } from '@angular/core';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40
}
@Component({
  selector: 'app-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.scss']
})
export class GameScreenComponent implements OnInit {

  screen = {
    width: 20,
    height: 20
  };

  snake = {
    positions: [[10, 12]],
    points: 0
  };

  feed = {
    position: [11, 11],
    points: 10
  };

  direction = 'right';

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);

    // tslint:disable-next-line: deprecation
    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.navigateSnake('right');
    }
    // tslint:disable-next-line: deprecation
    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.navigateSnake('left');
    }
    // tslint:disable-next-line: deprecation
    if (event.keyCode === KEY_CODE.UP_ARROW) {
      this.navigateSnake('up');
    }
    // tslint:disable-next-line: deprecation
    if (event.keyCode === KEY_CODE.DOWN_ARROW) {
      this.navigateSnake('down');
    }
  }

  navigateSnake(direction) {
    console.log('text');
    if (
        (this.direction === 'left' && direction === 'right') ||
        (this.direction === 'right' && direction === 'left') ||
        (this.direction === 'up' && direction === 'down') ||
        (this.direction === 'down' && direction === 'up')
      ) { return; }
    if (this.direction !== direction) { this.direction = direction; }
  }

  constructor() { }

  ngOnInit() {
    this.gameAction();
  }

  createList(value) {
    const list = [];
    for (let i = 0; i < value; i++) { list.push(i); }
    return list;
  }

  isSnakeField(rowIndex, colIndex) {
    let isActive = false;
    this.snake.positions.map(pos => {
      if (pos[0] === rowIndex && pos[1] === colIndex) { isActive = true; }
      return pos;
    });
    return isActive;
  }

  gameAction() {
    const snakeMoving = setTimeout(() => {
      const snakeTailPos = this.snake.positions.slice(0, -1);
      let snakeHeadPos = [];
      switch (this.direction) {
        case 'right':
          snakeHeadPos = [this.snake.positions[0][0], this.snake.positions[0][1] + 1];
          break;
        case 'left':
          snakeHeadPos = [this.snake.positions[0][0], this.snake.positions[0][1] - 1];
          break;
        case 'up':
          snakeHeadPos = [this.snake.positions[0][0] - 1, this.snake.positions[0][1]];
          break;
        case 'down':
          snakeHeadPos = [this.snake.positions[0][0] + 1, this.snake.positions[0][1]];
          break;
      }

      if (snakeHeadPos[0] === 20 || snakeHeadPos[0] === -1 || snakeHeadPos[1] === 20 || snakeHeadPos[1] === -1) {
        // clearInterval(snakeMoving);
        alert(`Game over. You got ${this.snake.points} points!`);
      }

      let prizeSnakeElement = [];
      if (snakeHeadPos[0] === this.feed.position[0] && snakeHeadPos[1] === this.feed.position[1]) {
        prizeSnakeElement = this.snake.positions[this.snake.positions.length - 1];
        const snakeRows = this.snake.positions.map(pos => pos[0]);
        const snakeCols = this.snake.positions.map(pos => pos[1]);
        const feedPositionRow = this.getRandomInt(-1, 20, snakeRows);
        const feedPositionCol = this.getRandomInt(-1, 20, snakeCols);
        this.snake.points = this.snake.points + this.feed.points;
        this.feed.position = [feedPositionRow, feedPositionCol];
        this.feed.points = this.feed.points + 10;
      }
      this.snake.positions = prizeSnakeElement.length ?
        [snakeHeadPos, ...snakeTailPos, prizeSnakeElement] : [snakeHeadPos, ...snakeTailPos];
    }, 1000);
  }

  getRandomInt(min, max, exceptedValues) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomValue = Math.floor(Math.random() * (max - min)) + min;
    return (exceptedValues.indexOf(randomValue) !== -1) ? this.getRandomInt(min, max, exceptedValues) : randomValue;
  }
}
