function OpenAndClose(y){
	// body..
var x = document.getElementById('menu');


    if (x.style.display == "" ) 

     {
      x.style.display ="block";
      y.classList.toggle("change");
	}
	else if (x.style.display == "block")
	{
    x.style.display ="";
    y.classList.toggle("change");
	}
	else{
		alert("Error");
	}
}