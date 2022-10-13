'use strict';

const box =document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'

btns[1].style.borderRadius = '50%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0;i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item =>{
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('i was here)');

div.classList.add('black');

document.querySelector('.wrapper').append(div);
// wrapper.append(div);
// wrapper.prepend(div);
// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove;

// hearts[0].replaceWith(circles[0]);

div.innerHTML ='<h1>hello world</h1>';
// div.textContent = "hellooo";

div.insertAdjacentHTML('afterend', "<h2>Hello</h2>");