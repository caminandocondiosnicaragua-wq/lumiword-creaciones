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

// Aviso general de desarrollo: se muestra en las paginas publicas
// para informar con claridad que algunas funciones aun estan en construccion.
const developmentNotice = document.createElement('div');
developmentNotice.className = 'development-notice';
developmentNotice.setAttribute('role', 'status');
developmentNotice.innerHTML = `
  <div class="development-notice-inner">
    <span class="development-notice-icon" aria-hidden="true">✦</span>
    <p><strong>LumiWord está en desarrollo.</strong> Estamos preparando nuevas funciones y perfeccionando cada sección para ofrecerte una experiencia más completa, segura y cuidada. Algunas opciones aún no están disponibles; se irán habilitando progresivamente.</p>
  </div>
`;

document.body.insertBefore(developmentNotice, document.body.firstChild);
