function checkPin() {
   var x, text;
   //Get the value of input field with id="numb"
   x = document.getElementById("pin").value;
   // If x is Not a Number or less than one or greater than 10
   if (x == "1234") {
       text = "Missile Launched! <p><img class=\"img-fluid\"src=\"images/Javelin.gif\"></p>";
   } else {
       text = "Incorrect Pin <p><img class=\"img-fluid\"src=\"images/error-comp.gif\"></p>";
   }

   document.getElementById("feedback").innerHTML = text;
    //document.getElementById("feedback").innerHTML = x;
}



