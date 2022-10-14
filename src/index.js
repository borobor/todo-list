import './style.css';
import { createModal, submitNewTask, hideModal, shakeElement } from './taskForm.js';

const myTasksObject = (function() {
  const myTasks = JSON.parse(localStorage.getItem('myTasks')) || {};
  setInterval(() => {
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
  }, 200);
  return myTasks;
})();

const createPage = function() {
  const content = document.getElementById('content');
  const header = document.createElement('div');
  const headerLogo = document.createElement('div');
  const headerButton = document.createElement('button');
  
  header.classList.add('header');
  headerLogo.classList.add('header-logo');
  headerButton.classList.add('header-button');
  
  headerLogo.textContent = 'TodoMist';
  headerButton.textContent = 'Add task';
  
  header.appendChild(headerLogo);
  header.appendChild(headerButton);
  content.appendChild(header);
  
  headerButton.addEventListener('click', showModal);

  const myTasks = myTasksObject;
  if (Object.keys(myTasks).length) {
    Object.values(myTasks).forEach(task => {
      displayTask(task);
    })
  }
};

createPage();

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
  finished = false,
}) {
  this.title = title;
  this.description = description;
  this.priority = priority;
  this.date = date;
  this.id = id || Math.floor(Math.random()*1000)
  this.element = element;
  this.finished = finished;
}

function displayTask(taskData) {
  const taskItem = document.createElement('div');
  taskItem.classList.add('task');
  taskData.element = taskItem;
  const taskDoneBox = document.createElement('input');
  taskDoneBox.setAttribute('type', 'checkbox');
  taskDoneBox.classList.add('task-box');
  taskDoneBox.addEventListener('click', onClickTaskDone);
  taskItem.appendChild(taskDoneBox);
  Object.entries(taskData).forEach(([key, value]) => {
    if (key === 'element') return;
    if (key === 'id') return;
    if (key === 'description') return;
    if (key === 'finished') return;
    if (value === 'Set priority') return;
    const taskElement = document.createElement('p');
    taskElement.classList.add(`task-${key}`);
    taskElement.textContent = value;
    taskItem.appendChild(taskElement);
  })

  if (taskData.finished) {
    taskItem.classList.add('checked');
    taskDoneBox.checked = true;
  }

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', deleteTask);

  taskItem.appendChild(deleteBtn);

  content.appendChild(taskItem);

  const myTasks = myTasksObject;
  myTasks[taskData.id] = taskData;
}

function deleteTask({ target }) {
  const myTasks = myTasksObject;
  const parentTask = target.closest('.task');
  const taskObject = getTaskId(parentTask);
  
  if (myTasks[taskObject].finished === false) {
    const checkbox = parentTask.querySelector('.task-box');
    shakeElement(checkbox);
    return;
  }

  parentTask.parentNode.removeChild(parentTask);
  delete myTasks[taskObject];
}

function getTaskId(node) {
  const myTasks = myTasksObject;
  const [id] = Object.entries(myTasks).find(([id, { element }]) => {
    return element === node;
  })
  return id;
}

function onClickTaskDone({ target }) {
  const parentTask = target.closest('.task');
  const myTasks = myTasksObject;
    const taskId = getTaskId(parentTask);
  const isDone = myTasks[taskId].finished;
  myTasks[taskId].finished = !isDone;
  parentTask.classList.remove('checked');

  if (!isDone) {
    parentTask.classList.add('checked');
  }
}
