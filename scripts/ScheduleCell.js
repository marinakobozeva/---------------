export default class ScheduleCell {
  constructor(selector, handleClick, handleDblClick) {
    this._selector = selector;
    this._handleClick = handleClick;
    this._handleDblClick = handleDblClick;
  }

  render() {
    const cell = document.querySelector(this._selector).content.cloneNode(true);
    this._cell = cell.querySelector('.schedule__subject');
    return cell;
  }

  setEventListeners() {
    this._cell.addEventListener('click', () => {this._handleClick(this)});
    this._cell.addEventListener('dblclick', () => {this._handleDblClick(this)});
  }

  setProperties({name, color}) {
    this._cell.style.backgroundColor = color;
    this._cell.textContent = name;
  }

  resetDefault() {
    this._cell.style.backgroundColor = 'white';
    this._cell.textContent = '';
  }
}