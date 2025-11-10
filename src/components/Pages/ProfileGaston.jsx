import React, { useState } from "react"

export default function ProfileGaston() {
  const [showSkills, setShowSkills] = useState(false) // Mostrar por defecto
  const [showMovies, setShowMovies] = useState(false)
  const [showMusic, setShowMusic] = useState(false)

  // Cada habilidad con nivel de 0-100
  const skills = [
    { name: 'Figma', description: 'Prototipado y diseño colaborativo', level: 98 },
    { name: 'Adobe Creative Suite', description: 'Photoshop, Illustrator, After Effects', level: 92 },
    { name: 'User Research', description: 'Investigación y testing de usuarios', level: 85 },
    { name: 'Design Systems', description: 'Creación de componentes escalables', level: 88 },
    { name: 'Sketch', description: 'Diseño de interfaces móviles', level: 80 },
    { name: 'Principios UX', description: 'Arquitectura de información y usabilidad', level: 90 },
  ]

  const movies = [
    '🌸 Lost in Translation - Estética visual minimalista',
    '🎨 The Grand Budapest Hotel - Diseño cinematográfico perfecto',
    '🌈 Inside Out - Diseño emocional y storytelling',
    '🎭 Her - Interfaz y experiencia de usuario futurista',
    '🏛️ Midnight in Paris - Inspiración artística y creatividad',
  ]

  const music = [
    '🎤 Lorde - Melodrama - Pop indie con texturas únicas',
    '🎹 Thom Yorke - The Eraser - Electrónica experimental',
    '🎸 Turnstile - GLOW ON - Hardcore melódico innovador',
    '🎵 Oasis - (What\'s the Story) Morning Glory? - Britpop clásico',
    '🎧 The Cranberries - No Need to Argue - Rock alternativo irlandés',
  ]

  return (
    <section className="profile-page">
      <div className="profile-header">
        <img src="/img/avatar3.jpg" alt="Gastón" className="profile-avatar" />
        <h1>Gastón</h1>
        <p className="role">UI/UX Designer</p>
        
        {/* Botones de Redes Sociales */}
        <div className="social-links">
          <a href="https://github.com/Gastonesco" target="_blank" rel="noopener noreferrer" className="social-btn github" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          
          <a href="https://linkedin.com/in/gaston-uxdesigner" target="_blank" rel="noopener noreferrer" className="social-btn linkedin" title="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          
          <a href="mailto:gaston@digitalcreators.com" className="social-btn email" title="Email">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      <div className="profile-content">
        <h2>🎨 Habilidades de Diseño</h2>
        <button className="interactive-button" onClick={() => setShowSkills(!showSkills)}>
          {showSkills ? 'Ocultar Habilidades' : 'Mostrar Habilidades'}
        </button>
        
        {showSkills && (
          <div className="skills-bars">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-description">{skill.description}</div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${idx * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}

        <h2>🎬 Películas Favoritas</h2>
        <button className="interactive-button" onClick={() => setShowMovies(!showMovies)}>
          {showMovies ? 'Ocultar Películas' : 'Mostrar Películas'}
        </button>
        {showMovies && (
          <ul className="skills-list">
            {movies.map((movie, idx) => <li key={idx}>{movie}</li>)}
          </ul>
        )}

        <h2>🎵 Música Favorita</h2>
        <button className="interactive-button" onClick={() => setShowMusic(!showMusic)}>
          {showMusic ? 'Ocultar Música' : 'Mostrar Música'}
        </button>
        {showMusic && (
          <ul className="skills-list">
            {music.map((song, idx) => <li key={idx}>{song}</li>)}
          </ul>
        )}

        <h2>✨ Sobre mí</h2>
        <p>
          Soy diseñador UI/UX con pasión por crear experiencias digitales que conecten emocionalmente 
          con los usuarios. Me especializo en research, prototipado y desarrollo de design systems que 
          faciliten la vida de las personas.
        </p>
      </div>
    </section>
  )

}
