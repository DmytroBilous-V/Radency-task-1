import { removeNote } from '../actions/removeNote.js';
import { editNote } from '../actions/editNote.js';

const activeList = document.getElementById("actile-list");

export const initNotes = (notes) => {
    const className ="active-list_item";
    const elementsList = notes.map((el, index) => {
        return `<div class="${className}" id="${index}">
            <span class="${el.category.icon}"></span>
            <input value="${el.name}" readonly/>
            <span>${el.created}</span>
            <input value="${el.category.name}" readonly/>
            <input value="${el.content}" readonly/>
            <span>${el.dates}</span>
            <div class="active-list_item__btn-block">
                <span class="fas fa-edit"></span>
                <span class="fas fa-download"></span>
                <span class="far fa-trash-alt"></span>
            </div>
        </div>`
    });
    showList(elementsList);
    setListeners();
}

function showList (elements) {
    let outHtml = '';
    for (let key in elements) {
        outHtml += elements[key];
    }
    activeList.innerHTML = outHtml;
}

function setListeners () {
    const removeBtn = document.getElementsByClassName("far fa-trash-alt");
    const editBtn = document.getElementsByClassName("fas fa-edit");
    for (let btn of removeBtn) {
        btn.addEventListener('click', () => removeNote(btn));
    }
    for (let btn of editBtn) {
        btn.addEventListener('click', () => editNote(btn));
    }
}
