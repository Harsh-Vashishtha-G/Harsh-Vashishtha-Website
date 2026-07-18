function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

window.addEventListener('scroll', function() {
  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Highlight active nav link based on current page
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('http')) {
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
        link.classList.add('active');
        } else {
        link.classList.remove('active');
        }
    }
  });

  // Smooth scroll only for hash links on the same page
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) { 
        e.preventDefault(); 
        target.scrollIntoView({behavior:'smooth'}); 
      }
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) {
        mobileMenu.classList.remove('open');
      }
    });
  });
});
