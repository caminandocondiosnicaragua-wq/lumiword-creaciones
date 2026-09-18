/* GALERÍA VISUAL DE CURRÍCULUMS — LUMIWORD CREACIONES */
document.addEventListener("DOMContentLoaded", function () {
  var grid = document.getElementById("styleGrid");
  if (!grid) return;

  var designs = window.CURRICULUM_DESIGNS || [];
  var count = document.getElementById("galleryCount");
  var typeButtons = document.querySelectorAll("#typeGrid .choice");
  var formatButtons = document.querySelectorAll("#formatGrid .choice");
  var sortSelect = document.getElementById("sortDesign");
  var selectedType = "todos";
  var selectedFormat = "todos";

  function sample(d) {
    var photo = d.id === "TPL-01-05" || d.ats ? "" : '<div class="cv-photo-placeholder"><span>FOTO</span></div>';
    var contact = '<div class="cv-mini-section"><b>CONTACTO</b><span>+000 0000 0000</span><span>correo@ejemplo.com</span><span>Managua, Nicaragua</span></div>';
    var skills = '<div class="cv-mini-section"><b>HABILIDADES</b><span>Liderazgo</span><span>Comunicación</span><span>Gestión</span><span>Trabajo en equipo</span></div>';
    var langs = '<div class="cv-mini-section"><b>IDIOMAS</b><span>Español · Nativo</span><span>Inglés · Avanzado</span></div>';
    var profile = '<div class="cv-main-section"><h5>PERFIL PROFESIONAL</h5><p>Profesional orientado a resultados, experiencia y desarrollo de proyectos.</p></div>';
    var exp = '<div class="cv-main-section"><h5>EXPERIENCIA</h5><strong>Profesional / Empresa</strong><small>2022 — Actualidad</small><p>Responsabilidades y logros profesionales.</p><strong>Especialista / Organización</strong><small>2019 — 2022</small></div>';
    var edu = '<div class="cv-main-section"><h5>FORMACIÓN</h5><strong>Licenciatura / Especialidad</strong><small>Universidad de ejemplo · 2015 — 2019</small></div>';
    var head = '<header class="cv-design-head"><div>' + photo + '<div class="cv-name">NOMBRE<br>APELLIDO</div><div class="cv-role">' + d.name.toUpperCase() + '</div></div></header>';

    if (d.id === "TPL-01-01") {
      return '<div class="cv-sample-window"><div class="cv-real cv-executive-classic"><aside class="ec-sidebar"><div class="ec-photo">FOTO</div>' + contact + skills + langs + '</aside><section class="ec-main"><header><div class="ec-name">NOMBRE<br>APELLIDO</div><div class="ec-role">DIRECTOR / PROFESIONAL</div></header>' + profile + exp + edu + '</section></div></div>';
    }
    if (d.id === "TPL-01-02") {
      return '<div class="cv-sample-window"><div class="cv-real cv-executive-modern"><header class="em-header"><div class="em-photo">FOTO</div><div class="em-name">NOMBRE<br><span>APELLIDO</span></div><div class="em-role">GERENCIA · DIRECCIÓN</div></header><div class="em-body"><aside>' + contact + skills + langs + '</aside><main>' + profile + exp + edu + '</main></div></div></div>';
    }
    if (d.id === "TPL-01-03") {
      return '<div class="cv-sample-window"><div class="cv-real cv-executivo-two"><header class="e2-top"><div class="e2-name">NOMBRE<br>APELLIDO</div><div class="e2-role">CONSULTOR · EJECUTIVO</div><div class="e2-photo">FOTO</div></header><div class="e2-columns"><section class="e2-left">' + profile + exp + '</section><section class="e2-right">' + contact + skills + edu + langs + '</section></div></div></div>';
    }
    if (d.id === "TPL-01-04") {
      return '<div class="cv-sample-window"><div class="cv-real cv-executive-premium"><div class="ep-frame"><header class="ep-head"><div class="ep-kicker">EXECUTIVE CURRICULUM</div><div class="ep-name">NOMBRE<br><span>APELLIDO</span></div><div class="ep-role">DIRECCIÓN · ESTRATEGIA</div><div class="ep-photo">FOTO</div></header><div class="ep-content"><section>' + profile + exp + edu + '</section><aside>' + contact + skills + langs + '</aside></div></div></div></div>';
    }
    if (d.id === "TPL-01-05") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real cv-ats-sobrio premium-ats"><header><div class="ats-kicker">CURRICULUM VITAE</div><div class="ats-name">NOMBRE APELLIDO</div><div class="ats-role">PROFESIÓN / ESPECIALIDAD</div><div class="ats-contact">Managua, Nicaragua · +000 0000 0000 · correo@ejemplo.com · LinkedIn</div></header><div class="ats-rule"></div><section><h5>PERFIL PROFESIONAL</h5><p>Profesional orientado a resultados con experiencia en gestión, estrategia y desarrollo de proyectos.</p></section><section><h5>EXPERIENCIA PROFESIONAL</h5><div class="ats-job"><b>Gerente de Proyectos</b><span>Empresa · 2022 — Actualidad</span><p>Responsabilidades, resultados y logros cuantificables.</p></div><div class="ats-job"><b>Coordinador de Operaciones</b><span>Organización · 2019 — 2022</span><p>Gestión de operaciones y mejora de procesos.</p></div></section><section><h5>EDUCACIÓN</h5><div class="ats-job"><b>Licenciatura / Especialidad</b><span>Universidad · 2015 — 2019</span></div></section><section><h5>HABILIDADES</h5><p>Gestión de proyectos · Liderazgo · Estrategia · Comunicación · Mejora continua</p></section></div></div>';
    }
    if (d.id === "TPL-02-01") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real corp-command"><div class="cc-banner"><span>EXECUTIVE PROFILE</span><strong>NOMBRE APELLIDO</strong><em>DIRECTOR · GERENCIA · OPERACIONES</em></div><div class="cc-strip"><span>RESULTADOS</span><span>ESTRATEGIA</span><span>LIDERAZGO</span></div><div class="cc-command-body"><main>' + exp + edu + '</main><aside>' + contact + skills + langs + '</aside></div></div></div>';
    }
    if (d.id === "TPL-02-02") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real corp-modular"><header><div class="cm-index">02</div><div><div class="cm-kicker">CORPORATE / MODERN</div><div class="cm-name">NOMBRE APELLIDO</div><div class="cm-role">GESTIÓN · ESTRATEGIA · RESULTADOS</div></div></header><div class="cm-dashboard"><div class="cm-profile">' + profile + '</div><div class="cm-experience">' + exp + '</div><div class="cm-skills">' + skills + '</div><div class="cm-education">' + edu + '</div></div></div></div>';
    }
    if (d.id === "TPL-02-03") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real cv-corp-ats ats-premium"><header><div class="ats-topline">PROFESSIONAL RESUME · ATS READY</div><div class="ats-name">NOMBRE APELLIDO</div><div class="ats-role">ESPECIALISTA PROFESIONAL</div><p>Managua, Nicaragua · +000 0000 0000 · correo@ejemplo.com · LinkedIn</p></header><div class="ats-columns"><main>' + profile + exp + '</main><section>' + edu + skills + langs + '</section></div></div></div>';
    }
    if (d.id === "TPL-02-04") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real corp-compact-premium"><header><div class="compact-number">04</div><div class="compact-name">NOMBRE APELLIDO</div><div class="compact-role">PROFESIONAL · ESPECIALIDAD</div></header><div class="compact-metrics"><div><b>08+</b><span>AÑOS</span></div><div><b>12+</b><span>PROYECTOS</span></div><div><b>15%</b><span>MEJORA</span></div></div><div class="compact-body"><main>' + exp + '</main><aside>' + profile + skills + '</aside></div></div></div>';
    }
    if (d.id === "TPL-02-05") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real corp-global"><header><div class="global-code">GLOBAL<br>PROFILE</div><div><div class="global-name">NOMBRE APELLIDO</div><div class="global-role">INTERNATIONAL BUSINESS · STRATEGY</div></div></header><div class="global-langs"><span>ES · NATIVO</span><span>EN · AVANZADO</span><span>GLOBAL</span></div><div class="global-body"><main>' + profile + exp + '</main><aside>' + edu + skills + contact + '</aside></div><footer>AVAILABLE FOR INTERNATIONAL OPPORTUNITIES</footer></div></div>';
    }
    if (d.id === "TPL-03-01") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real academic-scholar-premium"><header><div class="acad-label">CURRICULUM ACADÉMICO</div><div class="acad-name">NOMBRE APELLIDO</div><div class="acad-role">DOCENTE · INVESTIGADOR · AUTOR</div><p>Universidad / Institución · Ciudad, País · correo@ejemplo.com</p></header><div class="acad-nav"><span>01 FORMACIÓN</span><span>02 DOCENCIA</span><span>03 INVESTIGACIÓN</span><span>04 PUBLICACIONES</span></div><main>' + edu + exp + profile + '<section class="acad-pubs"><h5>PUBLICACIONES</h5><p>Artículos · Ponencias · Congresos · Proyectos</p></section></main></div></div>';
    }
    if (d.id === "TPL-03-02") {
      return '<div class="cv-sample-window premium-window"><div class="cv-real research-premium"><header><div class="research-mark">R<br><small>CV</small></div><div><div class="research-name">NOMBRE APELLIDO</div><div class="research-role">INVESTIGADOR · CIENCIA · DESARROLLO</div></div></header><div class="research-grid"><main><div class="research-timeline"><div><b>2024</b><strong>Proyecto de investigación</strong><p>Descripción y resultados del proyecto.</p></div><div><b>2021</b><strong>Investigador / Universidad</strong><p>Experiencia científica y académica.</p></div><div><b>2018</b><strong>Formación especializada</strong><p>Doctorado · Maestría · Especialidad.</p></div></div></main><aside>' + langs + skills + '<div class="research-pubs">PUBLICACIONES<br><b>ARTÍCULOS · CONGRESOS</b></div></aside></div></div></div>';
    }
    var layouts = {
      "split-gold":"layout-split-gold", "dark-header":"layout-dark-header", "asymmetry":"layout-asymmetry",
      "luxury-frame":"layout-luxury-frame", "ats-clean":"layout-ats-clean", "navy-band":"layout-navy-band",
      "side-accent":"layout-side-accent", "ats-column":"layout-ats-column", "compact-grid":"layout-compact-grid",
      "international":"layout-international", "academic-header":"layout-academic-header", "research-timeline":"layout-research-timeline",
      "academic-split":"layout-academic-split", "european":"layout-european", "academic-detailed":"layout-academic-detailed",
      "creative-splash":"layout-creative-splash", "creative-dark":"layout-creative-dark", "creative-vertical":"layout-creative-vertical",
      "creative-editorial":"layout-creative-editorial", "creative-frame":"layout-creative-frame", "minimal-line":"layout-minimal-line",
      "minimal-soft":"layout-minimal-soft", "minimal-editorial":"layout-minimal-editorial", "minimal-botanical":"layout-minimal-botanical",
      "minimal-premium":"layout-minimal-premium"
    };
    var cls = layouts[d.layout] || "layout-minimal-premium";
    var body = d.columns === 2
      ? '<div class="cv-design-columns"><aside>' + contact + skills + langs + '</aside><article>' + profile + exp + edu + '</article></div>'
      : '<div class="cv-ats-body">' + profile + exp + edu + skills + '</div>';
    return '<div class="cv-sample-window"><div class="cv-sheet ' + cls + '">' + head + body + '</div></div>';
  }

  function render() {
    var list = designs.filter(function (d) {
      var categoryKey = d.category.toLowerCase().replace(" minimalista premium", "");
      var typeOK = selectedType === "todos" || categoryKey === selectedType.toLowerCase();
      var formatOK = selectedFormat === "todos" || (selectedFormat === "ats" && d.ats);
      return typeOK && formatOK;
    });

    if (sortSelect && sortSelect.value === "name") list.sort(function(a,b){ return a.name.localeCompare(b.name); });
    if (sortSelect && sortSelect.value === "category") list.sort(function(a,b){ return a.category.localeCompare(b.category); });

    if (count) count.textContent = list.length + (list.length === 1 ? " diseño" : " diseños");

    grid.innerHTML = list.map(function (d) {
      return '<article class="market-card" data-design="' + d.id + '">' +
        sample(d) +
        '<div class="market-card-info"><button class="heart" type="button" aria-label="Guardar diseño">♡</button>' +
        '<h3>' + d.name + '</h3><div class="tags"><span>' + d.category + '</span><span>' +
        (d.columns === 1 ? "Una columna" : "Dos columnas") + '</span>' +
        (d.ats ? '<span>ATS</span>' : '') + '</div>' +
        '<button class="use-design" type="button">Usar este diseño <b>→</b></button></div></article>';
    }).join("");
  }

  typeButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedType = button.getAttribute("data-type");
      typeButtons.forEach(function(b){ b.classList.remove("active"); });
      button.classList.add("active");
      render();
    });
  });

  formatButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      selectedFormat = button.getAttribute("data-format");
      formatButtons.forEach(function(b){ b.classList.remove("active"); });
      button.classList.add("active");
      render();
    });
  });

  if (sortSelect) sortSelect.addEventListener("change", render);

  var colorCustomizer = document.getElementById("colorCustomizer");
  var colorPreview = document.getElementById("colorCustomizerPreview");
  var currentDesign = null;
  var currentColor = localStorage.getItem("lumiword_cv_color") || "#B58A3A";

  function applyColor() {
    if (!colorPreview) return;
    colorPreview.style.setProperty("--cv-accent", currentColor);
    document.querySelectorAll(".color-swatches button").forEach(function(b) {
      b.classList.toggle("selected", b.getAttribute("data-color") === currentColor);
    });
  }

  function openCustomizer(id) {
    currentDesign = designs.find(function(d) { return d.id === id; });
    if (!currentDesign || !colorCustomizer || !colorPreview) return;
    colorPreview.innerHTML = sample(currentDesign);
    applyColor();
    colorCustomizer.hidden = false;
    colorCustomizer.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  grid.addEventListener("click", function (event) {
    var button = event.target.closest(".use-design");
    if (!button) return;
    var card = button.closest(".market-card");
    openCustomizer(card.getAttribute("data-design"));
  });

  document.querySelectorAll(".color-swatches button").forEach(function(button) {
    button.addEventListener("click", function() {
      currentColor = button.getAttribute("data-color");
      localStorage.setItem("lumiword_cv_color", currentColor);
      applyColor();
    });
  });

  document.getElementById("closeColorCustomizer")?.addEventListener("click", function() {
    if (colorCustomizer) colorCustomizer.hidden = true;
    document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
  });

  document.getElementById("confirmColorCustomizer")?.addEventListener("click", function() {
    if (!currentDesign) return;
    localStorage.setItem("lumiword_cv_diseno_seleccionado", currentDesign.id);
    localStorage.setItem("lumiword_cv_color", currentColor);
    var form = document.getElementById("preguntas");
    if (form) {
      form.hidden = false;
      form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  render();
});
