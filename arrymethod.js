let number =(...arguments) => {
    console.log(arguments);
};
number(10,20,3);//es6

var str='heeelo haiii';
console.log(typeof str);
for(let y of str){
    console.log(y);
}

let lang=['geetha','nodejs','ruby'];
for(let x of lang){
    console.log(x);
    console.log(x+ '<br>');
}


var numbers=[10,50,30,20,15,5000];
var reduce=numbers.reduce(function(a,b){
    console.log(a);
    console.log(b);
    return a+b;

});
    var fastarrow=numbers.reduce((a,b)=>a+b);
    console.log(fastarrow);
    console.log(reduce);


    var sortmethod=lang.sort();
    console.log(sortmethod);
      
    var array=['aws','node','python','expressjs','angular','expesswithanular'];
    var resultwithnarmalfuction=array.filter(function (word) {
        return word.length > 6;
    
    });

    


