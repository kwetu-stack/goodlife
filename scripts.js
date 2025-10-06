
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
