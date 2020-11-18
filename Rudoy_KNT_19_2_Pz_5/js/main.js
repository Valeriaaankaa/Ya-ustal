
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let i = 0; i < animItems.length; i++) {
      const animItem = animItems[i];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 10;

      let animITemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        /
        animITemPoint = window.innerHeight - animItemHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animITemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim_no-hide")) {

          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }

  setTimeout(() => {
    animOnScroll();
  }, 300);
}

var selector = document.getElementById("tel");

var im = new Inputmask("+38 (999) 999-99-99");
im.mask(selector);

function myFunction() {
alert("Спасибо!");
}
