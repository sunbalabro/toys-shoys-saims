$(document).ready(function()
{


if($('.bbb_viewed_slider').length)
{
var viewedSlider = $('.bbb_viewed_slider');

viewedSlider.owlCarousel(
{
loop:true,
margin:30,
autoplay:true,
autoplayTimeout:6000,
nav:false,
dots:false,
responsive:
{
0:{items:1},
575:{items:2},
768:{items:3},
991:{items:4},
1199:{items:6}
}
});

if($('.bbb_viewed_prev').length)
{
var prev = $('.bbb_viewed_prev');
prev.on('click', function()
{
viewedSlider.trigger('prev.owl.carousel');
});
}

if($('.bbb_viewed_next').length)
{
var next = $('.bbb_viewed_next');
next.on('click', function()
{
viewedSlider.trigger('next.owl.carousel');
});
}
}


});
var scroll = window.requestAnimationFrame ||
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
}

loop();

function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}
var navbar = document.querySelector('nav');
window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 100 ) {
    navbar.classList.add('scrolled');
    
  } else {
    navbar.classList.remove('scrolled');
  }
}
function submitDetails() {
  var FirstName = document.getElementById("fname")
  var LastName = document.getElementById("lname")
  var EmailAddress = document.getElementById("email")
  var Comment = document.getElementById("comment")
  var key = firebase.database().ref('/contactDetails').push().key;
  console.log(key)
  firebase.database().ref('/contactDetails/').child(key).set({
      FirstName : FirstName.value,
      LastName: LastName.value,
      EmailAddress: EmailAddress.value,
      Comment: Comment.value
  })
   FirstName.value = "" 
   LastName.value= "" 
   EmailAddress.value = "" 
   Comment.value= "" 
    alert("Your response has been recorded")
}
