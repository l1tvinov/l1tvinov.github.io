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
    // else{animItem.classList.remove('showAnim');}
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

export default animOnScroll;