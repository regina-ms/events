import './css/style.scss';
import Board from './js/classBoard';
import Game from './js/classGame';
import Points from './js/classPoints';

const root = document.querySelector('#root');

const board = new Board(4, root);
board.render();

const points = new Points(root);
points.render();

const game = new Game(board, points);
game.start();
