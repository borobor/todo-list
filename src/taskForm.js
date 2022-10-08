export default showModal;

function showModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.setAttribute('id', 'modal');

  const modalBox = document.createElement('div');
  modalBox.classList.add('modal-box');

  const modalTitle = document.createElement('div');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = 'Add new task';


  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const title = document.createElement('input');
  title.setAttribute('id', 'title');
  title.setAttribute('placeholder', 'Task title')

  const description = document.createElement('textarea');
  description.setAttribute('id', 'description');
  description.setAttribute('placeholder', 'Details..');

  const date = document.createElement('input');
  date.setAttribute('type', 'date');

  const priority = document.createElement('button');
  priority.textContent = 'Priority';

  const submit = document.createElement('button');
  submit.textContent = 'Add task';
  submit.setAttribute('id', 'submitBtn');

  modalContent.appendChild(title);
  modalContent.appendChild(description);
  modalContent.appendChild(date);
  modalContent.appendChild(priority);
  modalContent.appendChild(submit);

  modalBox.appendChild(modalTitle);
  modalBox.appendChild(modalContent);

  modal.appendChild(modalBox);

  content.appendChild(modal);

  const myModal = document.getElementById('modal');
  myModal.style.display = 'flex';

  window.addEventListener('click', ({ target }) => {
    if (target == myModal) {
      myModal.style.display = 'none';
    }
  })

  const mySubmit = document.getElementById('submitBtn');
  mySubmit.addEventListener('click', handleForm);
}

function handleForm({ target }) {

}