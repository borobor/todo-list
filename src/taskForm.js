export { createModal, submitNewTask, hideModal };

function createModal() {
  const priorityOptions = [
    'Urgent',
    'Keep it in mind',
    'Whenever'
  ];
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
  date.setAttribute('id', 'date');
  date.setAttribute('type', 'date');

  const priority = document.createElement('button');
  priority.setAttribute('id', 'priorityBtn');
  priority.textContent = 'Set priority';

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

  const priorityBtn = document.getElementById('priorityBtn');
  priorityBtn.addEventListener('click', ({ target }) => {
    target.textContent = priorityOptions[0];
    // let index = 0;
    // if (target.textContent != 'Set priority') {
    //   if (index > priorityOptions.length - 1) index = 1;
    //   target.textContent = priorityOptions[index];
    //   index++;
    // }
    // if (target.textContent == 'Set priority') {
    //   target.textContent = priorityOptions[0];
    // }
  })
}

function submitNewTask() {
  
  const taskTitle = document.getElementById('title');
  //task title has to be required!!! other inputs are optional !!!
  //fix that ASAP!
  const taskDescription = document.getElementById('description');
  const taskDate = document.getElementById('date');
  const taskPriority = document.getElementById('priorityBtn');
  
  const title = taskTitle.value;
  const description = taskDescription.value;
  const date = taskDate.value;
  const priority = taskPriority.textContent;

  const newTask = new Task({title, description, date, priority});
  return newTask;
}

function hideModal() {
  const myModal = document.getElementById('modal');
  myModal.style.display = 'none';
}

function Task({
  title,
  description,
  date,
  priority,
}) {
  this.title = title;
  this.description = description;
  this.date = date;
  this.priority = priority;
}