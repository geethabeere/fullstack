function addNumber()
{
    //covert string into int use parseInt
    //convert string into floating value use parseFloat
    var firstnumber = parseInt(document.getElementById('firstnumber').value);
    var secondnumber = parseInt(document.getElementById('secondnumber').value);   
     document.getElementById('total').value = firstnumber + secondnumber ;
}


