var myIndex = 0;
carousel();
//scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
//menu mobilne
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
//galeria
//function carousel() {
//  var i;
// var x = document.getElementsByClassName("mySlides");
//  for (i = 0; i < x.length; i++) {
//    x[i].style.display = "none"; 
//  }
//  myIndex++;
//  if (myIndex > x.length) {myIndex = 1} {
//    x[myIndex-1].style.display = "block";
//  }    
//  setTimeout(carousel, 4000); // Change image every 2 seconds
//}

// <div class="gallery2" style="max-width:500px">
// <img class="mySlides" src="img/facebook.png" style="width:100%">
//<img class="mySlides" src="img/instagram.png" style="width:100%">
//<img class="mySlides" src="img_chicago.jpg" style="width:100%">
//<button id="qron">Przejdź do formularza</button>
//</div>