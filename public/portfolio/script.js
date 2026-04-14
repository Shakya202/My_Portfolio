/* ─── Portfolio Script ─── */

// ─── Typed text animation ───
const typedTexts = [
  'IT Undergraduate 🎓',
  'Software Developer 💻',
  'Problem Solver 🧩',
  'Open Source Enthusiast 🌐',
  'Future Engineer 🚀',
];
let typeIdx = 0, charIdx = 0, isDeleting = false;
const typedEl = document.querySelector('.typed-text');

function typeEffect() {
  const current = typedTexts[typeIdx];
  if (!typedEl) return;
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typedEl.textContent = current.substring(0, charIdx + 1);
    charIdx++;
  }
  let delay = isDeleting ? 60 : 90;
  if (!isDeleting && charIdx === current.length) { delay = 2200; isDeleting = true; }
  else if (isDeleting && charIdx === 0) { isDeleting = false; typeIdx = (typeIdx + 1) % typedTexts.length; delay = 400; }
  setTimeout(typeEffect, delay);
}
setTimeout(typeEffect, 800);

// ─── Navbar scroll effect ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// ─── Mobile hamburger ───
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  mobileMenu.classList.toggle('flex');
  const icon = hamburger.querySelector('i');
  icon.className = mobileMenu.classList.contains('flex') ? 'fas fa-times' : 'fas fa-bars';
});
function closeMobileMenu() {
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('flex');
  hamburger.querySelector('i').className = 'fas fa-bars';
}

// ─── Scroll reveal ───
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bars if within skills section
      const fills = entry.target.querySelectorAll('.skill-fill');
      fills.forEach(fill => {
        const w = fill.dataset.w;
        setTimeout(() => { fill.style.width = w + '%'; }, 200);
      });
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

// ─── Skills Tab Switcher ───
const tabs = document.querySelectorAll('.skill-tab');
const panels = document.querySelectorAll('.skill-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    // Update tabs
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show correct panel
    panels.forEach(p => {
      const panelId = p.id.replace('tab-', '');
      if (panelId === target) {
        p.classList.remove('hidden');
        // Re-trigger skill bars
        setTimeout(() => {
          p.querySelectorAll('.skill-fill').forEach(fill => {
            fill.style.width = '0%';
            setTimeout(() => { fill.style.width = fill.dataset.w + '%'; }, 50);
          });
        }, 50);
      } else {
        p.classList.add('hidden');
      }
    });
  });
});

// Initialize first tab skill bars
setTimeout(() => {
  document.querySelectorAll('#tab-languages .skill-fill').forEach(fill => {
    fill.style.width = fill.dataset.w + '%';
  });
}, 1000);

// ─── Back to top button ───
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 500) backTop.classList.add('visible');
  else backTop.classList.remove('visible');
});
backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ─── Contact Form ───
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  const success = document.getElementById('form-success');
  btn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = '<i class="fas fa-check mr-2"></i> Sent!';
    success.classList.remove('hidden');
    e.target.reset();
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
      btn.disabled = false;
      success.classList.add('hidden');
    }, 4000);
  }, 1800);
}

// ─── Smooth anchor scrolling ───
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── Active nav highlight ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        if (link.getAttribute('href') === '#' + id) {
          link.style.color = '#4cc9f0';
        } else {
          link.style.color = '';
        }
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

// ─── Hero particles (minimal, performance-safe) ───
function createParticle() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const p = document.createElement('div');
  p.style.cssText = `
    position: absolute;
    width: ${Math.random() * 3 + 1}px;
    height: ${Math.random() * 3 + 1}px;
    background: rgba(67, 97, 238, ${Math.random() * 0.5 + 0.1});
    border-radius: 50%;
    left: ${Math.random() * 100}%;
    top: ${Math.random() * 100}%;
    pointer-events: none;
    z-index: 1;
    animation: particle-rise ${Math.random() * 8 + 6}s linear infinite;
  `;
  hero.appendChild(p);
  setTimeout(() => p.remove(), 14000);
}

// Add particle keyframes
const style = document.createElement('style');
style.textContent = `
  @keyframes particle-rise {
    0% { transform: translateY(0) scale(1); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 0.5; }
    100% { transform: translateY(-120vh) scale(0.3); opacity: 0; }
  }
`;
document.head.appendChild(style);
setInterval(createParticle, 800);

// ─── Easter egg: Konami code ───
const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
let konamiIdx = 0;
document.addEventListener('keydown', e => {
  if (e.key === konamiCode[konamiIdx]) {
    konamiIdx++;
    if (konamiIdx === konamiCode.length) {
      konamiIdx = 0;
      document.body.style.animation = 'none';
      const msg = document.createElement('div');
      msg.textContent = '🎮 Konami Code Unlocked! You found the Easter egg!';
      msg.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: linear-gradient(135deg, #4361ee, #7209b7);
        color: white; padding: 1rem 2rem; border-radius: 2rem;
        font-family: 'Space Mono', monospace; font-size: 0.85rem;
        z-index: 9999; animation: fadeUp 0.5s ease;
        box-shadow: 0 10px 40px rgba(67,97,238,0.5);
      `;
      document.body.appendChild(msg);
      setTimeout(() => msg.remove(), 3500);
    }
  } else { konamiIdx = 0; }
});

// ─── Console greeting ───
console.log('%c👋 Hello Developer!', 'color: #4361ee; font-size: 18px; font-weight: bold;');
console.log('%cThis portfolio was crafted with ❤️ | Looking at source code? Nice! 🔍', 'color: #4cc9f0; font-size: 13px;');
