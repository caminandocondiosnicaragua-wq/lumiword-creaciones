const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Nota general de desarrollo: se coloca discretamente antes del pie de pagina
// en las paginas publicas, en lugar de ocupar la parte superior del sitio.
const siteFooter = document.querySelector('.site-footer');
if (siteFooter) {
  const developmentNotice = document.createElement('aside');
  developmentNotice.className = 'development-note';
  developmentNotice.setAttribute('role', 'note');
  developmentNotice.innerHTML = `
    <div class="development-note-inner">
      <span class="development-note-icon" aria-hidden="true">✦</span>
      <p><strong>LumiWord Creaciones está en desarrollo.</strong> Estamos preparando nuevas funciones y perfeccionando cada sección para ofrecerte una experiencia más completa, segura y cuidada. Algunas opciones aún no están disponibles; se irán habilitando progresivamente.</p>
    </div>
  `;
  siteFooter.parentNode.insertBefore(developmentNotice, siteFooter);
}
