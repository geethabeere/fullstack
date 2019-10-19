//replace method
let str ='heelo nodejs and nodejs and ruby';
let result=str.indexOf('1');
let total=str.replace('nodejs','java');
console.log(total);

//trim method
let trimedata = '     hello guys    ';
let data = trimedata.trim();
console.log(data);

//substring method
var test=str.substring(0,5);
console.log(test);

//match method
let match = str.match(/nodejs/g);
console.log(match);

//search method
let search = str.search('nodejs');
console.log(search);
 
//startwith method and endwith
if(str.startsWith('h')){
    alert('the string start with h');
}else {
alert("its not start with h");
}

//repeate
var rep = str.repeate(10);
document.write(rep);
                   

