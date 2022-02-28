export default class Popup {
  constructor(selector) {
    this._selector = selector;
  }

  generate() {
    this._popup = document.querySelector(this._selector);
    this._setEventListeners();
  }

  open() {
    this._popup.classList.remove('popup__hidden');
  }

  close() {
    this._popup.classList.add('popup__hidden');
  }

  _setEventListeners() {
    const closeIcon = this._popup.querySelector('.popup__close-icon');
    closeIcon.addEventListener('click', () => { this.close() });
  }
}