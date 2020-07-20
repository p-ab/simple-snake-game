import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Observable, interval, defer, BehaviorSubject } from 'rxjs';
import { filter, map, switchMap, withLatestFrom, repeat } from 'rxjs/operators';

enum KeyCodeEnum {
  right = 39, left = 37, up = 38, down = 40,
  space = 32, enter = 13
}
interface SnakeInterface {
  positions: number[];
  points: number;
  speed: number;
  direction: 'right'|'left'|'up'|'down';
  orientation: 'horizontal'|'vertical';
}
@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {

  grid = {
    rows: 10, columns: 10,
    getTotal() { return this.rows * this.columns; }
  };
  defaultSpeed = 700;
  snake: SnakeInterface;

  feed = { points: 10, position: null };

  gameStates = { isOver: false, isPaused: false, isStarted: false };
  gameObserver: { time: Observable<any> };
  pauseSubject = new BehaviorSubject(true);
  intervalSubject = new BehaviorSubject(this.defaultSpeed);

  iterations = 0;
  keyboardLocked = false;

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    // tslint:disable-next-line: deprecation
    switch (event.keyCode) {
      case KeyCodeEnum.right: this.changeDirection('right'); break;
      case KeyCodeEnum.up: this.changeDirection('up'); break;
      case KeyCodeEnum.left: this.changeDirection('left'); break;
      case KeyCodeEnum.down: this.changeDirection('down'); break;
      case KeyCodeEnum.space:
        this.togglePause();
        break;
      case KeyCodeEnum.enter:
        this.initGame();
        break;
      default:
        this.changeDirection('right');
    }
  }

  @HostListener('window:keydown', ['$event'])
  preventScroll(event) {
    switch (event.keyCode) {
      case 37: case 39: case 38:  case 40:
      case 32: event.preventDefault(); break;
      default: break;
    }
  }
  constructor() {}

  ngOnInit() {
    this.initGame();
  }

  initGame() {
    this.gameStates.isOver = false;
    this.snake = {
      positions: [], points: 0, speed: this.defaultSpeed,
      direction: 'right', orientation: 'horizontal'
    };
    this.feed = { points: 10, position: null };

    const initPos = this.randomPos();
    const indent = initPos % this.grid.columns;
    const startPos = this.grid.columns - indent < 3 ? initPos - 3 : initPos;

    this.snake.positions.push(startPos);
    this.feed.position = this.randomPos();

    this.gameStates.isStarted = true;
    this.gameStates.isPaused = true;

    this.gameObserver = this.getTimer(this.pauseSubject);
  }

  // to-do: rewrite.
  togglePause() {
    if (this.gameStates.isPaused) {
      this.gameStates.isPaused = false;
      this.pauseSubject.next(false);
    } else {
      this.gameStates.isPaused = true;
      this.pauseSubject.next(true);
    }
  }

  getTimer(pause: BehaviorSubject<boolean>) {
    const pausable$ = defer(() => {
      return this.intervalSubject.pipe(
        switchMap(value => interval(value)),
        withLatestFrom(pause),
        filter(([v, paused]) => !paused),
        repeat(),
        map(() => {
          this.intervalSubject.next(this.snake.speed);
          this.gameAction();
        })
      );
    });

    return { time: pausable$ };
  }

  generateGridList() {
    const list = [... Array(this.grid.getTotal()).keys()];
    return list;
  }

  randomPos() {
    // value from 0 (inclusive) to total grid cells count (exclusive):
    const index = Math.trunc(Math.random() * this.grid.getTotal());
    return this.snake.positions.indexOf(index) === -1 ? index : this.randomPos();
  }

  changeDirection(vector: 'right' | 'left' | 'up' | 'down') {
    const {orientation} = this.snake;
    const horCondition = ['right', 'left'].indexOf(vector) === -1 && orientation === 'horizontal';
    const vertCondition = ['up', 'down'].indexOf(vector) === -1 && orientation === 'vertical';
    if (!this.keyboardLocked && (horCondition || vertCondition)) {
      this.keyboardLocked = true;
      this.snake.orientation = orientation === 'vertical' ? 'horizontal' : 'vertical';
      this.snake.direction = vector;
    }
  }

  gameAction() {
    const moveSnake = () => {
      const {rows, columns} = this.grid;
      const {direction, positions} = this.snake;
      const tailPos = positions.slice(0, -1);
      const headPos = this.makeStep(positions[0], direction);
      const coords = (() => {
        // y reffers to rows, x reffers to columns
        const y = Math.trunc(positions[0] / columns);
        const x = positions[0] - y * columns;
        return {x, y};
      })();

      const collisionTriggers = [
        direction === 'right' && coords.x === columns - 1,
        direction === 'left' && coords.x === 0,
        direction === 'down' && coords.y === rows - 1,
        direction === 'up' && coords.y === 0,
        tailPos.indexOf(headPos) !== -1
      ];
      for (const collision of collisionTriggers) {
        if (collision) { this.setError('Whoops'); }
      }

      let rewardEl: number;
      if (headPos === this.feed.position) { rewardEl = this.rewardForFeed(); }
      this.snake.positions = rewardEl === undefined ? [headPos, ...tailPos] : [headPos, ...tailPos, rewardEl];
      this.keyboardLocked = false;
      this.iterations++;
      return this.iterations;
    };
    return moveSnake();
  }

  makeStep(position, direction) {
    switch (direction) {
      case 'right': return position + 1;
      case 'left': return position - 1;
      case 'up': return position - this.grid.columns;
      case 'down': return position + this.grid.columns;
    }
  }

  rewardForFeed() {
    const {speed} = this.snake;
    this.feed.position = this.randomPos();
    this.feed.points += 20;
    this.snake.points += this.feed.points;
    this.snake.speed = speed > 120 ? speed - 70 : speed;
    // return last snake element as a bonus
    return this.snake.positions[this.snake.positions.length - 1];
  }

  setError(msg = '') {
    if (msg) { console.error(msg); }
    this.gameStates.isOver = true;
    this.pauseSubject.next(true);
    throw new Error('game over!');
  }

}
