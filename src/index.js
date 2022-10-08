import './style.css';
import { createModal, submitNewTask, hideModal } from './taskForm.js';

const content = document.getElementById('content');
const header = document.createElement('div');
const headerLogo = document.createElement('div');
const headerButton = document.createElement('button');

header.classList.add('header');
headerLogo.classList.add('header-logo');
headerButton.classList.add('header-button');
headerButton.setAttribute('id', 'modalBtn');

headerLogo.textContent = 'TodoMist';
headerButton.textContent = 'Add task';

header.appendChild(headerLogo);
header.appendChild(headerButton);
content.appendChild(header);

const modalBtn = document.getElementById('modalBtn');
modalBtn.addEventListener('click', showModal);

function showModal() {
  createModal();
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', addNewTask);
}

function addNewTask() {
  hideModal();
  console.log(submitNewTask());
}