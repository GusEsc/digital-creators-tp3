import React, { useState } from 'react'

export default function ProjectsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=500&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Full Stack",
      year: "2024"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real, calendario integrado y notificaciones push.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      technologies: ["React", "Firebase", "Material UI", "PWA"],
      category: "Frontend",
      year: "2024"
    },
    {
      id: 3,
      title: "AI Image Generator",
      description: "Generador de imágenes con inteligencia artificial utilizando modelos de difusión y procesamiento de lenguaje natural.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      technologies: ["Python", "TensorFlow", "FastAPI", "React"],
      category: "AI/ML",
      year: "2024"
    },
    {
      id: 4,
      title: "Fitness Tracker Mobile",
      description: "App móvil para seguimiento de ejercicios, nutrición y progreso físico con integración a dispositivos wearables.",
      image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=500&fit=crop",
      technologies: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
      category: "Mobile",
      year: "2023"
    },
    {
      id: 5,
      title: "Smart Home Dashboard",
      description: "Dashboard IoT para control y monitoreo de dispositivos inteligentes del hogar con visualización de datos en tiempo real.",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=500&fit=crop",
      technologies: ["Vue.js", "MQTT", "InfluxDB", "Docker"],
      category: "IoT",
      year: "2023"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1>🎨 Nuestros Proyectos Destacados</h1>
        <p>Explora nuestro portafolio de trabajos recientes</p>
      </div>

      {/* Carrusel Principal */}
      <div className="carousel-container">
        <button 
          className="carousel-btn prev" 
          onClick={prevSlide}
          aria-label="Proyecto anterior"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-content">
          <div className="project-card-large">
            <div className="project-image-container">
              <img 
                src={currentProject.image} 
                alt={currentProject.title}
                className="project-image"
              />
              <div className="project-category">{currentProject.category}</div>
            </div>

            <div className="project-details">
              <div className="project-header-info">
                <h2>{currentProject.title}</h2>
                <span className="project-year">{currentProject.year}</span>
              </div>

              <p className="project-description">{currentProject.description}</p>

              <div className="project-technologies">
                <h3>Tecnologías:</h3>
                <div className="tech-tags">
                  {currentProject.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <button className="view-project-btn">
                Ver Proyecto Completo
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <button 
          className="carousel-btn next" 
          onClick={nextSlide}
          aria-label="Proyecto siguiente"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Indicadores (Dots) */}
      <div className="carousel-indicators">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a proyecto ${index + 1}`}
          >
            <span className="dot-label">{project.title}</span>
          </button>
        ))}
      </div>

      {/* Contador de proyectos */}
      <div className="project-counter">
        <span className="current-number">{currentIndex + 1}</span>
        <span className="separator">/</span>
        <span className="total-number">{projects.length}</span>
      </div>

      {/* Grid de miniaturas (opcional) */}
      <div className="projects-grid-preview">
        <h3>Todos los Proyectos</h3>
        <div className="mini-projects-grid">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`mini-project-card ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            >
              <img src={project.image} alt={project.title} />
              <div className="mini-overlay">
                <h4>{project.title}</h4>
                <span>{project.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}