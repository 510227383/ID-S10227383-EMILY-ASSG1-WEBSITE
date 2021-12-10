var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slideshow-image-container");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 8000);
}

function show() {
  var x = document.getElementById("showSearch")
  if (x.style.display === "none") {
    x.style.display = "block";
  }

  else {
    x.style.display = "none";
  }
}

function close() {
  var x = document.querySelector("#showSearch")
  if (x.style.display === "block") {
    x.style.display = "none"
  }
  else {
    x.style.display = "none";
  }
}