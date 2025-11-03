import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../Common/LoadingSpinner';

const API_KEY = '9d198c0704981c28f5001bcb9a0f789e'; // tu clave real
const CITY = 'Corrientes,AR';

export default function WeatherSection() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError(null);

      // 🔹 Llamada a la API actual
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric&lang=es`
      );
      if (!res.ok) throw new Error('Error al obtener los datos del clima');

      const data = await res.json();

      // 🔹 Procesar los datos para adaptarlos a tu interfaz
      const current = data.list[0]; // primer valor: clima actual
      const forecast = data.list
        .filter((_, i) => i % 8 === 0) // cada 8 registros ≈ 1 día
        .slice(1, 4) // próximos 3 días
        .map(item => ({
          day: new Date(item.dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' }),
          high: Math.round(item.main.temp_max),
          low: Math.round(item.main.temp_min),
          condition: item.weather[0].description,
        }));

      const parsedData = {
        city: data.city.name,
        temperature: Math.round(current.main.temp),
        condition: current.weather[0].description,
        humidity: current.main.humidity,
        windSpeed: current.wind.speed,
        forecast,
      };

      setWeather(parsedData);
    } catch (err) {
      console.error(err);
      setError('No se pudo cargar el clima 😞');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="weather-page">
      <h1>🌤️ Clima en {weather?.city}</h1>

      <div className="weather-current">
        <div className="temperature">{weather?.temperature}°C</div>
        <p className="condition" style={{ textTransform: 'capitalize' }}>{weather?.condition}</p>
        <div className="details">
          <div>💧 Humedad: {weather?.humidity}%</div>
          <div>💨 Viento: {weather?.windSpeed} km/h</div>
        </div>
      </div>

      <div className="weather-forecast">
        <h2>Pronóstico</h2>
        <div className="forecast-grid">
          {weather?.forecast.map((day, idx) => (
            <div key={idx} className="forecast-card">
              <h4 style={{ textTransform: 'capitalize' }}>{day.day}</h4>
              <p>{day.condition}</p>
              <div className="temps">
                <span>📈 {day.high}°C</span>
                <span>📉 {day.low}°C</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
