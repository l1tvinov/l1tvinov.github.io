$(function(){

function scrollTo(el){
  window.scroll({
    top: el.offsetTop,
    behavior: 'smooth'
  })
}

const btnScroll = document.querySelector('.arrow')
const sectionProject = document.querySelector('.project')

btnScroll.addEventListener('click', () => scrollTo(sectionProject));

$('.start').on('mousemove', (e) => {
  const x = e.pageX / $(window).width();
  const y = e.pageY / $(window).height();

  $('.flyicon1').css(
    'transform',
    'translate( -' + x * 230 + 'px, -' + y * 230 + 'px)'
  );
  $('.flyicon2').css(
    'transform',
    'translate(' + x * 190 + 'px, ' + y * 190 + 'px)'
  );
  $('.flyicon3').css(
    'transform',
    'translate(' + x * 60 + 'px, ' + y * 60 + 'px)'
  );
  $('.flyicon4').css(
    'transform',
    'translate(-' + x * 60 + 'px, ' + y * 60 + 'px)'
  );
  $('.flyicon5').css(
    'transform',
    'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)'
  );
  $('.flyicon6').css(
    'transform',
    'translate(-' + x * 20 + 'px, -' + y * 150 + 'px)'
  );
  $('.flyicon7').css(
    'transform',
    'translate(-' + x * 160 + 'px, ' + y * 20 + 'px)'
  );
});

var text = $('.typewriter').text();

var length = text.length;
var timeOut;
var character = 0;


(function typeWriter() { 
    timeOut = setTimeout(function() {
        character++;
        var type = text.substring(0, character);
        $('.typewriter').text(type);
        typeWriter();
        
        if (character == length) {
            clearTimeout(timeOut);
        }
        
    }, 400);
}());


let animation = document.querySelectorAll('.animation');

function animOnScroll() {
  for (let index = 0; index < animation.length; index++) {
    const animItem = animation[index];
    const animItemHeight = animItem.offsetHeight;
    const animItemOffset = offset(animItem).top;
    const animStart = 4;
    let animItemPoint = window.innerHeight - animItemHeight / animStart;
    if (animItemHeight > window.innerHeight) {
      animItemPoint = window.innerHeight - window.innerHeight / animStart;

    }
    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
      animItem.classList.add('showAnim');
    }
  }
}


function offset(el) {
  const rect = el.getBoundingClientRect();
  let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return {
    top: rect.top + scrollTop,
    left: rect.left + scrollLeft
  }
}

if (animation.length > 0) {
  window.addEventListener('scroll', animOnScroll);
}

setTimeout(() => {
  animOnScroll();
}, 500);


document.addEventListener('scroll', () => {
 
  document.querySelector('#fly').style.left = (scrollY/15) + '%';
})

});