var array =['geetha','vinay','chaitu','nanni'];
var array1 = new Array ('viany' ,'geetha','naini');
var array3=Array.of('geetha','vinay','chaitu');
var array4=Array(7);
console.log(array);
console.log(array1);
console.log(array3);
console.log(array4);
console.log(typeof(array) ,  typeof(array1)  , typeof(array3), typeof(array4));



console.log(Array.isArray(array));

var str ='heelo i am geetha sreee';
   
var strwitharray = str.split('  ');
console.log(strwitharray);

let [...spread]=str;
console.log(spread);


let[...geetha] = str;
console.log(geetha.toString(''));

var esixway =array.from(str);
console.log(esixway);

