document.addEventListener('DOMContentLoaded',()=>{
  const typeGrid=document.getElementById('typeGrid');
  const styleGrid=document.getElementById('styleGrid');
  const stylesSection=document.getElementById('estilos');
  const questionsSection=document.getElementById('preguntas');
  const selectedType=document.getElementById('selectedType');
  const questionIntro=document.getElementById('questionIntro');
  const form=document.getElementById('cvForm');
  const actions=document.getElementById('formActions');
  let cvType='';
  let cvStyle='';

  const typeNames={
    profesional:'Currículum profesional',
    ejecutivo:'Currículum ejecutivo',
    'primer-empleo':'Currículum de primer empleo',
    academico:'Currículum académico'
  };
  const styleNames={
    ejecutivo:'Ejecutivo',
    corporativo:'Corporativo',
    academico:'Académico',
    creativo:'Creativo',
    minimalista:'Minimalista Premium'
  };

  const baseFields=`
    <div class="form-block">
      <h3>Información personal</h3><p>Los datos básicos que aparecerán en la cabecera de tu currículum.</p>
      <div class="form-grid">
        <div class="field"><label>Nombre completo *</label><input name="nombre" autocomplete="name" required></div>
        <div class="field"><label>Profesión o cargo *</label><input name="profesion" required></div>
        <div class="field"><label>Teléfono *</label><input name="telefono" autocomplete="tel" required></div>
        <div class="field"><label>Correo electrónico *</label><input type="email" name="correo" autocomplete="email" required></div>
        <div class="field"><label>Ciudad *</label><input name="ciudad" required></div>
        <div class="field"><label>País *</label><input name="pais" required></div>
        <div class="field full"><label>Fotografía <span class="field-note">(opcional)</span></label><input type="file" name="fotografia" accept="image/*"></div>
        <div class="field full"><label>Otros datos de contacto <span class="field-note">(opcional)</span></label><input name="otros_contacto" placeholder="Sitio web, LinkedIn u otros datos que quieras incluir"></div>
      </div>
    </div>

    <div class="form-block">
      <h3>Perfil profesional</h3><p>Puedes escribirlo tú mismo. Más adelante podremos incorporar asistencia de redacción sin reemplazar tu texto.</p>
      <div class="form-grid"><div class="field full"><label>¿Cómo te describirías profesionalmente?</label><textarea name="perfil" placeholder="Cuéntanos quién eres, qué haces y qué valor aportas."></textarea></div></div>
    </div>

    <div class="form-block">
      <h3>Experiencia profesional</h3><p>Agrega los empleos o experiencias que quieras mostrar. Puedes añadir tantos como necesites.</p>
      <div id="experiencias"></div><button class="mini-btn" type="button" data-add="experiencia">+ Agregar experiencia</button>
    </div>

    <div class="form-block">
      <h3>Educación</h3><p>Registra tus estudios y formación académica.</p>
      <div id="educacion"></div><button class="mini-btn" type="button" data-add="educacion">+ Agregar formación</button>
    </div>

    <div class="form-block">
      <h3>Certificaciones</h3><p>Incluye certificaciones relevantes para tu perfil.</p>
      <div id="certificaciones"></div><button class="mini-btn" type="button" data-add="certificacion">+ Agregar certificación</button>
    </div>

    <div class="form-block">
      <h3>Cursos</h3><p>Agrega cursos que complementen tu preparación.</p>
      <div id="cursos"></div><button class="mini-btn" type="button" data-add="curso">+ Agregar curso</button>
    </div>

    <div class="form-block">
      <h3>Habilidades</h3><p>Selecciona o escribe las habilidades que quieras destacar. Las sugerencias serán una ayuda, no una obligación.</p>
      <div class="form-grid"><div class="field full"><label>Habilidades</label><textarea name="habilidades" placeholder="Ej.: liderazgo, Excel, atención al cliente, diseño..."></textarea></div></div>
    </div>

    <div class="form-block">
      <h3>Idiomas</h3><p>Indica los idiomas que deseas presentar y tu nivel.</p>
      <div id="idiomas"></div><button class="mini-btn" type="button" data-add="idioma">+ Agregar idioma</button>
    </div>

    <div class="form-block">
      <h3>Proyectos</h3><p>Especialmente útiles para perfiles profesionales, creativos, técnicos y de primer empleo.</p>
      <div id="proyectos"></div><button class="mini-btn" type="button" data-add="proyecto">+ Agregar proyecto</button>
    </div>

    <div class="form-block optional-block" data-academic-block>
      <h3>Premios y reconocimientos</h3><p>Esta sección es opcional y puede ocultarse si no deseas utilizarla.</p>
      <div id="premios"></div><button class="mini-btn" type="button" data-add="premio">+ Agregar reconocimiento</button>
    </div>

    <div class="form-block optional-block">
      <h3>Referencias profesionales</h3><p>Incluye personas que puedan respaldar tu trayectoria profesional.</p>
      <div id="referencias-profesionales"></div><button class="mini-btn" type="button" data-add="referencia-profesional">+ Agregar referencia profesional</button>
    </div>

    <div class="form-block optional-block">
      <h3>Referencias personales</h3><p>Sección completamente opcional. Puedes dejarla vacía.</p>
      <div id="referencias-personales"></div><button class="mini-btn" type="button" data-add="referencia-personal">+ Agregar referencia personal</button>
    </div>`;

  const repeatable={
    experiencia:`<div class="repeatable-title"><strong>Experiencia</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Cargo *</label><input name="cargo[]"></div><div class="field"><label>Empresa</label><input name="empresa[]"></div><div class="field"><label>Ubicación</label><input name="ubicacion[]"></div><div class="field"><label>Fecha de inicio</label><input type="month" name="inicio[]"></div><div class="field"><label>Fecha de finalización</label><input type="month" name="fin[]"></div><div class="field"><label>¿Actualmente?</label><select name="actualmente[]"><option value="no">No</option><option value="si">Sí</option></select></div><div class="field full"><label>Descripción</label><textarea name="descripcion[]"></textarea></div><div class="field full"><label>Logros</label><textarea name="logros[]" placeholder="Resultados, mejoras o logros que quieras destacar."></textarea></div></div>`,
    educacion:`<div class="repeatable-title"><strong>Formación</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Título o grado</label><input name="titulo_educacion[]"></div><div class="field"><label>Institución</label><input name="institucion[]"></div><div class="field"><label>Fecha de inicio</label><input type="month" name="inicio_educacion[]"></div><div class="field"><label>Fecha de finalización</label><input type="month" name="fin_educacion[]"></div><div class="field full"><label>Descripción</label><textarea name="descripcion_educacion[]"></textarea></div></div>`,
    certificacion:`<div class="repeatable-title"><strong>Certificación</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input name="certificacion[]"></div><div class="field"><label>Institución emisora</label><input name="emisor[]"></div><div class="field"><label>Fecha</label><input type="month" name="fecha_certificacion[]"></div><div class="field"><label>Número de credencial</label><input name="credencial[]"></div><div class="field full"><label>Enlace de verificación</label><input type="url" name="verificacion[]"></div></div>`,
    curso:`<div class="repeatable-title"><strong>Curso</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input name="curso[]"></div><div class="field"><label>Institución</label><input name="institucion_curso[]"></div><div class="field"><label>Fecha</label><input type="month" name="fecha_curso[]"></div><div class="field"><label>Duración</label><input name="duracion[]"></div><div class="field full"><label>Descripción</label><textarea name="descripcion_curso[]"></textarea></div></div>`,
    idioma:`<div class="repeatable-title"><strong>Idioma</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Idioma</label><input name="idioma[]"></div><div class="field"><label>Nivel</label><select name="nivel_idioma[]"><option value="">Seleccionar</option><option>Básico</option><option>Intermedio</option><option>Avanzado</option><option>Fluido</option><option>Nativo</option></select></div><div class="field full"><label>Certificación <span class="field-note">(opcional)</span></label><input name="certificacion_idioma[]"></div></div>`,
    proyecto:`<div class="repeatable-title"><strong>Proyecto</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input name="proyecto[]"></div><div class="field"><label>Rol</label><input name="rol_proyecto[]"></div><div class="field"><label>Fecha</label><input name="fecha_proyecto[]"></div><div class="field"><label>Enlace</label><input type="url" name="enlace_proyecto[]"></div><div class="field full"><label>Descripción</label><textarea name="descripcion_proyecto[]"></textarea></div></div>`,
    premio:`<div class="repeatable-title"><strong>Reconocimiento</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre</label><input name="premio[]"></div><div class="field"><label>Organización</label><input name="organizacion_premio[]"></div><div class="field"><label>Fecha</label><input name="fecha_premio[]"></div><div class="field full"><label>Descripción</label><textarea name="descripcion_premio[]"></textarea></div></div>`,
    'referencia-profesional':`<div class="repeatable-title"><strong>Referencia profesional</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre completo</label><input name="ref_prof_nombre[]"></div><div class="field"><label>Cargo</label><input name="ref_prof_cargo[]"></div><div class="field"><label>Empresa / institución</label><input name="ref_prof_empresa[]"></div><div class="field"><label>Relación profesional</label><input name="ref_prof_relacion[]"></div><div class="field"><label>Teléfono</label><input name="ref_prof_telefono[]"></div><div class="field"><label>Correo</label><input type="email" name="ref_prof_correo[]"></div></div>`,
    'referencia-personal':`<div class="repeatable-title"><strong>Referencia personal</strong><button class="mini-btn" type="button" data-remove>Quitar</button></div><div class="form-grid"><div class="field"><label>Nombre completo</label><input name="ref_personal_nombre[]"></div><div class="field"><label>Oficio</label><input name="ref_personal_oficio[]"></div><div class="field"><label>Teléfono</label><input name="ref_personal_telefono[]"></div></div>`
  };

  function unlock(section){section.classList.remove('is-locked');section.classList.add('unlocked')}

  typeGrid?.addEventListener('click',e=>{
    const card=e.target.closest('.type-card'); if(!card)return;
    typeGrid.querySelectorAll('.type-card').forEach(x=>x.classList.remove('selected'));
    card.classList.add('selected'); cvType=card.dataset.type;
    selectedType.textContent=`${typeNames[cvType]} · ahora elige un estilo`;
    unlock(stylesSection);
    stylesSection.scrollIntoView({behavior:'smooth',block:'start'});
  });

  styleGrid?.addEventListener('click',e=>{
    const card=e.target.closest('.style-card'); if(!card || !cvType)return;
    styleGrid.querySelectorAll('.style-card').forEach(x=>x.classList.remove('selected'));
    card.classList.add('selected'); cvStyle=card.dataset.style;
    renderForm(); unlock(questionsSection);
    questionsSection.scrollIntoView({behavior:'smooth',block:'start'});
  });

  function renderForm(){
    form.innerHTML=baseFields;
    questionIntro.innerHTML=`<strong>${typeNames[cvType]} · estilo ${styleNames[cvStyle]}</strong><span>Responde con tus propias palabras. Los campos opcionales pueden quedar vacíos.</span>`;
    actions.hidden=false;
    const academic=document.querySelector('[data-academic-block]');
    if(academic) academic.style.display=cvType==='academico'?'block':'block';
    document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>addRepeatable(btn.dataset.add)));
    form.addEventListener('click',e=>{if(e.target.matches('[data-remove]'))e.target.closest('.repeatable')?.remove()});
    addRepeatable('experiencia'); addRepeatable('educacion');
    if(cvType==='academico') addRepeatable('proyecto');
  }

  function addRepeatable(type){
    const map={experiencia:'experiencias',educacion:'educacion',certificacion:'certificaciones',curso:'cursos',idioma:'idiomas',proyecto:'proyectos',premio:'premios','referencia-profesional':'referencias-profesionales','referencia-personal':'referencias-personales'};
    const container=document.getElementById(map[type]); if(!container||!repeatable[type])return;
    const block=document.createElement('div'); block.className='repeatable form-block'; block.innerHTML=repeatable[type]; container.appendChild(block);
  }

  document.getElementById('backToStyles')?.addEventListener('click',()=>document.getElementById('estilos').scrollIntoView({behavior:'smooth'}));
  document.getElementById('saveDraft')?.addEventListener('click',()=>{
    const data={tipo:cvType,estilo:cvStyle,form:new FormData(form)};
    const plain={tipo:cvType,estilo:cvStyle}; data.form.forEach((v,k)=>{if(typeof v==='string')plain[k]=v});
    localStorage.setItem('lumiword_cv_borrador',JSON.stringify(plain));
    alert('Tu avance se guardó en este navegador. Más adelante conectaremos este borrador con el sistema oficial de datos.');
  });
  document.getElementById('continuePreview')?.addEventListener('click',()=>{
    if(!form.checkValidity()){form.reportValidity();return;}
    alert('Formulario completo. El siguiente módulo será la previsualización del currículum con marca de agua.');
  });
});
