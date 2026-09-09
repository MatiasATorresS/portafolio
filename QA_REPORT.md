# Revisión del portafolio

## Mejora visual aplicada

- Galería con siete capturas reales de las demos, guardadas localmente y cargadas de forma diferida. IncidentHub, Siniestros y Scuba Cat usan portadas tipográficas, sin simular capturas de aplicaciones.
- AprendizajeIngles y DevBoard ocupan dos tarjetas destacadas más anchas en escritorio. El resto se organiza en tres columnas, dos en tablet y una en móvil.
- Resúmenes breves en las tarjetas, tres tecnologías visibles y un indicador de las adicionales. La descripción y las tecnologías completas se conservan en la ficha.
- Las capturas abren el detalle mediante clic o Enter, con restitución del foco al cerrar. Los enlaces de demo y GitHub tienen su propio espacio en el pie de la tarjeta.
- Portada móvil compacta: avatar de 72 px, títulos más contenidos y menor espacio vertical. A 390 px de ancho, la sección de proyectos comienza aproximadamente a 624 px desde el inicio.
- Bordes, etiquetas y fondos con menos brillo; se mantiene la identidad oscura y azul.
- Validación: sin desbordamientos ni controles recortados a 320, 390, 768 y 1280 px; filtros 10/7/1/2 correctos; apertura por teclado desde la captura y cierre con Escape comprobados; siete imágenes cargadas; compilación de producción correcta.

Fecha: 9 de septiembre de 2026. Se revisó el código local y se probó la web en el navegador integrado, en escritorio y con tamaños de 390 × 844 y 320 × 740. La revisión inicial fue de solo lectura; posteriormente se aplicaron las correcciones incrementales indicadas en cada hallazgo.

## Hallazgos reproducidos en navegador

### 1. Alta: enlace de GitHub recortado en móvil

- Estado: corregido en el primer ajuste incremental. La cabecera permite otra fila para los enlaces y títulos largos. Verificado en navegador a 320, 390, 768 y 1280 px: ningún enlace de las diez tarjetas sale de sus límites. Compilación de producción correcta.
- Reproducción: usar 320 px de ancho, ir a Proyectos y observar AprendizajeIngles.
- Resultado: el enlace de GitHub queda completamente fuera de la tarjeta. La tarjeta termina en x=281 y el enlace ocupa x=310–354. `overflow: hidden` lo oculta. En KanbanFlow también se recorta parte del área del enlace.
- A 390 px, la cabecera de AprendizajeIngles ya invade el espacio derecho de la tarjeta.
- Origen: `src/components/ProjectCard.css:31` y `:44`: título y enlaces comparten una fila sin adaptación suficiente a títulos largos.
- Corrección propuesta: permitir que la cabecera cambie de fila o colocar los enlaces debajo del título en pantallas estrechas; conservar las áreas táctiles de los enlaces.

### 2. Media: el botón de cierre del menú móvil no entra en el recorrido de Tab

- Estado: corregido. El recorrido incluye el botón de cierre y todos los enlaces del menú. Verificados Shift+Tab desde Proyectos hacia Cerrar menú, recorrido circular entre cierre y Curriculum Vitae, cierre con Enter y Escape, restitución del foco y desbloqueo del desplazamiento.
- Reproducción: abrir el menú móvil y pulsar Shift+Tab desde Proyectos.
- Resultado: el foco pasa a Curriculum Vitae, saltándose Cerrar menú. Tab recorre únicamente los elementos interiores del menú.
- Escape sí cierra el menú y devuelve el foco al botón de apertura.
- Origen: `src/components/Navbar.jsx:83`: la contención del foco busca dentro de `menuRef`, pero el botón de cierre está fuera.
- Corrección propuesta: incluir el botón de cierre en el recorrido o situarlo dentro del contenedor que controla el foco.

### 3. Media: Escape deja de cerrar el detalle cuando el foco entra en la demo

