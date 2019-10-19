let list =document.getElementsByTagName('li');
let [...li]=list;
li.forEach(x =>{
    console.log(x);
    x.classList.add('anu');
    x.innerHTML='hai guys ';
});
