"use strict";
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

// let ul = document.querySelector('#ul4');
// ul.addEventListener('click', (event) =>
// {
//    event.target.closest('li').innerHTML += '!';
// });

// let button2 = document.querySelector('.button2');
// button2.addEventListener('click', addLi);
// function addLi()
// {
//    let newLi = document.createElement('li');
//    newLi.innerHTML = 'Новая LI';
//    ul.appendChild(newLi);
// }
// // 2. Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму, с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки. Задачу решите с помощью делегирования (то есть событие должно быть навешано на table).
// let table = document.querySelector('.table')
// table.addEventListener('click', addName);

// function addName(event){
//    let str;
//    if (event.target.tagName == 'TD') 
//    event.target.closest('td').innerHTML = prompt('Введите данные', str);
// }
// ------------------------------------------------Работа с формами--------------------------------------------------
//  1. Дана форма с id="form". В ней даны инпуты, в них числа. Дана кнопка. По нажатию на эту кнопку получите форму по ее id, затем циклом переберите все инпуты в ней и найдите сумму чисел из этих инпутов.

// let button = document.querySelector('.form-button');

// button.addEventListener('click', sumIn)

// function sumIn()
// {
//    let form = document.querySelector('#form');
//    let sum = 0;
//    for (let i = 0; i < form.elements.length; i++)
//    {
//       sum += Number(form.elements[i].value);
//    }
//    alert('Сумма чисел равна:' + sum);
// }
// console.log(form.elements[0].innerHTML);
//  2. На странице расположено несколько форм. В них есть инпуты, в инпутах числа. Дана кнопка. По нажатию на эту кнопку циклом переберите все формы на странице, затем циклом переберите все инпуты в каждой форме и найдите сумму чисел из всех этих инпутов. 
// let button = document.querySelector('.form-button2');
// button.addEventListener('click', sumAllIn);

// function sumAllIn()
// {
//    let sum = 0;
//    let form = document.forms;
//    for (let i = 1; i < form.length; i++)
//    {  
//       console.log()
//       for (let k = 0; k < form[i].elements.length; k++)
//       {
//          sum += Number(form[i].elements[k].value);
//       }
//    }
//    console.log(alert('Сумма чисел всех инпутов - ' + sum));
// }


// -------------------------------------------------Работа с селектами-------------------------------------------------
//  1. Дан селект. Дан инпут. По изменению селекта выведите текст выбранного пункта в инпут.
let select = document.querySelector('#select');
let input = document.querySelector('.inp');

 select.addEventListener('change', function()
 {
   input.value = this.options[this.selectedIndex].text;
 });
//  2. Дан селект. Дан инпут. Дана кнопка. Сделайте так, чтобы в инпут можно было ввести число, нажать на кнопку и в селекте становился выбранным пункт с этим номером.

//  3. Дан селект со списком стран. Сделайте так, чтобы при выборе страны рядом появлялся еще и селект со списком городов из этой страны.

//  Даны 3 селекта: с днем, с месяцем и годом. Сделайте так, чтобы некорректную дату нельзя было выбрать.

// Замыкание
// var a = 12;
// function f(){
//    var b = 45;
//    console.log(a);   // Область функции f замкнута на переменной a
//    console.log(b);   
// }
// f();
// f();
// f();
//----------------
// function Counter()
// {
//    let count = 0;
//    return function()
//    {
//       count++;

//       return count;
//    }
// }
// let counter = Counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(x);
// var x = 10;