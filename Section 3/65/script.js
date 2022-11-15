'use strict';

// const timerId = setTimeout(function(text) {
//     console.log(text);
    
// }, 2000, 'hello')
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

    function myAnimation ( ) {
        const elem = document.querySelector('.box');
        let pos = 0;
        
        const id = setInterval(frame, 10);

        function frame() {
            if (pos == 300) {
                clearInterval(id);

            } else {
                pos++;
                elem.style.top = pos +"px";
                elem.style.left = pos +"px";
            }
        }

    }

    btn.addEventListener('click', myAnimation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger,2000);
// })

// clearInterval(timerId);

// function logger () {
//     console.log('text');
    
// }

// const id =  setTimeout(function log() {
//     console.log('holle');
//     id = setTimeout(log, 2000);
    
// }, 500);
