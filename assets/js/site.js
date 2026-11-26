(() => {
  'use strict';
  const root = document.documentElement;
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#navigation');
  const header = document.querySelector('header');
  const background = document.querySelectorAll('main, footer');
  function setMenu(open) {
    root.classList.toggle('menu-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', String(open));
    background.forEach(element => {
      if (open) element.setAttribute('inert', '');
      else element.removeAttribute('inert');
    });
  }
  function closeMenu() {
    setMenu(false);
  }
  if (toggle && navigation) {
    const desktop = window.matchMedia('(min-width:992px)');
    root.classList.add('js');
    toggle.addEventListener('click', () => {
      const open = !desktop.matches && toggle.getAttribute('aria-expanded') !== 'true';
      setMenu(open);
    });
    navigation.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && root.classList.contains('menu-open')) {
        closeMenu();
        toggle.focus();
      }
      if (event.key === 'Tab' && root.classList.contains('menu-open') && header) {
        const links = [...header.querySelectorAll('a[href], button:not([disabled])')];
        const first = links[0];
        const last = links[links.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });
    document.addEventListener('click', event => {
      // Includes the language and brand links, which sit outside the panel.
      if (!event.target.closest('#navigation, .menu-toggle')) closeMenu();
    });
    desktop.addEventListener('change', event => {
      if (event.matches) closeMenu();
    });
  }
  const updateHeader = () => root.classList.toggle('scrolled', window.scrollY > 32);
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = document.querySelectorAll('.reveal');
  let observer;
  function releasePending() {
    reveals.forEach(element => {
      element.classList.remove('pending');
      element.classList.add('visible');
    });
    root.classList.remove('js-motion');
    if (observer) observer.disconnect();
  }
  function scheduleRelease() {
    window.setTimeout(releasePending, 1500);
  }
  // The safety net is registered before any pending state can be added.
  window.addEventListener('resize', releasePending);
  window.addEventListener('beforeprint', releasePending);
  if (document.readyState === 'complete') scheduleRelease();
  else window.addEventListener('load', scheduleRelease, { once: true });
  reduced.addEventListener('change', event => {
    if (event.matches) releasePending();
  });
  if (reduced.matches || !('IntersectionObserver' in window)) {
    releasePending();
  } else {
    try {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('pending');
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.04, rootMargin: '0px 0px 32px 0px' });
      root.classList.add('js-motion');
      reveals.forEach(element => {
        element.classList.add('pending');
        observer.observe(element);
      });
    } catch (error) {
      releasePending();
    }
  }
})();
