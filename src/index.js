import './style.css';

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

headerButton.addEventListener('click', showTaskForm);