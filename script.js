/**
 * Modelo 04: Executivo Keynote & Alabaster Frost
 * Professor Rafael Alves da Silva - Scripts
 * Vanilla JavaScript (Zero Frameworks, Accessible, Pure Vector SVG)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFaqAccordion();
  initProjectFilter();
  initLightbox();
  initContactDispatch();
  initImageFallbacks();
});

/* --------------------------------------------------------------------------
   Image Fallback Handler (Local SVG vector placeholder)
   -------------------------------------------------------------------------- */
function initImageFallbacks() {
  const images = document.querySelectorAll('img');
  const fallbackSvg = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23f1f5f9'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='20' fill='%230b1528' font-weight='bold'>Professor Rafael Alves da Silva</text><text x='50%' y='60%' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='14' fill='%2364748b'>Escola SESI / MIEE</text></svg>";

  images.forEach(img => {
    if (!img.hasAttribute('referrerpolicy')) {
      img.setAttribute('referrerpolicy', 'no-referrer');
    }

    img.addEventListener('error', () => {
      if (img.src !== fallbackSvg) {
        img.src = fallbackSvg;
        img.style.objectFit = 'cover';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   Toast Notification System (Pure Vector SVG)
   -------------------------------------------------------------------------- */
function showToast(message, duration = 3200) {
  let toast = document.getElementById('siteToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'siteToast';
    toast.className = 'toast-box';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  const checkSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>';
  toast.innerHTML = checkSvg + ' <span>' + message + '</span>';
  toast.classList.add('show');

  clearTimeout(toast.timeoutId);
  toast.timeoutId = setTimeout(() => {
    toast.classList.remove('show');
  }, duration);
}

/* --------------------------------------------------------------------------
   Mobile Navigation Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileToggle');
  const mainNav = document.getElementById('mainNav');

  if (!toggleBtn || !mainNav) return;

  toggleBtn.addEventListener('click', () => {
    const isActive = mainNav.classList.toggle('active');
    toggleBtn.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const cards = document.querySelectorAll('.faq-card');

  cards.forEach(card => {
    const trigger = card.querySelector('.faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      cards.forEach(c => {
        if (c !== card) {
          c.classList.remove('open');
          const t = c.querySelector('.faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      card.classList.toggle('open', !isOpen);
      trigger.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   Projects Filter System
   -------------------------------------------------------------------------- */
function initProjectFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   Lightbox Modal for Gallery
   -------------------------------------------------------------------------- */
function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const modalCaption = document.getElementById('lightboxCaption');
  const closeBtn = document.getElementById('lightboxClose');

  if (!modal || !modalImg || !modalCaption || !closeBtn) return;

  items.forEach(item => {
    item.addEventListener('click', () => {
      const imgSrc = item.getAttribute('data-img');
      const caption = item.getAttribute('data-caption');

      modalImg.src = imgSrc;
      modalCaption.textContent = caption || '';
      modal.removeAttribute('hidden');
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
      closeBtn.focus();
    });
  });

  const closeModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('hidden', '');
  };

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* --------------------------------------------------------------------------
   Contact Dispatch & WhatsApp Form Handler
   -------------------------------------------------------------------------- */
function initContactDispatch() {
  const form = document.getElementById('contactDispatchForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('dispatchName')?.value.trim() || '';
    const org = document.getElementById('dispatchOrg')?.value.trim() || '';
    const reason = document.getElementById('dispatchReason')?.value || 'Contato';
    const message = document.getElementById('dispatchMessage')?.value.trim() || '';

    const fullMessage = `Olá, Professor Rafael Alves! Meu nome é ${name} (${org}). Gostaria de conversar sobre: *${reason}*.\n\n${message}`;
    const encoded = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/5577998401073?text=${encoded}`;

    window.open(whatsappUrl, '_blank');
    showToast('Abrindo WhatsApp com sua mensagem formatada...');
  });
}