- Estado: mitigado según la preferencia del usuario de conservar las demos interactivas. La cabecera y el botón de cierre permanecen visibles al desplazar la ficha. Verificado visualmente y por posición en escritorio y a 320 px. Escape dentro de la demo sigue sujeto al documento externo; no se presenta como corregido. El cierre con el botón funciona.
- Reproducción: abrir DevBoard, enfocar el enlace Dashboard dentro de su demo y pulsar Escape.
- Resultado: la ficha permanece abierta; el botón de cierre del portafolio sí funciona.
- Origen: `src/components/ProjectModal.jsx:33`: el manejador escucha el documento padre; las pulsaciones dentro del iframe pertenecen al documento de la demo.
- Corrección propuesta: mantener un cierre siempre accesible y valorar una vista previa estática con apertura externa. Si se conserva la interacción incrustada y se controlan ambas aplicaciones, coordinar el cierre entre documentos validando el origen de los mensajes.

## Hallazgos por revisión del código

### 4. Media: posible aviso de copia exitosa aunque la copia falle

- Estado: corregido. La alternativa comprueba el resultado y limpia el elemento temporal incluso al fallar. La interfaz muestra éxito solo tras una copia correcta; en caso de fallo ofrece el correo seleccionable. Evita copias simultáneas y reinicia el temporizador del aviso.
- Validación posterior: cuatro escenarios controlados del helper `src/utils/clipboard.js` pasaron: API correcta, API rechazada con alternativa correcta, API ausente con alternativa falsa y alternativa que lanza una excepción. Se comprobó también limpieza y restauración del foco. En navegador se verificó el aviso de éxito normal; los fallos se simularon en el helper, no cambiando permisos del sistema.
- Origen: `src/components/Contact.jsx:34`.
- Si Clipboard API falla o no existe, se llama a `document.execCommand('copy')` y luego se muestra éxito sin comprobar su resultado.
- Corrección propuesta: comprobar el resultado, mostrar un error cuando corresponda y ofrecer el correo visible para copia manual.
- Alcance: se observó el aviso de éxito al pulsar el botón, pero no se confirmó el contenido final del portapapeles. No se inyectó un fallo de permisos en el navegador. El defecto de la rama alternativa se identifica en el código.

### 5. Media: LinkedIn inconsistente en los datos para buscadores

- Estado: corregido. `sameAs` usa ahora el mismo perfil que Sobre Mí y Contacto. Verificado en el HTML y en el documento cargado en navegador.
- `index.html:55` declara `https://linkedin.com/in/matiastorres` en `sameAs`.
- Los enlaces visibles de Sobre Mí y Contacto usan `https://linkedin.com/in/matiastorressandoval`.
- Corrección propuesta: unificar la dirección con el perfil correcto. No se verificó la titularidad de ambos perfiles.

### 6. Baja: la instrucción para abrir proyectos no coincide con la interacción

- Estado: corregido. La instrucción indica pulsar «Ver detalle». Verificado en navegador. También se actualizó el README para reflejar los diez proyectos.
- `src/components/Projects.jsx:42` indica «Haz clic en cualquier proyecto para ver el detalle».
- En `src/components/ProjectCard.jsx:65`, solo Ver detalle abre la ficha; ni el título ni el cuerpo de la tarjeta tienen esa acción.
- Corrección propuesta: indicar «Pulsa Ver detalle» o ampliar el área de apertura sin interferir con los enlaces a GitHub y a la demo.

### 7. Media: el desplazamiento programado ignora la preferencia de movimiento reducido

- Estado: corregido en código. Las cinco llamadas de desplazamiento en Hero, Navbar y ScrollToTop usan `behavior: 'auto'`, que sigue la regla CSS de movimiento reducido ya existente. La navegación a Contacto llegó a la sección con un margen superior de aproximadamente 88 px y el desplazamiento volvió a habilitarse tras cerrar el menú. No se emuló la preferencia del sistema en navegador.
- `src/index.css` contempla movimiento reducido y la aplicación configura `MotionConfig`, pero Hero, Navbar y ScrollToTop solicitan explícitamente `behavior: 'smooth'`.
- Corrección propuesta: usar el comportamiento definido por CSS o consultar la preferencia antes de pedir desplazamiento animado.
- Alcance: identificado en código; no se cambió la preferencia de accesibilidad del sistema durante la revisión.

## Mejoras posibles

