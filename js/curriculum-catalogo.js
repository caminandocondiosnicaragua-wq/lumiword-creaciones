/* GALERÍA VISUAL DEL CATÁLOGO DE CURRÍCULUMS */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('styleGrid');
  if (!grid || !window.CURRICULUM_DESIGNS) return;

  const section = grid.closest('.styles-section');
  const filter = document.createElement('div');
  filter.className = 'catalog-filters';
  filter.innerHTML = `
    <span class="catalog-label">Filtrar por formato</span>
    <button type="button" class="catalog-filter active" data-format="todos">Todos</button>
    <button type="button" class="catalog-filter" data-format="Cronológico inverso">Cronológico inverso</button>
    <button type="button" class="catalog-filter" data-format="Combinado">Combinado</button>
    <button type="button" class="catalog-filter" data-format="Académico">Académico</button>
    <button type="button" class="catalog-filter" data-format="ATS">ATS</button>`;
  section.querySelector('.selected-type')?.after(filter);

  function preview(d) {
    const badge = d.ats ? '<small class="preview-badge">ATS</small>' : '';
    const photo = d.category === 'Académico' ? '' : '<i class="preview-photo"></i>';
    const side = d.columns === 2 ? '<div class="preview-side"><em></em><em></em><em></em></div>' : '';
    return `<div class="style-preview real-preview design-${d.id.toLowerCase()}">
      ${badge}${photo}<div class="preview-name">NOMBRE COMPLETO</div><div class="preview-role">${d.name.toUpperCase()}</div>
      ${side}<div class="preview-content"><b>PERFIL PROFESIONAL</b><em></em><em></em><em></em><b>EXPERIENCIA</b><em></em><em></em><em></em></div>
    </div>`;
  }

  function render(format = 'todos') {
    grid.innerHTML = '';
    window.CURRICULUM_DESIGNS
      .filter(d => format === 'todos' || d.format === format)
      .forEach(d => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'style-card catalog-card';
        card.dataset.style = d.category === 'Minimalista Premium' ? 'minimalista' : d.category.toLowerCase();
        card.dataset.design = d.id;
        card.dataset.format = d.format;
        card.innerHTML = `${preview(d)}
          <strong>${d.name}</strong>
          <small><b>${d.format}</b> · ${d.columns} ${d.columns === 1 ? 'columna' : 'columnas'}${d.ats ? ' · ATS' : ''}</small>
          <span class="select-design">Seleccionar diseño →</span>`;
        grid.appendChild(card);
      });
  }

  filter.addEventListener('click', e => {
    const btn = e.target.closest('.catalog-filter');
    if (!btn) return;
    filter.querySelectorAll('.catalog-filter').forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.format);
  });

  grid.addEventListener('click', e => {
    const card = e.target.closest('.catalog-card');
    if (!card) return;
    localStorage.setItem('lumiword_cv_diseno_seleccionado', card.dataset.design);
  });

  render();
});
