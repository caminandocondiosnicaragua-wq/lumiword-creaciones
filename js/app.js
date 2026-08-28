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
      padding: 30px 8vw;
      background: #0e0c09;
      border-top: 1px solid rgba(215,173,82,.20);
      border-bottom: 1px solid rgba(215,173,82,.20);
      color: #c9c1b5;
    }
    .development-note-inner {
      max-width: 1100px;
      margin: 0 auto;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 16px;
    }
    .development-note-icon {
      flex: 0 0 auto;
      color: #f1d98c;
      font-size: 21px;
      line-height: 1.5;
    }
    .development-note p { margin: 0; }
    .development-note-title {
      color: #f1d98c;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.45;
      letter-spacing: .02em;
      margin-bottom: 6px !important;
    }
    .development-note-text {
      color: #c9c1b5;
      font-size: 14px;
      line-height: 1.7;
    }
    @media (max-width: 800px) {
      .development-note { padding: 24px 5vw; }
      .development-note-inner { gap: 11px; }
      .development-note-icon { font-size: 18px; }
      .development-note-title { font-size: 14px; }
      .development-note-text { font-size: 13px; line-height: 1.65; }
    }
  `;
  document.head.appendChild(noteStyle);
  siteFooter.parentNode.insertBefore(developmentNotice, siteFooter);
}
