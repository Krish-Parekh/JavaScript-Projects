const input = document.querySelector('input');
const button = document.querySelector('button');
const span = document.querySelector('span');
const span1 = document.querySelector('span1');
const span2 = document.querySelector('span2');
button.addEventListener('click',()=>{
    let n = input.value;
    span.innerHTML = Math.floor(n*100*35.27396)/100;
    span1.innerHTML = Math.floor(n*0.001102*100)/100;
    span2.innerHTML = Math.floor(n*2.204623*100)/100;
    
});