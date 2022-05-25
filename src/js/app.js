
// let ul = document.querySelectorAll('#ul li');
// for (let i = 0; i < ul.length; i++)
// {
//    ul[i].addEventListener('click', addSign);
// }
// function addSign()
// {     
//    this.innerHTML += '!';
// }
//-------------------------------------------------------------------------
// let ul = document.querySelector('#ul2');
// ul.addEventListener('click', (event) => {

//    event.target.closest('li').innerHTML += '!';
// });
// let ul = document.querySelector('#ul3');
// ul.addEventListener('click', (event) =>
// {
//    event.target.closest('li').innerHTML += '!';
// });

// let button = document.querySelector('.button');
// button.addEventListener('click', addLi);
// function addLi()
// {
//    let newLi = document.createElement('li');
//    newLi.innerHTML = 'Новая LI';
//    ul.appendChild(newLi);
// }
//---------------------------ЗАДАЧИ----------------------------------------
// 1. Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

let ul = document.querySelector('#ul4');
ul.addEventListener('click', (event) =>
{
   event.target.closest('li').innerHTML += '!';
});

let button2 = document.querySelector('.button2');
button2.addEventListener('click', addLi);
function addLi()
{
   let newLi = document.createElement('li');
   newLi.innerHTML = 'Новая LI';
   ul.appendChild(newLi);
}
// 2. Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
let table = document.querySelector('.table')
table.addEventListener('click', addName);

function addName(event){
   let str;
   if (event.target.tagName == 'TD') 
   event.target.closest('td').innerHTML = prompt('Введите данные', str);
}