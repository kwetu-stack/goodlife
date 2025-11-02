// === Mobile nav toggle ===
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

// === Hero slideshow ===
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

// === Animated Counters ===
(function () {
  const statsSection = document.querySelector('.stats-section');
  if (!statsSection) return;

  const counters = statsSection.querySelectorAll('.number');
  if (!counters.length) return;

  const speed = 120; // lower = faster

  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target') || 0;
      const showPlus = true;
      let current = 0;
      const step = Math.max(1, Math.floor(target / speed));
      const tick = () => {
        current += step;
        if (current < target) {
          counter.textContent = current.toLocaleString();
          requestAnimationFrame(tick);
        } else {
          counter.textContent = target.toLocaleString() + (showPlus ? '+' : '');
        }
      };
      counter.textContent = '0';
      requestAnimationFrame(tick);
    });
  };

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });
    obs.observe(statsSection);
  } else {
    animateCounters();
  }
})();

// === Animated Stats Counter ===
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".stat-number");
  const speed = 50; // lower = faster

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const updateCount = () => {
      const current = +counter.innerText;
      const increment = Math.ceil(target / speed);
      if (current < target) {
        counter.innerText = current + increment;
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  };

  // Animate when visible
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target); // only once
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});
