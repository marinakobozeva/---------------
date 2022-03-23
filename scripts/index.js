
import ClearSchedulePopup from "./ClearSchedulePopup.js";
import NewSubjectPopup from "./NewSubjectPopup.js";
import ScheduleCell from "./ScheduleCell.js";
import Subject from "./Subject.js";
import Popup from "./Popup.js";
import { initialSubjects } from "./InitialSubjects.js";

// Объявление переменных
const newSubjectBtn = document.querySelector('.subject__new-subject-button'); // Кнопка 'добавить предмет'
const subjectPopup = new NewSubjectPopup('.page_popup_type_new-subject', (object) => {addSubject(object)});
subjectPopup.generate();

const deleteScheduleBtn = document.querySelector('.schedule__button-clear'); // Кнопка 'очистить расписание'
const deletePopup = new ClearSchedulePopup('.page_popup_type_delete', clearSchedule);
deletePopup.generate();

const subjectsContainer = document.querySelector('.subject__container');
const scheduleContainer = [];

let selectedSubject = null;

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
  let subject = new Subject(item.name, item.color, '.subject__template', deleteSubject, selectSubject);
  subjectsContainer.append(subject.render());
  subject.setEventListeners();
}

// Клик по кнопке 'Добавить предмет'
newSubjectBtn.addEventListener('click', () => {
  subjectPopup.open();
})

// Клик по кнопке 'Добавить предмет'
deleteScheduleBtn.addEventListener('click', () => {
  deletePopup.open()
});

// Клик по предмету
function selectSubject(subject) {
  if (selectedSubject === null) {
    selectedSubject = subject;
  } else if (selectedSubject === subject) {
    selectedSubject = null;
  } else if (selectedSubject !== subject) {
    selectedSubject._subject.classList.toggle('selected');
    selectedSubject = subject;
  }
  subject._subject.classList.toggle('selected');
}

// Клик по ячейке
function clickOnCell(cell) {
  if (selectedSubject === null) {
    return null;
  }
  cell.setProperties(selectedSubject.getProperties());
}

//Двойной клик по ячейке
function dblClickOnCell(cell) {
  cell.resetDefault();
}

// Отрисовка ячеек расписания
const scheduleParts = document.querySelectorAll('.schedule__part');
for (let part of scheduleParts) {
  for (let i = 0; i < 7; i++) {
    let cell = new ScheduleCell('.schedule__cell-template', clickOnCell, dblClickOnCell);
    part.append(cell.render());
    cell.setEventListeners();
    scheduleContainer.push(cell);
  }
}

// Очистка расписания
function clearSchedule() {
  scheduleContainer.forEach((item) => {item.resetDefault()});
}



