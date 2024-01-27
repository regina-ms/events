export default class Board {
  constructor(sideSize, element) {
    this.sideSize = sideSize;
    this.cells = [];
    this.element = element;
  }

  createCells() {
    for (let i = 0; i < Math.pow(this.sideSize, 2); i += 1) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      this.cells.push(cell);
    }
  }

  render() {
    const board = document.createElement('div');
    board.classList.add('board');
    this.createCells();
    for (let cell of this.cells) {
      board.append(cell);
    }
    this.element.append(board);
  }
}
