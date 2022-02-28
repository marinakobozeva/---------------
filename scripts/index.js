import NewSubjectPopup from "./NewSubjectPopup.js";
import Subject from "./Subject.js";
import Popup from "./Popup.js";
import { initialSubjects } from "./InitialSubjects.js";

// Объявление переменных
const newSubjectBtn = document.querySelector('.subject__new-subject-button'); // Кнопка 'добавить предмет'
const subjectPopup = new NewSubjectPopup('.page_popup_type_new-subject', (object) => {addSubject(object)});
subjectPopup.generate();

const deleteScheduleBtn = document.querySelector('.schedule__button-clear'); // Кнопка 'очистить расписание'
const deletePopup = new Popup('.page_popup_type_delete');
deletePopup.generate();

const subjectsContainer = document.querySelector('.subject__container');

// Инициализация изначальных предметов
function subjectsRender() {
  for (let item of initialSubjects) {
    addSubject(item);
  }
}

subjectsRender();

// Удаление предмета
function deleteSubject(subject) {
  subject.delete();
}

function addSubject(item) {
  let subject = new Subject(item.name, item.color, '.subject__template', deleteSubject);
  subjectsContainer.append(subject.render());
  subject.setEventListeners();
}

// Клик по кнопке 'Добавить предмет'
newSubjectBtn.addEventListener('click', () => {
  subjectPopup.open();
})



console.log(subjectsContainer);

let scheduleCells = document.querySelectorAll('.schedule__subject');
console.log(scheduleCells);

let container = Array.from(subjectsContainer);
let color = 'white';

function changeColor(item) {
  item.addEventListener('click', () => {
    console.log(item.style.backgroundColor);
  })
}
for (let subject of container) {
  subject.addEventListener('click', changeColor)
}

for (let cell of scheduleCells) {
  cell.addEventListener('click', () => {
    cell.style.backgroundColor = color;
  })
}

// Клик по кнопке 'Добавить предмет'
deleteScheduleBtn.addEventListener('click', () => {
  deletePopup.open()
});







