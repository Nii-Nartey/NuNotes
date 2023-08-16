const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');

//localStorage Handler (saving and loading)
const saveData = () => {
  localStorage.setItem('saveName', notesContainer.innerHTML);
};

const loadData = () => {
  notesContainer.innerHTML = localStorage.getItem('saveName');
};

//create New Note Function Handler
createBtn.addEventListener('click', () => {
  const newNote = document.createElement('p');
  const delImg = document.createElement('img');

  newNote.className = 'input-box';
  newNote.contentEditable = 'true';
  delImg.src = './assets/images/delete.png';
  delImg.className = 'delete-btn';
  notesContainer.appendChild(newNote).appendChild(delImg);
});

//Delete Note Btn Handler
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    let target = e.target;
    target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === 'P') {
    let notes = document.querySelectorAll('.input-box');
    notes.forEach((inputParam) => {
      inputParam.onkeyup = () => {
        saveData();
      };
    });
  }
});

window.addEventListener('load', loadData);
