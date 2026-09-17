/* Control del flujo: TIPO → FORMATO → DISEÑO */
document.addEventListener('DOMContentLoaded',()=>{
  const typeGrid=document.getElementById('typeGrid');
  const formatSection=document.getElementById('formatos');
  const formatGrid=document.getElementById('formatGrid');
  const styleSection=document.getElementById('estilos');
  const selectedFormat=document.getElementById('selectedFormat');
  const selectedType=document.getElementById('selectedType');
  if(!typeGrid||!formatGrid||!formatSection||!styleSection)return;

  let selectedTypeValue='';
  let selectedFormatValue='';
  const originalTypes={profesional:'Profesional',ejecutivo:'Ejecutivo','primer-empleo':'Primer empleo',academico:'Académico'};

  typeGrid.addEventListener('click',e=>{
    const card=e.target.closest('.type-card'); if(!card)return;
    selectedTypeValue=card.dataset.type;
    formatSection.classList.add('unlocked');
    styleSection.classList.remove('unlocked');
    styleSection.classList.add('is-locked');
    selectedFormat.textContent=`${originalTypes[selectedTypeValue]||'Currículum'} · selecciona un formato`;
    document.querySelectorAll('.format-card').forEach(x=>x.classList.remove('selected'));
    selectedType.textContent='Selecciona el formato para ver los diseños disponibles.';
    setTimeout(()=>formatSection.scrollIntoView({behavior:'smooth',block:'start'}),50);
  });

  formatGrid.addEventListener('click',e=>{
    const card=e.target.closest('.format-card'); if(!card||!selectedTypeValue)return;
    selectedFormatValue=card.dataset.format;
    formatGrid.querySelectorAll('.format-card').forEach(x=>x.classList.remove('selected'));
    card.classList.add('selected');
    selectedFormat.textContent=`${originalTypes[selectedTypeValue]||'Currículum'} · ${selectedFormatValue}`;
    selectedType.textContent=`Diseños compatibles con ${selectedFormatValue}`;
    styleSection.classList.remove('is-locked');
    styleSection.classList.add('unlocked');
    window.CURRICULUM_SELECTED = {type:selectedTypeValue, format:selectedFormatValue};
    setTimeout(()=>styleSection.scrollIntoView({behavior:'smooth',block:'start'}),50);
  });
});
