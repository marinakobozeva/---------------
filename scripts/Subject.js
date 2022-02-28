export default class Subject {
  constructor(name, color, selector, handleDelete) {
    this._name = name;
    this._color = color;
    this._selector = selector;
    this._handleDelete = handleDelete;
  }

  render() {
    const subject = document.querySelector(this._selector).content.cloneNode(true);
    this._subject = subject.querySelector('.subject__name');
    this._subject.querySelector('.subject__name-title').textContent = this._name;
    this._subject.style.backgroundColor = this._color;
    return subject;
  }

  delete() {
    this._subject.remove();
  }

  setEventListeners() {
    const subjectDeleteBtn = this._subject.querySelector('.subject__delete-button');
    subjectDeleteBtn.addEventListener('click', () => {this._handleDelete(this)});
  }

}