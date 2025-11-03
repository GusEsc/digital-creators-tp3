import React, { useState, useEffect } from 'react'
import gamesData from '../../data/games.json'

export default function GamesGallery() {
  const [games, setGames] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('Todos')

  // Extraer géneros únicos del JSON
  const genres = ['Todos', ...new Set(gamesData.map(game => game.genre))]

  useEffect(() => {
    setGames(gamesData)
    setFiltered(gamesData)
  }, [])

  // Función para aplicar búsqueda y filtros
  useEffect(() => {
    let result = games

    // Filtrar por género
    if (selectedGenre !== 'Todos') {
      result = result.filter(game => game.genre === selectedGenre)
    }

    // Filtrar por búsqueda de texto
    if (searchTerm) {
      result = result.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    setFiltered(result)
  }, [searchTerm, selectedGenre, games])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleGenreFilter = (genre) => {
    setSelectedGenre(genre)
    setSearchTerm('') // Limpiar búsqueda al cambiar filtro
  }

  const clearFilters = () => {
    setSelectedGenre('Todos')
    setSearchTerm('')
  }

  return (
    <div className="games-page">
      <div className="games-header">
        <h1>🎮 Galería de Videojuegos</h1>
        <p>Explora nuestra colección de clásicos y favoritos</p>
      </div>

      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Busca por título, género o descripción..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Filtros por género */}
      <div className="filter-section">
        <h3 className="filter-title">📂 Filtrar por Género:</h3>
        <div className="filter-buttons">
          {genres.map((genre) => (
            <button
              key={genre}
              className={`filter-btn ${selectedGenre === genre ? 'active' : ''}`}
              onClick={() => handleGenreFilter(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
        
        {/* Botón para limpiar filtros */}
        {(selectedGenre !== 'Todos' || searchTerm) && (
          <button className="clear-filters-btn" onClick={clearFilters}>
            🔄 Limpiar Filtros
          </button>
        )}
      </div>

      {/* Contador de resultados */}
      <div className="results-count">
        <p>
          Mostrando <strong>{filtered.length}</strong> de <strong>{games.length}</strong> juegos
          {selectedGenre !== 'Todos' && ` en "${selectedGenre}"`}
        </p>
      </div>

      {/* Grid de juegos */}
      <div className="games-grid">
        {filtered.map((game) => (
          <div key={game.id} className="game-card">
            <div className="game-header">
              <h3>{game.title}</h3>
              <span className="rating">⭐ {game.rating}</span>
            </div>
            <p className="game-genre"><strong>Género:</strong> {game.genre}</p>
            <p className="game-year"><strong>Año:</strong> {game.year}</p>
            <p className="game-platform"><strong>Plataforma:</strong> {game.platform}</p>
            <p className="game-description">{game.description}</p>
          </div>
        ))}
      </div>

      {/* Mensaje cuando no hay resultados */}
      {filtered.length === 0 && (
        <div className="no-results">
          <p>❌ No se encontraron videojuegos que coincidan con tu búsqueda</p>
          <button className="clear-filters-btn" onClick={clearFilters}>
            🔄 Ver todos los juegos
          </button>
        </div>
      )}
    </div>
  )
}