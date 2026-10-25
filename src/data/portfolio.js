export const profile = {
  name: 'Jair Andre Coronado Melgarejo',
  shortName: 'Jair Coronado',
  role: 'Desarrollador frontend',
  email: 'jaircoronadoxv@gmail.com',
  phone: '+51 959 073 110',
  phoneRaw: '51959073110',
  github: 'https://github.com/JairCoronado22',
  location: 'Perú',
  education: 'Ingeniería de Software · 9.º ciclo',
}

export const navigation = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Contacto', href: '#contacto' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    description: 'Construcción de interfaces modernas y mantenibles.',
    skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript', 'React', 'React Router', 'Tailwind CSS'],
  },
  {
    title: 'UI y responsive',
    description: 'Experiencias claras en escritorio, tablet y móvil.',
    skills: ['Flexbox', 'CSS Grid', 'Bootstrap', 'Diseño responsivo', 'Accesibilidad', 'UI/UX', 'Figma'],
  },
  {
    title: 'Integración y estado',
    description: 'Flujos de datos, navegación y comunicación con servicios.',
    skills: ['REST APIs', 'Fetch', 'Async/Await', 'Context API', 'Redux Toolkit', 'Manejo de errores'],
  },
  {
    title: 'Herramientas',
    description: 'Flujo de trabajo y entrega de proyectos frontend.',
    skills: ['Git', 'GitHub', 'Vite', 'npm', 'Visual Studio Code', 'Netlify', 'Render', 'LLM'],
  },
]

export const strengths = [
  'Aprendizaje continuo',
  'Responsabilidad',
  'Trabajo en equipo',
  'Atención al detalle',
  'Resolución de problemas',
  'Apertura a la retroalimentación',
]

export const projects = [
  {
    id: 'karen',
    title: 'Karen Coronado — Nutricionista pediátrica',
    category: 'Landing page profesional',
    description:
      'Sitio responsive para presentar perfil profesional, servicios, planes nutricionales, ubicación y canales de contacto directo.',
    contribution:
      'Diseño y desarrollo de la interfaz, experiencia responsive, interacción con WhatsApp, formularios de contacto y despliegue continuo.',
    url: 'https://karencoronadonutricionista.netlify.app/',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive', 'Netlify'],
    accent: 'teal',
    number: '01',
  },
  {
    id: 'jholvi',
    title: 'Dra. Jholvi Bermejo — Pediatra',
    category: 'Sitio web profesional',
    description:
      'Sitio informativo de pediatría y neonatología que presenta el perfil profesional, los servicios, las etapas de atención y los consultorios.',
    contribution:
      'Interfaz responsive con navegación a las secciones del sitio y acceso directo a la coordinación de citas por WhatsApp.',
    url: 'https://jholvibermejopediatra.netlify.app/',
    tags: ['Landing page', 'Diseño responsive', 'WhatsApp', 'Netlify'],
    accent: 'rose',
    number: '02',
  },
  {
    id: 'valcare',
    title: 'ValCare',
    category: 'Interfaz para clínica médica',
    description:
      'Experiencia web para una clínica médica, enfocada en organizar información y facilitar la interacción del usuario con los servicios.',
    contribution:
      'Desarrollo e integración de interfaces, componentes reutilizables y flujos visuales para una experiencia clara y consistente.',
    url: 'https://valcarev1.netlify.app/',
    tags: ['React', 'Componentes', 'UI/UX', 'Responsive', 'Netlify'],
    accent: 'blue',
    number: '03',
  },
]
