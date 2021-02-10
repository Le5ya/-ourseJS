'use strict';
const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const a = document.querySelectorAll('a');
const newElem = document.createElement('li');
const li = document.querySelectorAll('li');

books.prepend(book[1]);
books.append(book[2]);
adv.remove();
book[3].before(book[4]);

document.querySelector('body').style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

a[4].textContent = "Книга 3. this и Прототипы Объектов";
newElem.textContent = "Глава 8: За пределами ES6";
li[25].after(newElem);
li[3].after(li[6]);
li[6].after(li[8]);
li[50].after(li[48]);
li[47].after(li[55]);


