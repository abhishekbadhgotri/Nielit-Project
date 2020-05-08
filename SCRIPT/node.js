var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n)
{
  showSlides(slideIndex += n);
}

var extra;

function Submit(x)
{
	extra=x;
}
function afterSubmit()
{
	var temp=extra;

	if(temp==1)
	{
		document.getElementById("message").textContent = "Thanks for Registration";
	}
	else if(temp==2)
	{
		document.getElementById("message").textContent = "You're Successfully logged in";
	}
	else if(temp==3)
	{
		document.getElementById("message").textContent = "Thanks for the submitting your Query!";
	}
	else
	{
		document.getElementById("message").textContent = "Default message!";
	}
}

function currentSlide(n)
{
  showSlides(slideIndex = n);
}

function showSlides(n)
{
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length)
	{
		slideIndex = 1
	}    
	if (n < 1)
	{
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++)
	{
		slides[i].style.display = "none";  
	}
	for (i = 0; i < dots.length; i++)
	{
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";  
	dots[slideIndex-1].className += " active";
}
