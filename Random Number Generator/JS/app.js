const section = document.querySelector('section');
const div = document.querySelector('div');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');

button.addEventListener('click',function(){
    let x = Math.random().toString(10).slice(2,5);
    console.log(x);
    h1.innerText = x;
});