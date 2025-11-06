import React from 'react'

export default function Bitacora() {
  return (
    <div className="bitacora-page">
      <div className="bitacora-header">
        <h1>📔 Bitácora del Proyecto</h1>
        <p>Registro del proceso de desarrollo y evolución</p>
      </div>

      <div className="bitacora-content">
        {/* ========== TP1 ========== */}
        <div className="content-section">
          <h2>🌱 TP1 - Fundamentos Web (Septiembre 2025)</h2>
          
          <div className="bitacora-entry">
            <h4>🎯 Decisiones de Diseño</h4>
            <p>
              <strong>Paleta de Colores:</strong> Optamos por una paleta moderna con azul primario 
              (#2563eb) y amarillo de acento (#f59e0b) para transmitir profesionalismo y creatividad. 
              Esta combinación ofrece buen contraste y accesibilidad.
            </p>
            <p>
              <strong>Tipografías:</strong> Seleccionamos Inter para textos (legibilidad en pantalla) 
              y Playfair Display para títulos (elegancia y personalidad). Ambas de Google Fonts para 
              garantizar carga rápida.
            </p>
            <p>
              <strong>Layout Responsive:</strong> Implementamos un diseño mobile-first con breakpoints 
              en 400px, 900px y 1200px. Utilizamos CSS Grid y Flexbox para lograr layouts fluidos y 
              adaptables.
            </p>
            <p>
              <strong>Navegación:</strong> Creamos un sistema de navegación intuitivo con botones de 
              retorno en todas las páginas, evitando que el usuario dependa del botón "Atrás" del navegador.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>⚠️ Dificultades Encontradas</h4>
            <p>
              <strong>Responsive Design en Dispositivos Pequeños:</strong> El layout se rompía en 
              pantallas menores a 400px. Solución: Redujimos el padding y ajustamos los tamaños de 
              fuente. Cambiamos el grid de tarjetas a una sola columna y optimizamos el espaciado vertical.
            </p>
            <p>
              <strong>Compatibilidad de JavaScript:</strong> Algunas funciones modernas de JS no 
              funcionaban en navegadores antiguos. Solución: Utilizamos métodos compatibles y agregamos 
              fallbacks para funciones como IntersectionObserver.
            </p>
            <p>
              <strong>Optimización de Imágenes:</strong> Las imágenes de avatar ralentizaban la carga 
              inicial. Solución: Implementamos lazy loading y optimizamos las imágenes a formatos web 
              modernos, reduciendo el tiempo de carga en un 40%.
            </p>
            <p>
              <strong>Animaciones en Dispositivos Móviles:</strong> Las animaciones CSS causaban lag 
              en dispositivos móviles de gama baja. Solución: Utilizamos transform y opacity para 
              animaciones más eficientes.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>📄 Cambios Durante el Desarrollo</h4>
            <p>
              <strong>Estructura de Archivos:</strong> Inicialmente teníamos CSS inline, pero lo migramos 
              a archivos externos para mejor organización y reutilización.
            </p>
            <p>
              <strong>Interactividad JavaScript:</strong> Agregamos más funciones interactivas de las 
              inicialmente planeadas para cumplir requerimientos y mejorar la experiencia del usuario.
            </p>
            <p>
              <strong>Sistema de Navegación:</strong> Agregamos un header fijo con navegación principal 
              para mejorar significativamente la UX.
            </p>
          </div>
        </div>

        {/* ========== TP2 ========== */}
        <div className="content-section">
          <h2>🚀 TP2 - Migración a React SPA (Octubre 2025)</h2>
          
          <div className="bitacora-entry">
            <h4>🎯 Decisiones de Diseño</h4>
            <p>
              <strong>Arquitectura de Componentes:</strong> Implementamos una estructura modular dividida 
              en Layout (Sidebar, Header), Pages (una por ruta) y Sections (componentes reutilizables). 
              El sidebar fijo mejora la navegación en toda la aplicación.
            </p>
            <p>
              <strong>Gestión de Datos:</strong> Creamos un archivo JSON local con 25 videojuegos para 
              demostrar manejo de datos estructurados. Consumimos la API de OpenWeatherMap para información 
              meteorológica en tiempo real.
            </p>
            <p>
              <strong>Enrutamiento:</strong> React Router permite navegación SPA sin recargas de página, 
              mejorando significativamente la velocidad percibida y la experiencia de usuario.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>⚠️ Dificultades Encontradas</h4>
            <p>
              <strong>React Router:</strong> Configurar las rutas correctamente con BrowserRouter y 
              entender cuándo usar Link vs. anchor tags para evitar recargas de página.
            </p>
            <p>
              <strong>Importación de Datos:</strong> Configuramos correctamente las rutas de importación 
              para el JSON local. Entender la diferencia entre rutas públicas (/public) y relativas en Vite.
            </p>
            <p>
              <strong>Animaciones en Móviles:</strong> Utilizamos transform y opacity para mejor rendimiento 
              en dispositivos con recursos limitados. Agregamos media queries para reducir animaciones.
            </p>
            <p>
              <strong>Estado de Componentes:</strong> Aprender a usar useState y useEffect para manejar 
              datos asíncronos de la API del clima correctamente.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>📄 Cambios Durante el Desarrollo</h4>
            <p>
              <strong>Migración a React:</strong> Convertimos toda la estructura HTML/CSS a componentes 
              React reutilizables, aplicando los principios de composición y reutilización.
            </p>
            <p>
              <strong>React Router:</strong> Implementamos navegación SPA con rutas dinámicas para cada 
              sección del sitio.
            </p>
            <p>
              <strong>Centralización de Estilos:</strong> Consolidamos todos los estilos en un único 
              archivo CSS con variables para consistencia visual.
            </p>
            <p>
              <strong>Diagramas de Arquitectura:</strong> Creamos diagramas de árbol de componentes y 
              estructura de carpetas para documentar la organización del proyecto.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>📈 Metodología de Trabajo</h4>
            <p>
              Dividimos el trabajo por componentes: Gustavo se enfocó en la lógica de consumo de API 
              y manejo de datos JSON, mientras que Gastón trabajó en el diseño de componentes visuales 
              y responsive design. Nos reunimos regularmente para integrar cambios y resolver conflictos 
              de Git.
            </p>
          </div>
        </div>

        {/* ========== TP3 - NUEVO ========== */}
        <div className="content-section tp3-section">
          <h2>✨ TP3 - Evolución con Mejoras UX/UI (Noviembre 2025)</h2>
          
          <div className="bitacora-entry">
            <h4>🎯 Objetivo del TP3</h4>
            <p>
              Implementar 5 mejoras significativas que eleven la experiencia de usuario y demuestren 
              dominio de técnicas avanzadas de frontend: animaciones CSS, filtrado reactivo, visualización 
              de datos, integración de redes sociales y componentes complejos como carruseles.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>🎨 Decisiones de Diseño por Mejora</h4>
            
            <p><strong>Mejora 1 - Animaciones Suaves:</strong></p>
            <p>
              Optamos por CSS puro con keyframes personalizados (fadeIn, slideIn, scaleIn) en lugar de 
              librerías como Framer Motion para mantener el bundle ligero. Usamos cubic-bezier para 
              transiciones naturales. Todas las animaciones respetan prefers-reduced-motion para accesibilidad.
            </p>

            <p><strong>Mejora 2 - Sistema de Filtros:</strong></p>
            <p>
              Diseñamos un sistema de doble filtrado: por género (botones) y por texto (input). Los 
              géneros se extraen dinámicamente del JSON usando Set para evitar duplicados. El contador 
              de resultados da feedback inmediato. Mostramos todos los filtros desde el inicio para mejor UX.
            </p>

            <p><strong>Mejora 3 - Barras de Progreso:</strong></p>
            <p>
              Reemplazamos listas planas por barras visuales más intuitivas. Sistema de colores semánticos: 
              verde (90%+), azul (85-89%), naranja (78-84%). Las animaciones de llenado usan animation-delay 
              para efecto escalonado. Diseño coherente con la paleta del sitio.
            </p>

            <p><strong>Mejora 4 - Redes Sociales:</strong></p>
            <p>
              Agregamos GitHub, LinkedIn y Email con colores corporativos. Los iconos SVG inline permiten 
              máxima personalización. Efectos hover (rotación 360°, elevación, brillo) hacen los botones 
              interactivos. En móvil se apilan verticalmente para mejor usabilidad táctil.
            </p>

            <p><strong>Mejora 5 - Carrusel de Proyectos:</strong></p>
            <p>
              Creamos una página completa /proyectos para dar protagonismo al portafolio. El carrusel tiene 
              navegación triple: flechas, dots y grid de miniaturas. Usamos imágenes de Unsplash para 
              calidad profesional. Los proyectos son ficticios pero realistas con stack tecnológico completo.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>⚠️ Dificultades y Soluciones</h4>
            
            <p><strong>Conflicto de Filtros:</strong></p>
            <p>
              Al combinar búsqueda de texto con filtros de género, se pisaban entre sí. Solución: 
              Implementamos useEffect con dos dependencias (searchTerm y selectedGenre) que aplica 
              filtros en cascada.
            </p>

            <p><strong>Animación de Barras:</strong></p>
            <p>
              Las barras aparecían instantáneamente llenas. Solución: Usamos animation con width inicial 
              en 0 y final en el porcentaje correspondiente vía style inline.
            </p>

            <p><strong>Carrusel Responsive:</strong></p>
            <p>
              El layout horizontal no funcionaba en móvil. Solución: Media query a 1024px cambia 
              flex-direction: column y ajusta heights de imagen.
            </p>

            <p><strong>Bundle Size:</strong></p>
            <p>
              Importar librerías de iconos aumentaba peso. Solución: SVG inline reduce bundle y 
              permite control total de estilos y animaciones.
            </p>

            <p><strong>Inconsistencia de Colores:</strong></p>
            <p>
              Barras con fondo oscuro desentonaban. Solución: Rediseño con fondo blanco, bordes sutiles 
              y colores coherentes con la paleta (primary-color, accent-color).
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>📄 Cambios Importantes</h4>
            <ul>
              <li>Nueva página /proyectos con componente ProjectsCarousel.jsx (300+ líneas)</li>
              <li>CSS ampliado de ~500 líneas (TP2) a ~1200 líneas con las 5 mejoras</li>
              <li>ProfileGustavo y ProfileGaston ahora incluyen barras de progreso + redes sociales</li>
              <li>GamesGallery refactorizado con sistema de filtrado completo (13 géneros únicos)</li>
              <li>Sidebar ampliado con link a /proyectos</li>
              <li>Accesibilidad mejorada: prefers-reduced-motion, aria-labels, focus visible</li>
            </ul>
          </div>

          <div className="bitacora-entry">
            <h4>📚 Aprendizajes Técnicos</h4>
            <ul>
              <li>CSS Avanzado: Uso de ::before y ::after para efectos complejos sin elementos extra</li>
              <li>React Patterns: Composición de useEffect múltiples para lógica de filtrado compleja</li>
              <li>Performance: Optimización de re-renders y bundle size</li>
              <li>UX/UI: Importancia del feedback visual (contador, hover states, transiciones)</li>
              <li>Responsive: Mobile-first es más eficiente para Progressive Enhancement</li>
            </ul>
          </div>

          <div className="bitacora-entry">
            <h4>📈 Metodología de Trabajo - TP3</h4>
            <p>
              <strong>División de tareas:</strong> Gustavo implementó las mejoras 2 (filtros) y 5 
              (carrusel) por su complejidad lógica. Gastón se enfocó en mejoras 1 (animaciones), 
              3 (barras) y 4 (redes sociales) por su componente visual/UX.
            </p>
            <p>
              <strong>Iteraciones:</strong> Cada mejora pasó por 2-3 revisiones. Las barras de progreso 
              inicialmente tenían fondo oscuro, pero lo cambiamos para coherencia con el diseño global.
            </p>
            <p>
              <strong>Testing:</strong> Probamos en Chrome, Firefox, Safari y dispositivos móviles reales. 
              Usamos DevTools para simular diferentes viewports.
            </p>
            <p>
              <strong>Git workflow:</strong> Branch por mejora (feature/filters, feature/carousel) con 
              merge a main después de revisión. Commits descriptivos siguiendo convención "tipo: descripción".
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>💡 Reflexión sobre la Evolución</h4>
            <p>
              De un sitio HTML estático (TP1) a una SPA básica (TP2) y finalmente a una aplicación 
              interactiva y pulida (TP3), el proyecto refleja nuestro crecimiento como developers.
            </p>
            <p>
              <strong>TP1:</strong> Fundamentos sólidos de HTML/CSS/JS vanilla nos dieron base para 
              entender qué problemas resuelve React.
            </p>
            <p>
              <strong>TP2:</strong> La migración a React nos obligó a pensar en componentes, estado 
              y flujo de datos unidireccional.
            </p>
            <p>
              <strong>TP3:</strong> Las mejoras nos enseñaron que la funcionalidad básica es solo el 
              comienzo - la experiencia de usuario (animaciones, feedback visual, navegación intuitiva) 
              es lo que distingue un proyecto amateur de uno profesional.
            </p>
          </div>

          <div className="bitacora-entry">
            <h4>📊 Estadísticas del TP3</h4>
            <ul>
              <li>⏱️ Tiempo invertido: ~15 horas (3 horas por mejora aprox.)</li>
              <li>📝 Líneas de código agregadas: ~800 líneas (JSX + CSS)</li>
              <li>🎨 Componentes modificados: 6 archivos</li>
              <li>🆕 Componentes nuevos: 1 (ProjectsCarousel)</li>
              <li>📸 Capturas documentadas: 10 (5 Antes + 5 Después)</li>
              <li>♿ Mejoras de accesibilidad: prefers-reduced-motion, aria-labels, focus visible</li>
            </ul>
          </div>
        </div>

        {/* ========== Conclusión General ========== */}
        <div className="content-section conclusion-section">
          <h2>🎓 Conclusión General</h2>
          <p>
            A través de estos tres trabajos prácticos, Digital Creators evolucionó de un concepto 
            simple a una aplicación web completa y profesional. Cada iteración agregó capas de 
            complejidad técnica mientras manteníamos coherencia visual y funcional.
          </p>
          <p>
            Los desafíos encontrados nos enseñaron más que las implementaciones exitosas. Aprendimos 
            a debuggear, a leer documentación, a tomar decisiones de arquitectura y, sobre todo, 
            a colaborar eficientemente como equipo.
          </p>
          <p className="final-quote">
            <em>
              "El código es temporal, pero los aprendizajes son permanentes. Este proyecto nos 
              preparó para enfrentar proyectos reales en el mundo profesional."
            </em>
          </p>
          <p className="team-signature">
            — Gustavo & Gastón, Digital Creators Team
          </p>
        </div>
      </div>
    </div>
  )
}