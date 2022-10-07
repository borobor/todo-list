import './style.css';
import pic from './img/wpicon.png'

const content = document.getElementById('content');

content.textContent = 'Hello Borna';

const icon = new Image();
icon.src = pic;

content.appendChild(icon);
