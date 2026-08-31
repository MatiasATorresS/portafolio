# Mi Portafolio

Sitio personal donde muestro mi trabajo. Soy **Matías Torres Sandoval**, ingeniero civil informático de Chile, y acá contarás quién soy, qué uso para trabajar y algunos de los proyectos que he construido.

Está hecho con **React + Vite**, con animaciones suaves de Framer Motion y bastante enfoque en que se vea bien en cualquier pantalla.

## Qué vas a encontrar

- Una presentación con acceso rápido a proyectos y a mi CV en PDF.
- Sobre mí: mi formación y experiencia, en formato de timeline.
- Mis habilidades agrupadas por categorías.
- Proyectos filtrables por tipo: desarrollo web, análisis de datos e IA/visión.
- Una sección de contacto con botón para copiar mi email y enlaces a mis redes.

## Con qué está hecho

- **React 19** para la interfaz.
- **Vite 8** como bundler y dev server.
- **Framer Motion** para las animaciones.
- **Lucide React** para los íconos.
- **Oxlint** para mantener el código ordenado.

Estructura simple de una página:

```
src/components   → Componentes por sección (Hero, About, Skills, Projects, Contact)
src/data         → projects.js: la fuente de datos de los proyectos
src/App.jsx      → Junta todas las secciones
public/          → Archivos estáticos (CV, avatar, favicon)
```

## Cómo correrlo

Necesitas Node.js y, si puedes, pnpm:

```bash
pnpm install    # instalar dependencias
pnpm dev        # desarrollo en http://localhost:5173
pnpm build      # compilación de producción
pnpm preview    # previsualizar el build
pnpm lint       # linter
```

## Los proyectos

Aparecen 9, entre ellos:

- **DevBoard** — un dashboard para desarrolladores.
- **KanbanFlow** — kanban estilo Trello/Linear con drag & drop.
- **IncidentHub** — gestión de incidencias TI, hecho con React y Recharts.
- **Análisis de Siniestros Chile** — análisis de datos públicos de CONASET con Python.
- **Scuba Cat** — visión por computador con MediaPipe y OpenCV.

## Contacto

Si quieres hablar, por acá estoy:

- Email: matiastorres57@gmail.com
- GitHub: [@MatiasATorresS](https://github.com/MatiasATorresS)
- LinkedIn: [in/matiastorres](https://linkedin.com/in/matiastorressandoval)

Diseñado y construido por mí. 😄

_Nota: es un proyecto personal; el contenido del sitio me pertenece._
