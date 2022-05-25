
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
let ul = document.querySelector('#ul3');
ul.addEventListener('click', (event) =>
{
   event.target.closest('li').innerHTML += '!';
});

let button = document.querySelector('.button');
button.addEventListener('click', addLi);
function addLi()
{
   let newLi = document.createElement('li');
   newLi.innerHTML = 'Новая LI';
   ul.appendChild(newLi);
}
