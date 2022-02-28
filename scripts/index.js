import NewSubjectPopup from "./NewSubjectPopup.js";
import { initialSubjects } from "./InitialSubjects.js";

const newSubjectBtn = document.querySelector('.subject__new-subject-button');
const subjectPopup = new NewSubjectPopup('.page_popup_type_new-subject', (object) => {console.log(object)});
subjectPopup.generate();

const subjectsContainer = document.querySelector('.subject__container');
const subjectTemplate = document.querySelector('.subject__template').content;

function subjectsRender() {
  for (let item of initialSubjects) {
    let subject = subjectTemplate.querySelector('.subject__name').cloneNode(true);
    subject.querySelector('.subject__name-title').textContent = item['popup__input-name'];
    subject.style.backgroundColor = item['popup__input-color'];
    subjectsContainer.append(subject);
  }
}

newSubjectBtn.addEventListener('click', () => {
  subjectPopup.open();
})

subjectsRender();

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









