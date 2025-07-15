```javascript
// script.js

const data = [
  {
    semestre: "Primer semestre",
    cursos: [
      { code: "QUI-010", name: "Química y sociedad", prereq: [] },
      { code: "MAT-021", name: "Matemática I", prereq: [] },
      { code: "FIS-100", name: "Introducción a la física", prereq: [] },
      { code: "MIN-100", name: "Introducción a la ingeniería de Minas", prereq: [] },
      { code: "DEW-100", name: "Educación física I", prereq: [] }
    ]
  },
  {
    semestre: "Segundo semestre",
    cursos: [
      { code: "IWI-131", name: "Programación", prereq: [] },
      { code: "MAT-022", name: "Matemática II", prereq: ["MAT-021"] },
      { code: "FIS-110", name: "Física general I", prereq: ["FIS-100"] },
      { code: "MIN-101", name: "Trabajo en equipo", prereq: ["MIN-100"] },
      { code: "DEW-101", name: "Educación física II", prereq: ["DEW-100"] }
    ]
  },
  {
    semestre: "Tercer semestre",
    cursos: [
      { code: "QUI-021", name: "Química Básica", prereq: ["QUI-010"] },
      { code: "MAT-023", name: "Matemática III", prereq: ["MAT-022"] },
      { code: "FIS-130", name: "Física general III", prereq: ["FIS-110"] },
      { code: "MIN-102", name: "Industria minera", prereq: ["MIN-100"] },
      { code: "MIN-103", name: "Ciencia ambiental", prereq: ["MIN-100"] },
      { code: "DEW-0",   name: "Deporte", prereq: ["DEW-101"] }
    ]
  },
  {
    semestre: "Cuarto semestre",
    cursos: [
      { code: "IWM-185", name: "Gráfica en ingeniería", prereq: ["IWI-131"] },
      { code: "MAT-024", name: "Matemática IV", prereq: ["MAT-023"] },
      { code: "FIS-120", name: "Física general II", prereq: ["FIS-110","MAT-022"] },
      { code: "MIN-130", name: "Geología", prereq: ["MIN-102"] },
      { code: "MIN-205", name: "Materiales para la industria minera", prereq: ["FIS-110","QUI-010"] }
    ]
  },
  {
    semestre: "Quinto semestre",
    cursos: [
      { code: "MIN-233", name: "Geomática", prereq: ["MIN-102"] },
      { code: "FIS-140", name: "Física general IV", prereq: ["FIS-130","FIS-120"] },
      { code: "MIN-232", name: "Geología estructural y geotecnia", prereq: ["MIN-130"] },
      { code: "MIN-250", name: "Procesamientos de minerales I", prereq: ["MIN-130","MIN-102"] },
      { code: "MIN-240", name: "Resistencia de materiales", prereq: ["MIN-205","MAT-023","FIS-110"] },
      { code: "HIW-310", name: "Inglés para la ingeniería I", prereq: [] }
    ]
  },
  {
    semestre: "Sexto semestre",
    cursos: [
      { code: "MIN-265", name: "Fluidodinámica en minería", prereq: ["MAT-024","FIS-130"] },
      { code: "MIN-235", name: "Geoestadística y análisis espacial", prereq: ["MIN-233","MIN-101"] },
      { code: "MIN-242", name: "Mecánica de rocas", prereq: ["MIN-232","MIN-240","MAT-024"] },
      { code: "MIN-260", name: "Procesamientos de minerales II", prereq: ["MIN-130","MIN-102","QUI-021","MIN-103"] },
      { code: "MIN-244", name: "Perforación y tronadura", prereq: ["MIN-232","QUI-021","FIS-130"] },
      { code: "HIW-311", name: "Inglés para la ingeniería II", prereq: ["HIW-310"] }
    ]
  },
  {
    semestre: "Séptimo semestre",
    cursos: [
      { code: "IWN-170", name: "Economía I-A", prereq: ["MAT-023"] },
      { code: "MIN-324", name: "Ingeniería de medios granulares", prereq: ["MIN-240"] },
      { code: "MIN-314", name: "Ingeniería de rocas", prereq: ["MIN-244","MIN-242"] },
      { code: "MIN-334", name: "Minería de superficie", prereq: ["MIN-242","MIN-244","MIN-233"] },
      { code: "MIN-270", name: "Procesamientos de minerales III", prereq: ["MIN-250","MIN-260"] }
    ]
  },
  {
    semestre: "Octavo semestre",
    cursos: [
      { code: "IWN-261", name: "Administración general", prereq: [] },
      { code: "MIN-1",   name: "Electivo I", prereq: [] },
      { code: "MIN-332", name: "Geología económica", prereq: ["MIN-250","MIN-260"] },
      { code: "MIN-344", name: "Minería subterránea", prereq: ["MIN-233","MIN-324","MIN-314"] },
      { code: "MIN-280", name: "Procesamientos de minerales IV", prereq: ["MIN-270"] }
    ]
  },
  {
    semestre: "Noveno semestre",
    cursos: [
      { code: "IWN-270", name: "Información y control financiero", prereq: ["IWN-170"] },
      { code: "MIN-2",   name: "Electivo II", prereq: [] },
      { code: "MIN-354", name: "Automatización y robótica", prereq: ["MIN-270","MIN-334"] },
      { code: "MIN-364", name: "Evaluación de yacimientos y planificación minera", prereq: ["MIN-235","MIN-344","MIN-334","MIN-270"] },
      { code: "MIN-220", name: "Simulación y modelación", prereq: ["MIN-270","IWI-131","MIN-334"] },
      { code: "HRW-1",  name: "Humanístico I", prereq: [] }
    ]
  },
  {
    semestre: "Décimo semestre",
    cursos: [
      { code: "MIN-384", name: "Legislación minera y laboral", prereq: ["IWN-270","IWN-261","MIN-233"] },
      { code: "MIN-374", name: "Negocio minero sustentable", prereq: ["MIN-280","MIN-332"] },
      { code: "MIN-370", name: "Seguridad industrial y ventilación", prereq: ["MIN-314","MIN-265"] },
      { code: "MIN-394", name: "Taller de gestión y proyectos", prereq: ["MIN-334","MIN-270"] },
      { code: "MIN-397", name: "Trabajo de titulación I", prereq: ["MIN-332","MIN-344","MIN-280"] },
      { code: "HRW-2",  name: "Humanístico II", prereq: [] }
    ]
  },
  {
    semestre: "Onceavo semestre",
    cursos: [
      { code: "MIN-3",   name: "Electivo III", prereq: [] },
      { code: "MIN-398", name: "Trabajo de titulación I", prereq: ["MIN-397"] }
    ]
  }
];

const mallaContainer = document.getElementById('malla');
const cursoElements = {};

// Generar la malla en el DOM
data.forEach(block => {
  const semDiv = document.createElement('div');
  semDiv.classList.add('semestre');
  semDiv.innerHTML = `<h2>${block.semestre}</h2>`;

  block.cursos.forEach(curso => {
    const curDiv = document.createElement('div');
    curDiv.classList.add('curso');
    curDiv.textContent = `${curso.code} - ${curso.name}`;
    curDiv.dataset.code = curso.code;
    curDiv.dataset.prereq = JSON.stringify(curso.prereq);
    semDiv.appendChild(curDiv);
    cursoElements[curso.code] = curDiv;

    // Evento de click
    curDiv.addEventListener('click', () => {
      if (!curDiv.classList.contains('desbloqueado') && !curDiv.classList.contains('aprobado')) return;
      curDiv.classList.toggle('aprobado');
      updateCursos();
    });
  });

  mallaContainer.appendChild(semDiv);
});

// Función para actualizar estados
function updateCursos() {
  Object.values(cursoElements).forEach(el => {
    const prereqs = JSON.parse(el.dataset.prereq);
    const allApproved = prereqs.every(code => cursoElements[code].classList.contains('aprobado'));
    if (allApproved) el.classList.add('desbloqueado');
    else el.classList.remove('desbloqueado');
  });
}

// Inicializar desbloqueo de cursos sin prerequisitos
updateCursos();
```
