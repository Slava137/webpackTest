import { doSomething } from './module';
import style from './style.css';
import style2 from './style2.css';
import image from './assets/prototype.png';
import svginline from './assets/sorc.inl.svg';
import myf from './file.myf';

const img = document.createElement('img');
img.src = image;
document.body.appendChild(img);
// console.log(svginline);

const imgl = document.createElement('div');
imgl.innerHTML = svginline;
document.body.appendChild(imgl);
doSomething();

console.log('Hello World!');

for (let i = 0; i < 10; i++) {
  console.log('first');
}
function createEl(style:string, text:string) {
  const el = document.createElement('div');
  el.textContent = (text);
  el.className = style;
  document.body.appendChild(el);
}

createEl(style.stYLe, 'Element from TS');

createEl(style2.style, myf);

const b:string = 'dfs';

setTimeout(() => {
  const a = 'dsf';
  console.log(a + b);
}, 100);
