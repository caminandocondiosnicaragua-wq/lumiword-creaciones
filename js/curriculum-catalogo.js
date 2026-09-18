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
      return '<div class="cv-sample-window"><div class="cv-real cv-ats-sobrio"><header><div class="as-kicker">CURRÍCULUM VITAE</div><div class="as-name">NOMBRE APELLIDO</div><div class="as-role">PROFESIÓN / ESPECIALIDAD</div><div class="as-contact">Managua, Nicaragua · +000 0000 0000 · correo@ejemplo.com · LinkedIn</div></header><div class="as-rule"></div>' + profile + exp + edu + skills + '</div></div>';
    }
    if (d.id === "TPL-02-01") {
      return '<div class="cv-sample-window"><div class="cv-real cv-corp-trad"><header><div class="ct-band"></div><div class="ct-name">NOMBRE<br>APELLIDO</div><div class="ct-role">CARGO PROFESIONAL</div><div class="ct-contact">+000 0000 0000<br>correo@ejemplo.com<br>Managua, Nicaragua</div></header><div class="ct-body"><aside>' + contact + skills + '</aside><main>' + profile + exp + edu + '</main></div></div></div>';
    }
    if (d.id === "TPL-02-02") {
      return '<div class="cv-sample-window"><div class="cv-real cv-corp-moderno"><header><div class="cm-accent"></div><div class="cm-photo">FOTO</div><div><div class="cm-name">NOMBRE APELLIDO</div><div class="cm-role">PROFESIONAL · GESTIÓN · ESTRATEGIA</div></div></header><div class="cm-body"><aside>' + contact + langs + '</aside><main>' + profile + exp + edu + '</main></div></div></div>';
    }
    if (d.id === "TPL-02-03") {
      return '<div class="cv-sample-window"><div class="cv-real cv-corp-ats"><header><div class="ca-name">NOMBRE APELLIDO</div><div class="ca-role">ESPECIALISTA PROFESIONAL</div><p>Managua, Nicaragua · +000 0000 0000 · correo@ejemplo.com</p></header><div class="ca-columns"><main>' + profile + exp + edu + '</main><aside>' + skills + langs + '</aside></div></div></div>';
    }
    if (d.id === "TPL-02-04") {
      return '<div class="cv-sample-window"><div class="cv-real cv-corp-compact"><header><div class="cc-photo">FOTO</div><div><div class="cc-name">NOMBRE APELLIDO</div><div class="cc-role">PROFESIONAL</div></div></header><div class="cc-grid"><main>' + profile + exp + '</main><aside>' + contact + skills + edu + '</aside></div></div></div>';
    }
    if (d.id === "TPL-02-05") {
      return '<div class="cv-sample-window"><div class="cv-real cv-corp-international"><header><div><div class="ci-name">NOMBRE APELLIDO</div><div class="ci-role">INTERNATIONAL PROFESSIONAL</div></div>' + photo + '</header><div class="ci-body"><aside>' + langs + skills + '</aside><main>' + profile + exp + edu + '</main></div><footer>SPANISH · ENGLISH · INTERNATIONAL PROFILE</footer></div></div>';
    }
    if (d.id === "TPL-03-01") {
      return '<div class="cv-sample-window"><div class="cv-real cv-academic-trad"><header><div class="at-name">NOMBRE APELLIDO</div><div class="at-role">DOCENTE · INVESTIGADOR</div><p>Universidad / Institución · Ciudad, País · correo@ejemplo.com</p></header><div class="at-rule"></div>' + profile + edu + exp + '<div class="at-publications"><h5>PUBLICACIONES Y CONGRESOS</h5><p>Artículos, ponencias y producción académica.</p></div></div></div>';
    }
    if (d.id === "TPL-03-02") {
      return '<div class="cv-sample-window"><div class="cv-real cv-academic-research"><header><div class="ar-photo">FOTO</div><div><div class="ar-name">NOMBRE APELLIDO</div><div class="ar-role">INVESTIGADOR</div><div class="ar-line">Educación · Investigación · Desarrollo</div></div></header><div class="ar-body"><aside>' + contact + langs + '</aside><main><div class="ar-timeline"><span>2024</span><strong>Proyecto de investigación</strong><p>Descripción breve del proyecto y resultados.</p><span>2021</span><strong>Investigador / Universidad</strong><p>Experiencia académica y científica.</p><span>2018</span><strong>Formación especializada</strong><p>Doctorado / Maestría / Especialidad.</p></div><div class="ar-publications"><h5>PUBLICACIONES</h5><p>Revistas · Congresos · Proyectos · Dirección académica</p></div></main></div></div></div>';
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
      var typeOK = selectedType === "todos" || d.category.toLowerCase() === selectedType.toLowerCase();
      var formatOK = selectedFormat === "todos" ||
        (selectedFormat === "one-column" && d.columns === 1) ||
        (selectedFormat === "two-columns" && d.columns === 2) ||
        (selectedFormat === "ats" && d.ats);
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
