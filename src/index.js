import './style.css';
import { createModal, submitNewTask, hideModal } from './taskForm.js';

const content = document.getElementById('content');
const header = document.createElement('div');
const headerLogo = document.createElement('div');
const headerButton = document.createElement('button');

header.classList.add('header');
headerLogo.classList.add('header-logo');
headerButton.classList.add('header-button');
// headerButton.setAttribute('id', 'modalBtn');

headerLogo.textContent = 'TodoMist';
headerButton.textContent = 'Add task';

header.appendChild(headerLogo);
header.appendChild(headerButton);
content.appendChild(header);

// const modalBtn = document.getElementById('modalBtn');
// modalBtn.addEventListener('click', showModal);
headerButton.addEventListener('click', showModal);

function showModal() {
  createModal();
  const submitBtn = document.getElementById('submitBtn');
  submitBtn.addEventListener('click', getTaskData);
}

function getTaskData() {
  displayTask(new Task(submitNewTask()));
  hideModal();
}

function Task({
  title,
  description,
  date,
  priority,
  id,
  element,
}) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
  this.id = id || Math.floor(Math.random()*1000)
  this.element = element;
}

const myTasks = {};

function displayTask(taskData) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskData.element = taskItem;
  Object.entries(taskData).forEach(([key, value]) => {
    if (key === 'element') return;
    if (key === 'id') return;
    if (value === 'Set priority') return;
    const taskElement = document.createElement('p');
    taskElement.classList.add(`task-${key}`);
    taskElement.textContent = value;
    taskItem.appendChild(taskElement);
  })

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  taskItem.appendChild(deleteBtn);

  content.appendChild(taskItem);

  myTasks[taskData.id] = taskData;
}

function deleteTask({ target }) {
  const parentTask = target.closest('.task');
  parentTask.parentNode.removeChild(parentTask);

  delete myTasks[getTaskId(parentTask)];
  console.log(myTasks);
}

function getTaskId(node) {
  const [id] = Object.entries(myTasks).find(([id, { element }]) => {
    return element === node;
  })
  return id;
}