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
    if(d.id==="TPL-03-03") return '<div class="cv-sample-window premium-window"><div class="cv-real x13"><header><b>03</b><div><small>ACADEMIC PROFILE</small><strong>NOMBRE APELLIDO</strong><em>DOCENCIA · INVESTIGACIÓN · PUBLICACIONES</em></div></header><div class="x13body"><aside><div class="xphoto">FOTO</div><b>CONTACTO</b><span>correo@ejemplo.com</span><span>Managua · Nicaragua</span><b>ÁREAS</b><span>Educación</span><span>Investigación</span><span>Gestión</span></aside><main><section class="xfeature"><h5>PERFIL ACADÉMICO</h5><p>Especialista dedicado a la formación, investigación y transferencia de conocimiento.</p></section><section><h5>TRAYECTORIA</h5><b>Universidad de ejemplo</b><small>Docencia · 2021 — Actualidad</small><p>Responsabilidades académicas y proyectos.</p><b>Centro de Investigación</b><small>2018 — 2021</small></section><section><h5>PUBLICACIONES</h5><p>Artículos · Ponencias · Proyectos</p></section></main></div></div></div>';
    if(d.id==="TPL-03-04") return '<div class="cv-sample-window premium-window"><div class="cv-real x14"><header><small>CURRICULUM VITAE</small><strong>NOMBRE<br>APELLIDO</strong><em>PhD · DOCENTE · INVESTIGADOR</em><span>correo@ejemplo.com · Ciudad, País</span></header><div class="x14grid"><main><h5>PERFIL</h5><p>Trayectoria académica con enfoque en investigación, docencia y producción intelectual.</p><h5>EXPERIENCIA ACADÉMICA</h5><b>Profesor / Investigador</b><small>2022 — Actualidad</small><p>Universidad de ejemplo</p><b>Investigador</b><small>2018 — 2022</small><h5>FORMACIÓN</h5><p>Doctorado · Maestría · Licenciatura</p></main><aside><b>ESPECIALIDAD</b><span>Educación</span><span>Investigación</span><span>Publicaciones</span><b>IDIOMAS</b><span>Español · Nativo</span><span>Inglés · Avanzado</span></aside></div></div></div>';
    if(d.id==="TPL-03-05") return '<div class="cv-sample-window premium-window"><div class="cv-real x15"><header><div><small>05 / ACADEMIC CV</small><strong>NOMBRE APELLIDO</strong><em>INVESTIGADOR · DOCENTE · AUTOR</em></div><span>ORCID · LinkedIn<br>correo@ejemplo.com</span></header><div class="x15body"><main><h5>FORMACIÓN Y CREDENCIALES</h5><p>Doctorado en Especialidad · Universidad · 2020</p><p>Maestría · Universidad · 2017</p><h5>EXPERIENCIA Y DOCENCIA</h5><b>Profesor titular</b><small>2022 — Actualidad</small><b>Investigador asociado</b><small>2018 — 2022</small><h5>INVESTIGACIÓN</h5><p>Áreas · proyectos · dirección académica.</p></main><aside><strong>12</strong><span>PUBLICACIONES</span><strong>08</strong><span>PROYECTOS</span><strong>05</strong><span>CONGRESOS</span></aside></div></div></div>';
    if(d.id==="TPL-04-01") return '<div class="cv-sample-window premium-window"><div class="cv-real x16"><div class="xvert">CREATIVE<br>01</div><header><small>CREATIVE PORTFOLIO CV</small><strong>NOMBRE<br>APELLIDO</strong><em>DISEÑO · DIRECCIÓN DE ARTE · BRANDING</em></header><div class="x16body"><main><div class="xlead">Diseñador orientado a convertir ideas en experiencias visuales.</div><h5>EXPERIENCIA</h5><b>Director creativo · Estudio</b><small>2022 — Actualidad</small><p>Campañas, identidad visual y dirección de proyectos.</p><b>Diseñador senior · Agencia</b><small>2019 — 2022</small></main><aside><div class="xphoto">FOTO</div><b>CONTACTO</b><span>correo@ejemplo.com</span><span>Managua · Nicaragua</span><b>HABILIDADES</b><span>Branding</span><span>Dirección de arte</span><span>Adobe</span></aside></div></div></div>';
    if(d.id==="TPL-04-02") return '<div class="cv-sample-window premium-window"><div class="cv-real x17"><header><b>02</b><div><strong>NOMBRE APELLIDO</strong><em>CREATIVE DIRECTOR / DESIGNER</em></div><div class="xphoto">FOTO</div></header><nav><span>IDEA</span><span>CONCEPTO</span><span>IMPACTO</span></nav><div class="x17body"><main><i>PROFILE</i><p>Creativo estratégico con visión de marca, narrativa y resultados.</p><h5>SELECTED EXPERIENCE</h5><b>Creative Director · Studio</b><small>2022 — Actualidad</small><p>Dirección creativa y campañas.</p><b>Designer · Agency</b><small>2019 — 2022</small></main><aside><h5>EXPERTISE</h5><span>Brand strategy</span><span>Art direction</span><span>Digital design</span><span>Editorial</span><h5>CONTACT</h5><span>correo@ejemplo.com</span></aside></div></div></div>';
    if(d.id==="TPL-04-03") return '<div class="cv-sample-window premium-window"><div class="cv-real x18"><div class="xorb"></div><header><strong>NOMBRE<br>APELLIDO</strong><em>VISUAL DESIGNER</em><div class="xphoto">FOTO</div></header><div class="x18body"><div class="xindex">01<br>02<br>03<br>04</div><main><h5>ABOUT</h5><p>Diseño visual, identidad y comunicación digital.</p><h5>EXPERIENCE</h5><b>Visual Designer</b><small>2022 — Actualidad</small><b>Brand Designer</b><small>2019 — 2022</small><h5>TOOLS</h5><p>Adobe · Figma · Branding · Editorial · UI</p></main></div></div></div>';
    if(d.id==="TPL-04-04") return '<div class="cv-sample-window premium-window"><div class="cv-real x19"><header><small>THE PROFESSIONAL EDITION · 04</small><strong>NOMBRE<br><i>APELLIDO</i></strong><em>CREATIVE STRATEGIST</em></header><div class="x19feature"><div class="xphoto">FOTO</div><div><small>01 / PERFIL</small><p>Profesional creativo con enfoque en estrategia, contenido y marca.</p></div></div><div class="x19body"><main><h5>EXPERIENCIA</h5><b>Creative Strategist</b><small>2022 — Actualidad</small><p>Campañas, conceptos y contenido.</p><b>Brand Specialist</b><small>2019 — 2022</small></main><aside><h5>DISCIPLINAS</h5><span>Branding</span><span>Contenido</span><span>Estrategia</span><span>Dirección</span></aside></div><footer>correo@ejemplo.com · Managua · Nicaragua</footer></div></div>';
    if(d.id==="TPL-04-05") return '<div class="cv-sample-window premium-window"><div class="cv-real x20"><div class="xframe"></div><header><small>CREATIVE PROFESSIONAL</small><strong>NOMBRE APELLIDO</strong><em>MARKETING · CONTENIDO · ESTRATEGIA</em><div class="xphoto">FOTO</div></header><div class="x20body"><main><div class="xquote">Convertir ideas en resultados visibles.</div><h5>TRAYECTORIA</h5><b>Marketing Manager</b><small>2022 — Actualidad</small><p>Campañas, contenido y crecimiento de marca.</p><b>Content Specialist</b><small>2019 — 2022</small></main><aside><h5>FORTALEZAS</h5><span>Storytelling</span><span>Marketing</span><span>Contenido</span><h5>CONTACTO</h5><span>correo@ejemplo.com</span></aside></div></div></div>';
    if(d.id==="TPL-05-01") return '<div class="cv-sample-window premium-window"><div class="cv-real x21"><header><b>L</b><div><strong>NOMBRE APELLIDO</strong><em>PROFESIÓN / ESPECIALIDAD</em></div><span>correo@ejemplo.com<br>Managua · Nicaragua</span></header><hr><main><h5>PERFIL</h5><p>Profesional preciso, orientado a resultados y especializado en proyectos de alto impacto.</p><h5>EXPERIENCIA</h5><div><small>2022—ACT.</small><b>Profesional / Empresa</b><p>Responsabilidades y logros principales.</p></div><div><small>2019—2022</small><b>Especialista / Organización</b></div><h5>FORMACIÓN</h5><p>Licenciatura · Universidad de ejemplo</p></main><aside><h5>COMPETENCIAS</h5><span>Liderazgo</span><span>Estrategia</span><span>Gestión</span><span>Comunicación</span></aside></div></div>';
    if(d.id==="TPL-05-02") return '<div class="cv-sample-window premium-window"><div class="cv-real x22"><div class="xshape"></div><header><small>02 / MINIMAL</small><strong>NOMBRE<br>APELLIDO</strong><em>PRODUCT · OPERATIONS · STRATEGY</em><span>correo@ejemplo.com · +000 0000 0000 · LinkedIn</span></header><main><h5>PERFIL PROFESIONAL</h5><p>Especialista en convertir procesos complejos en soluciones claras y medibles.</p><div class="x22cols"><section><h5>EXPERIENCIA</h5><b>Product Manager</b><small>2022 — Actualidad</small><p>Producto, operaciones y mejora continua.</p><b>Analista</b><small>2019 — 2022</small></section><section><h5>HABILIDADES</h5><span>Producto</span><span>Operaciones</span><span>Data</span><span>Estrategia</span></section></div></main></div></div>';
    if(d.id==="TPL-05-03") return '<div class="cv-sample-window premium-window"><div class="cv-real x23"><header><small>CV · 2026</small><strong>NOMBRE APELLIDO</strong><em>PROFESIONAL · ESPECIALIDAD</em></header><div class="x23lead"><b>01</b><p>Una presentación profesional limpia, editorial y centrada en lo esencial.</p></div><div class="x23body"><section><h5>EXPERIENCIA</h5><b>Gerente de Proyectos</b><small>2022 — Actualidad</small><p>Gestión, planificación y resultados.</p><b>Coordinador</b><small>2019 — 2022</small></section><section><h5>FORMACIÓN</h5><p>Licenciatura · Universidad</p><h5>IDIOMAS</h5><p>Español · Inglés</p></section></div><footer>correo@ejemplo.com · Managua, Nicaragua</footer></div></div>';
    if(d.id==="TPL-05-04") return '<div class="cv-sample-window premium-window"><div class="cv-real x24"><div class="xbranch">⌁</div><header><strong>NOMBRE<br><i>APELLIDO</i></strong><em>PROFESIÓN · PERFIL</em><span>correo@ejemplo.com · +000 0000 0000</span></header><main><h5>PERFIL</h5><p>Profesional con enfoque humano, ordenado y orientado a resultados.</p><h5>EXPERIENCIA</h5><b>Especialista</b><small>Empresa · 2022 — Actualidad</small><p>Gestión y desarrollo de proyectos.</p><b>Coordinador</b><small>Organización · 2019 — 2022</small><h5>EDUCACIÓN</h5><p>Licenciatura · Universidad</p></main></div></div>';
    if(d.id==="TPL-05-05") return '<div class="cv-sample-window premium-window"><div class="cv-real x25"><div class="xtop"><span>05</span><span>CURRICULUM VITAE</span></div><header><strong>NOMBRE APELLIDO</strong><em>EXECUTIVE · PROFESSIONAL · SPECIALIST</em><span>Managua · Nicaragua · correo@ejemplo.com · LinkedIn</span></header><div class="xstatement">Profesional orientado a resultados con experiencia en estrategia, liderazgo y ejecución.</div><div class="x25grid"><main><h5>EXPERIENCIA</h5><b>Director / Profesional</b><small>2022 — Actualidad</small><p>Dirección de proyectos y resultados.</p><b>Especialista</b><small>2019 — 2022</small></main><aside><h5>ÁREAS CLAVE</h5><span>Estrategia</span><span>Liderazgo</span><span>Gestión</span><h5>FORMACIÓN</h5><span>Licenciatura</span><span>Especialidad</span></aside></div></div></div>';

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
