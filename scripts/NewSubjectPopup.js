import Popup from "./Popup.js";
export default class NewSubjectPopup extends Popup {
  constructor(selector, callback) {
    super(selector);
    this._callback = callback;
  }

  _setEventListeners() {
    super._setEventListeners();
    const saveBtn = this._popup.querySelector('.popup__add-button');
    saveBtn.addEventListener('click', () => {
      this._callback(this._getInputValues());
      this.close();
    })
  }

  _getInputValues() {
    const subjectName = this._popup.querySelector('.popup__input-name');
    const subjectColor = this._popup.querySelector('.popup__input-color');

    return {
      'name': subjectName.value,
      'color': subjectColor.value,
    }
  }
}