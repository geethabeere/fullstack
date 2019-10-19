var oddbutton = document.getElementById('add');
var evenbutton = document.getElementById('even');


var oddli = document.querySelectorAll('li:nth-child(odd)');
var evenli = document.querySelectorAll('li:nth-child(even)');
 //acecces dom  with events
 oddbutton.addEventListener('mouseenter', () => {
console.log('mouse entered ...odd');
oddli.forEach(x =>{
    x.classList.add('odd');
});
evenli.forEach(x =>{
 x.classList.remove('even');
    
});
 });
 evenbutton.addEventListener('mouseenter', () => {
    console.log('mouse entered ...even');
    evenli.forEach(y => {
        y.classList.remove('even');
    });
    oddli.forEach(y => {
     y.classList.add('odd');
        
    });
     });