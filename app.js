const switchBtn = document.getElementById('switch');
const nob = document.getElementById('nob');
const light = document.querySelector('.light');
const menuBtn = document.querySelector('.menu-img');
const closeBtn = document.querySelector('.close');
const menu = document.querySelector('.menu-links');

console.log(menu)

switchBtn.addEventListener('click', ()=>{
    nob.classList.toggle('active');
    light.classList.toggle('bright');
});

menuBtn.addEventListener('click', ()=>{
    menu.classList.add('open');
});

closeBtn.addEventListener('click', ()=>{
    menu.classList.remove('open');
})