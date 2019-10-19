//console.log(document.URL);
//TO GET THE EXISTTING URL
  //Console.dir(document);
  // it checkes all directories of the document\


 let docum= document.all;
  console.log(docum); //it display the all objects of the documents\\
    

  var head =document.head;
  var body= document.body;
 // var h1 = document.getElementById(h1);
  console.log(head);
  console.log(body);



  var image=document.image;
  let imagewithArray=Array.from(image);
  imagewithArray.forEach(img=> console/log(img));
  console.log(image);


  var links=document.links;
  let [...link]=links;
  link.forEach(i=>console.log(i)); 


//dom methods for an css and html id
var h1=document.getElementById("id");
var h1=document.querySelector("#id");//this will also work...css syntax


var jsp=document.getElementsByClassName('jspider');
//normal dom method for class
var classanotherway=document.querySelector('jspider');//css syntax way

var h1=document.getElementById('id');
h1.style.background='yellow';
