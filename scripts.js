
// Mobile nav toggle
(function(){
  const btn = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('main-menu');
  btn && btn.addEventListener('click',()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    if(!expanded){
      menu.style.display = 'flex';
      menu.style.flexDirection = 'column';
      menu.style.position = 'absolute';
      menu.style.right = '20px';
      menu.style.top = '64px';
      menu.style.background = '#fff';
      menu.style.padding = '12px';
      menu.style.boxShadow = '0 10px 30px rgba(11,37,64,0.12)';
    } else {
      menu.style.display = '';
      menu.style.position = '';
    }
  });
})();

// Hero slideshow
(function(){
  const slides = document.querySelectorAll('.hero__slideshow .slide');
  let index = 0;
  if (slides.length > 1) {
    setInterval(() => {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    }, 5000); // 5 seconds
  }
})();