- Incorporar capturas de los proyectos: las tarjetas actuales dependen casi exclusivamente de texto y tecnologías.
- Añadir fechas, funciones concretas y resultados verificables a la trayectoria, que actualmente usa descripciones generales.
- Añadir estado de carga y alternativa clara para las demos incrustadas; la ficha combina el desplazamiento de su contenido con el del iframe.
- Revisar el dominio de publicación: canonical, OpenGraph, robots y sitemap usan `matiastorres.dev`, mientras Vite configura `/portafolio/` y el flujo de publicación usa GitHub Pages. Es una inconsistencia que requiere confirmar el destino real; no demuestra por sí sola un fallo de producción.
- README actualizado: ahora indica los 10 proyectos existentes.

Las capturas de proyectos y el estado de carga de demos quedan como mejoras de presentación posteriores. Añadir resultados profesionales concretos y cambiar el dominio de publicación requiere datos confirmados; no se inventaron métricas ni se cambió el destino de publicación.

## Comprobaciones realizadas

| Comprobación | Resultado |
| --- | --- |
| Carga de la página local | Correcta |
| Filtros | Todos: 10, Desarrollo Web: 7, Data: 1, IA: 2 |
| Apertura de detalles | Correcta en Análisis de Siniestros Chile, AprendizajeIngles y DevBoard |
| Demos incrustadas | AprendizajeIngles y DevBoard cargaron |
| Cierre de ficha con Escape desde el portafolio | Correcto; restaura el foco en Ver detalle |
| Menú móvil | Abre y cierra; Escape funciona |
| Navegación a proyectos y regreso al inicio | Funciona |
| CV local | HTTP 200, tipo application/pdf |
| Consola observada | Sin errores ni advertencias en las consultas realizadas |
| Compilación de producción | Correcta mediante la API de Vite; JS principal de 345,52 kB, 109,82 kB gzip |

## Límites y observaciones del entorno

### Prueba integrada posterior a las correcciones

- Cuatro filtros comprobados: 10 proyectos en Todos, 7 en Desarrollo Web, 1 en Data y 2 en IA.
- Diez fichas abiertas y cerradas a 320 px, sin desbordamiento horizontal interno y con el botón de cierre dentro de sus límites.
- Tarjetas y enlaces sin recortes a 320, 390, 768 y 1280 px.
- Cabecera fija verificada al desplazar AprendizajeIngles hasta el final en móvil; Escape desde el portafolio cierra y devuelve el foco a Ver detalle.
- Tab y Shift+Tab recorren correctamente el cierre y el enlace GitHub en la ficha sin demo de Scuba Cat.
- Al ampliar de 390 a 1280 px con el menú abierto, este se cierra y el cuerpo recupera el desplazamiento.
- Las siete demos enlazadas mostraron contenido: AprendizajeIngles, DevBoard, KanbanFlow, Biblioteca, StockFlow, AutoCare y TODO. Se verificó la carga de entrada, no todas las funciones internas. AprendizajeIngles y StockFlow necesitaron esperar a completar la carga; no eran enlaces rotos.
- Nuevo detalle de presentación: el proyecto TODO abre una aplicación cuya cabecera dice KanbanFlow. Conviene distinguir su nombre o explicar la relación con el otro proyecto KanbanFlow del catálogo.
- CV confirmado con HTTP 200, tipo application/pdf y cabecera `%PDF-`.
- Los cuatro escenarios controlados de copia volvieron a pasar. El aviso de éxito aparece en navegador; la comprobación de pegado real quedó limitada por el portapapeles virtual de la herramienta, que no disponía del contenido para pegar. La página temporal de prueba se eliminó.
- Sin errores ni advertencias en las consultas de consola del portafolio durante esta prueba.

- El lanzador local `node_modules/vite/bin/vite.js` contiene únicamente un hook de Console Ninja: el comando habitual finaliza sin arrancar el servidor ni compilar. Se utilizó la API de Vite para iniciar la web y generar la compilación. Es una anomalía de la instalación local; no se atribuye al código versionado del sitio.
- El comando de lint terminó con código 0 y sin salida. No se interpreta como una auditoría completa ni como prueba de ausencia de errores.
- Las peticiones externas desde la terminal fallaron por conexión; no se presentan como enlaces rotos. Solo se verificó la carga real de las dos demos mencionadas mediante navegador.
- No se probaron todas las funciones internas de las aplicaciones enlazadas, ni Safari/Firefox, ni dispositivos físicos, ni el sitio publicado completo.
- No se realizó una medición de Lighthouse, Core Web Vitals o una auditoría formal de accesibilidad.
