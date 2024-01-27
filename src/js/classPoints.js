export default class Points {
  constructor(element) {
    this.point = 0;
    this.element = element;
    this.points = document.createElement('div');
    this.points.classList.add('points');
    this.element.append(this.points);
  }

  addPoint() {
    this.point += 1;
    this.render();
  }

  resetPoints() {
    this.point = 0;
    this.render();
  }

  render() {
    this.points.innerHTML = `Points: ${this.point}`;
  }
}
