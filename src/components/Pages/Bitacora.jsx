export default function Bitacora() {
  const entries = [
    {
      title: '🎯 Decisiones de Diseño',
      items: [
        {
          subtitle: 'Paleta de Colores',
          description: 'Optamos por azul primario (#2563eb) y amarillo de acento (#f59e0b) para transmitir profesionalismo y creatividad.'
        },
        {
          subtitle: 'Tipografías',
          description: 'Inter para textos (legibilidad) y Playfair Display para títulos (elegancia).'
        },
        {
          subtitle: 'Layout Responsive',
          description: 'Implementamos un diseño mobile-first con breakpoints en 400px, 900px y 1200px.'
        }
      ]
    },
    {
      title: '⚠️ Dificultades Encontradas',
      items: [
        {
          subtitle: 'Responsive Design',
          description: 'Solucionado ajustando paddings y grid layouts para dispositivos pequeños.'
        },
        {
          subtitle: 'Animaciones en Móviles',
          description: 'Utilizamos transform y opacity para mejor rendimiento.'
        },
        {
          subtitle: 'Importación de Datos',
          description: 'Configuramos correctamente las rutas de importación para el JSON local.'
        }
      ]
    },
    {
      title: '📄 Cambios Durante el Desarrollo',
      items: [
        {
          subtitle: 'Migración a React',
          description: 'Convertimos la estructura HTML/CSS a componentes React reutilizables.'
        },
        {
          subtitle: 'React Router',
          description: 'Implementamos navegación SPA con rutas para cada sección.'
        }
      ]
    }
  ]

  return (
    <div className="bitacora-page">
      <div className="bitacora-header">
        <h1>📋 Bitácora del Proyecto</h1>
        <p>Trabajo Práctico Grupal 3 - React SPA</p>
      </div>

      <div className="bitacora-content">
        {entries.map((section, idx) => (
          <section key={idx} className="content-section">
            <h2>{section.title}</h2>
            {section.items.map((item, itemIdx) => (
              <div key={itemIdx} className="bitacora-entry">
                <h4>{item.subtitle}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
