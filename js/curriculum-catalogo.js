/* GALERÍA VISUAL — MUESTRAS REALES DE CURRÍCULUMS */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('styleGrid');
  if (!grid || !window.CURRICULUM_DESIGNS) return;

  const typeButtons = document.querySelectorAll('#typeGrid .choice');
  const formatButtons = document.querySelectorAll('#formatGrid .choice');
  const sortSelect = document.getElementById('sortDesign');
  const count = document.getElementById('galleryCount');
  let selectedType = 'todos';
  let selectedFormat = 'todos';

  function sample(d) {
    const cls = d.id.toLowerCase();
    const accent = d.category === 'Creativo' ? 'creative' : d.category === 'Académico' ? 'academic' : d.category === 'Minimalista Premium' ? 'minimal' : d.category === 'Corporativo' ? 'corporate' : 'executive';
    const photo = '<div class="cv-photo-placeholder"><span>FOTO</span></div>';
    const contact = '<div class="cv-mini-section"><b>CONTACTO</b><span>◉ +000 0000 0000</span><span>✉ correo@ejemplo.com</span><span>⌖ Managua, Nicaragua</span><span>in/tu-perfil</span></div>';
    const skills = '<div class="cv-mini-section"><b>HABILIDADES</b><span>Gestión de proyectos</span><span>Comunicación</span><span>Liderazgo</span><span>Trabajo en equipo</span></div>';
    const languages = '<div class="cv-mini-section"><b>IDIOMAS</b><span>Español · Nativo</span><span>Inglés · Avanzado</span></div>';
    const experience = '<div class="cv-main-section"><h5>EXPERIENCIA PROFESIONAL</h5><strong>Especialista / Empresa</strong><small>2022 — Actualidad</small><p>Responsabilidades y principales logros profesionales de ejemplo.</p><strong>Profesional / Organización</strong><small>2019 — 2022</small><p>Experiencia, proyectos y resultados destacados.</p></div>';
    const education = '<div class="cv-main-section"><h5>FORMACIÓN ACADÉMICA</h5><strong>Licenciatura / Especialidad</strong><small>Universidad de ejemplo · 2015 — 2019</small><p>Formación y conocimientos relevantes.</p></div>';
    const profile = '<div class="cv-main-section"><h5>PERFIL PROFESIONAL</h5><p>Profesional orientado a resultados, con experiencia y habilidades para aportar valor a nuevos proyectos.</p></div>';

    if (accent === 'creative') return `<div class="cv-sheet ${accent} ${cls}"><div class="cv-creative-top"><div class="cv-name">NOMBRE<br><span>APELLIDO</span></div>${photo}<div class="cv-role">DISEÑADOR · PROFESIONAL</div></div><div class="cv-creative-body"><aside>${contact}${skills}${languages}</aside><article>${profile}${experience}${education}</article></div></div>`;
    if (accent === 'academic') return `<div class="cv-sheet ${accent} ${cls}"><header class="cv-academic-head">${photo}<div><div class="cv-name">NOMBRE APELLIDO</div><div class="cv-role">INVESTIGADOR · DOCENTE</div><p>Perfil académico y áreas de investigación</p></div></header><div class="cv-academic-grid"><aside>${contact}${languages}</aside><article>${profile}${education}${experience}<div class="cv-main-section"><h5>PUBLICACIONES Y PROYECTOS</h5><p>Investigación, publicaciones, congresos y proyectos académicos de ejemplo.</p></div></article></div></div>`;
    if (accent === 'minimal') return `<div class="cv-sheet ${accent} ${cls}"><header class="cv-minimal-head"><div><div class="cv-name">NOMBRE APELLIDO</div><div class="cv-role">PROFESIÓN / CARGO</div></div>${photo}</header><div class="cv-minimal-rule"></div>${profile}${experience}${education}<div class="cv-mini-bottom">${skills}</div></div>`;
    return `<div class="cv-sheet ${accent} ${cls}"><header class="cv-standard-head">${photo}<div><div class="cv-name">NOMBRE APELLIDO</div><div class="cv-role">${d.name.toUpperCase()}</div></div></header><div class="cv-standard-body"><aside>${contact}${skills}${languages}</aside><article>${profile}${experience}${education}</article></div></div>`;
  }

  function matches(d) {
    const typeOk = selectedType === 'todos' || (selectedType === 'primer-empleo' && d.name.toLowerCase().includes('primer')) || d.category.toLowerCase().includes(selectedType);
    const formatOk = selectedFormat === 'todos' || (selectedFormat === 'one-column' && d.columns === 1) || (selectedFormat === 'two-columns' && d.columns === 2) || (selectedFormat === 'ats' && d.ats);
    return typeOk && formatOk;
  }

  function render() {
    let designs = window.CURRICULUM_DESIGNS.filter(matches).slice();
    if (sortSelect?.value === 'name') designs.sort((a,b)=>a.name.localeCompare(b.name));
    if (sortSelect?.value === 'category') designs.sort((a,b)=>a.category.localeCompare(b.category));
    if (count) count.textContent = `${designs.length} ${designs.length === 1 ? 'diseño' : 'diseños'}`;
    grid.innerHTML = designs.map(d => `<article class="market-card" data-design="${d.id}">${sample(d)}<div class="market-card-info"><button class="heart" type="button" aria-label="Guardar diseño">♡</button><h3>${d.name}</h3><div class="tags"><span>${d.category}</span><span>${d.columns === 1 ? 'Una columna' : 'Dos columnas'}</span>${d.ats ? '<span>ATS</span>' : ''}</div><button class="use-design" type="button">Usar este diseño <b>→</b></button></div></article>`).join('');
  }

  function setButtons(buttons, value) { buttons.forEach(b => b.classList.toggle('active', b.dataset.type === value || b.dataset.format === value)); }
  typeButtons.forEach(b => b.addEventListener('click', () => { selectedType=b.dataset.type; setButtons(typeButtons,selectedType); render(); }));
  formatButtons.forEach(b => b.addEventListener('click', () => { selectedFormat=b.dataset.format; setButtons(formatButtons,selectedFormat); render(); }));
  sortSelect?.addEventListener('change', render);
  grid.addEventListener('click', e => { const use=e.target.closest('.use-design'); if(!use)return; const card=use.closest('.market-card'); localStorage.setItem('lumiword_cv_diseno_seleccionado',card.dataset.design); const form=document.getElementById('preguntas'); if(form){form.hidden=false; form.scrollIntoView({behavior:'smooth',block:'start'});} });
  render();
});
