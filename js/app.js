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

// Nota general de desarrollo: se coloca discretamente antes del pie de pagina.
const siteFooter = document.querySelector('.site-footer');
if (siteFooter) {
  const developmentNotice = document.createElement('aside');
  developmentNotice.className = 'development-note';
  developmentNotice.setAttribute('role', 'note');
  developmentNotice.innerHTML = `
    <div class="development-note-inner">
      <span class="development-note-icon" aria-hidden="true">✦</span>
      <div>
        <p class="development-note-title">LumiWord Creaciones está en desarrollo.</p>
        <p class="development-note-text">Estamos preparando nuevas funciones y perfeccionando cada sección para ofrecerte una experiencia más completa, segura y cuidada. Algunas opciones aún no están disponibles; se irán habilitando progresivamente.</p>
      </div>
    </div>
  `;

  const noteStyle = document.createElement('style');
  noteStyle.textContent = `
    .development-note {
      margin: 0;
      padding: 24px 8vw;
      background: #0e0c09;
      border-top: 1px solid rgba(215,173,82,.20);
      border-bottom: 1px solid rgba(215,173,82,.20);
      color: #bcb4a6;
    }
    .development-note-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 14px;
    }
    .development-note-icon {
      flex: 0 0 auto;
      color: #f1d98c;
      font-size: 17px;
      line-height: 1.5;
    }
    .development-note p { margin: 0; }
    .development-note-title {
      color: #f1d98c;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .03em;
      margin-bottom: 3px !important;
    }
    .development-note-text {
      color: #a9a194;
      font-size: 11px;
      line-height: 1.65;
    }
    @media (max-width: 800px) {
      .development-note { padding: 20px 5vw; }
      .development-note-inner { gap: 10px; }
      .development-note-title { font-size: 11px; }
      .development-note-text { font-size: 10px; }
    }
  `;
  document.head.appendChild(noteStyle);
  siteFooter.parentNode.insertBefore(developmentNotice, siteFooter);
}
