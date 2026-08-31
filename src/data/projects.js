export const projects = [
  {
    id: 1,
    name: "DevBoard",
    description:
      "Dashboard SaaS de analítica para desarrolladores. Gestión de proyectos, tareas, bugs, estadísticas con gráficos, calendario, timeline Gantt, command palette y exportación a CSV/JSON.",
    problem:
      "Los líderes técnicos no tenían una vista unificada de proyectos, tareas y bugs para tomar decisiones con datos.",
    solution:
      "Diseñé un dashboard SaaS con gráficos, timeline Gantt y command palette que centraliza toda la operación en un solo lugar.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/MatiasATorresS/devboard",
    demoUrl: "https://matiasatorress.github.io/devboard/",
    category: "web",
    featured: true,
  },
  {
    id: 2,
    name: "KanbanFlow",
    description:
      "Gestor de tareas estilo Trello/Linear con Drag & Drop nativo, múltiples tableros, filtros combinables, calendario, estadísticas SVG e historial de actividad.",
    problem:
      "Los gestores de tareas habituales no permitían combinar varios tableros, filtros y un historial de actividad en una misma vista.",
    solution:
      "Construí una app estilo Trello/Linear con Drag & Drop nativo y estadísticas SVG, sin dependencias pesadas y con respuesta inmediata.",
    tags: ["HTML", "CSS", "JavaScript", "Drag & Drop API", "SVG"],
    github: "https://github.com/MatiasATorresS/kanbanflow",
    demoUrl: "https://matiasatorress.github.io/kanbanflow/",
    category: "web",
  },
  {
    id: 3,
    name: "Biblioteca",
    description:
      "Sistema de gestión de biblioteca: CRUD de libros, usuarios y préstamos/devoluciones. Dashboard con métricas, gráficos, exportación a PDF y validación de RUT chileno.",
    problem:
      "La gestión manual de libros y préstamos generaba errores de stock y falta de trazabilidad en las devoluciones.",
    solution:
      "Implementé un CRUD completo con validación de RUT chileno, dashboard de métricas y exportación a PDF para agilizar la administración.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js", "jsPDF"],
    github: "https://github.com/MatiasATorresS/biblioteca",
    demoUrl: "https://matiasatorress.github.io/biblioteca/",
    category: "web",
  },
  {
    id: 4,
    name: "StockFlow",
    description:
      "Sistema de gestión de inventario: control de productos, proveedores, entradas y salidas de stock con dashboard de métricas e historial de movimientos.",
    problem:
      "Los inventarios se controlaban en planillas, sin trazabilidad de las entradas y salidas de stock.",
    solution:
      "Desarrollé un sistema con control de productos y proveedores, historial de movimientos y dashboard de métricas para auditar cada cambio.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/MatiasATorresS/stockflow",
    demoUrl: "https://matiasatorress.github.io/stockflow/",
    category: "web",
  },
  {
    id: 5,
    name: "AutoCare",
    description:
      "Sistema de gestión de taller mecánico: registro de vehículos, órdenes de trabajo, seguimiento de reparaciones y dashboard con estadísticas del taller.",
    problem:
      "Los talleres mecánicos no mantenían un historial claro de vehículos ni de las órdenes de reparación en curso.",
    solution:
      "Creé un gestor de taller con registro de vehículos, órdenes de trabajo, seguimiento de reparaciones y estadísticas del servicio.",
    tags: ["HTML", "CSS", "JavaScript", "Chart.js"],
    github: "https://github.com/MatiasATorresS/autocare",
    demoUrl: "https://matiasatorress.github.io/autocare/",
    category: "web",
  },
  {
    id: 6,
    name: "IncidentHub",
    description:
      "Sistema de gestión de incidencias TI: tickets con estados, prioridades, asignación de técnicos, SLA, gráficos de productividad y timeline de actividad.",
    problem:
      "La gestión de incidencias TI carecía de control de SLA y trazabilidad sobre la productividad de los técnicos.",
    solution:
      "Desarrollé en React un sistema de tickets con estados, prioridades y gráficos de productividad, más un timeline de actividad completo.",
    tags: ["React", "Recharts", "Lucide Icons"],
    github: "https://github.com/MatiasATorresS/IncidentHub",
    category: "web",
  },
  {
    id: 7,
    name: "TODO",
    description:
      "Gestor de tareas Kanban con múltiples tableros, columnas personalizables, drag & drop, filtros, tema claro/oscuro y persistencia en localStorage.",
    problem:
      "Las listas de tareas simples no soportan columnas personalizables ni varios tableros independientes.",
    solution:
      "Hice un kanban con drag & drop, filtros, tema claro/oscuro y persistencia en localStorage, sin servidor ni dependencias pesadas.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MatiasATorresS/TODO",
    demoUrl: "https://matiasatorress.github.io/TODO/",
    category: "web",
  },
  {
    id: 8,
    name: "Análisis de Siniestros Chile",
    description:
      "Análisis exploratorio de 25 años de datos oficiales de siniestros de tránsito en Chile (CONASET). Visualizaciones por región, horario y tipo de usuario.",
    problem:
      "Los datos históricos de siniestros de tránsito del CONASET no estaban analizados para detectar patrones de riesgo.",
    solution:
      "Realicé un análisis exploratorio en Python de 25 años de datos, con visualizaciones por región, horario y tipo de usuario, listas para informes.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/MatiasATorresS/DatosAccidentes",
    category: "data",
  },
  {
    id: 9,
    name: "Scuba Cat",
    description:
      "Aplicación de visión por computador que detecta gestos con la mano y la cara usando MediaPipe, y reproduce un video de un gato buceador como respuesta.",
    problem:
      "Demostrar visión por computador en tiempo real requería una interfaz clara y a la vez entretenida.",
    solution:
      "Construí una app con MediaPipe que detecta gestos de mano y cara en tiempo real y responde reproduciendo un video de un gato buceador.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    github: "https://github.com/MatiasATorresS/PythonCamara",
    category: "ai",
  },
];