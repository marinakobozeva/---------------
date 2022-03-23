import Popup from "./Popup.js";
export default class ClearSchedule extends Popup {
  constructor(selector, handleOkClick) {
    super(selector);
    this._handleOkClick = handleOkClick;
  }

  _setEventListeners() {
    super._setEventListeners();
    const okBtn = this._popup.querySelector('.popup__add-button');
    okBtn.addEventListener('click', () => {
      this._handleOkClick();
      this.close();
    });

  }
}