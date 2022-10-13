// let i = 0;

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const link = document.querySelector('a');
const deleteElement = (e) => {
        console.log(e.currenttarget);
        console.log(e.type);
        
        // i++;
        // if (i ==1) {
        //     btn.removeEventListener('click', deleteElement);
        // };


btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
link.addEventListener('click', function(event) {
    event.preventDefault;

    console.log(event.target);
    }
);

