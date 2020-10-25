var slideIndex = 0;
var x = document.getElementsByClassName("mySlides");
window.onload = function(){
	carousel();
}

function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex].style.display = "block";
}
//load previous img
function prev(){
    x[slideIndex].style.display = "none";
	slideIndex--;
	if(slideIndex < 0){slideIndex = x.length-1}
	x[slideIndex].style.display = "block";
}
//load next img
function next(){
    x[slideIndex].style.display = "none";
	slideIndex++;
	if (slideIndex > x.length-1) {slideIndex = 0}
	x[slideIndex].style.display = "block";
}