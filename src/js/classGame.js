export default class Game {
  constructor(board, points) {
    this.board = board;
    this.points = points;
    this.onBoardClick = this.onBoardClick.bind(this);
    this.board.element.addEventListener('click', this.onBoardClick);
    this.emptyClicks = 0;
  }

  onBoardClick(e) {
    if (e.target.classList.contains('goblin')) {
      this.hideGoblin();
      this.points.addPoint();
    } else {
      this.emptyClicks += 1;
      this.gameOver();
    }
  }

  gameOver() {
    if (this.emptyClicks === 5) {
      clearInterval(this.timeout);
      this.hideGoblin();
      alert('Game over');
      this.start();
    }
  }

  getRndCell() {
    const rndIndex = Math.floor(Math.random() * this.board.cells.length);
    const rndCell = this.board.cells[rndIndex];
    return rndCell;
  }

  createGoblin() {
    const img = document.createElement('img');
    img.classList.add('goblin');
    img.src =
      'https://github.com/netology-code/ahj-homeworks/raw/AHJ-50/dom/pic/goblin.png';
    this.goblinImg = img;
  }

  moveGoblin() {
    const cell = this.getRndCell();
    if (this.goblinCell === cell) {
      this.moveGoblin();
    } else {
      cell.append(this.goblinImg);
      this.goblinCell = cell;
    }
  }

  hideGoblin() {
    this.goblinCell.innerHTML = '';
  }

  start() {
    this.createGoblin();
    this.goblinCell = null;
    this.emptyClicks = 0;
    this.points.resetPoints();
    this.timeout = setInterval(this.moveGoblin.bind(this), 1500);
  }
}
