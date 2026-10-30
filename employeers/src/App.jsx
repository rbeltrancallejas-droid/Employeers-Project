import { useState } from 'react';
import Usuarios from './components/Usuarios';
import './App.css';

function App() {
  // Estado inicial en null (pantalla de inicio)
  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/?results=12");
      const data = await response.json();
      
      // Lógica solicitada: Si hay resultados, los asigna. Si no, lo vuelve null.
      if (data.results && data.results.length > 0) {
        setEmployees(data.results);
      } else {
        setEmployees(null);
      }
    } catch (error) {
      console.error("Error al obtener los empleados:", error);
      setEmployees(null); // Si hay error, regresa a la pantalla de inicio
    } finally {
      setLoading(false);
    }
  };

  const resetEmployees = () => {
    setEmployees(null);
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>Employee Directory</h1>
        <p className="subtitle">Directorio corporativo del equipo</p>
      </header>
      
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
          <p>Cargando empleados...</p>
        </div>
      ) : employees ? (
        <>
          {/* Controles superiores */}
          <div className="nav-controls">
            <span onClick={resetEmployees} className="back-home">
              Volver al Inicio
            </span>
          </div>
          
          <div className="employee-grid">
            {employees.map((user) => (
              <Usuarios key={user.login.uuid} user={user} />
            ))}
          </div>

          {/* Controles inferiores */}
          <div className="nav-controls" style={{ marginTop: '30px' }}>
            <span onClick={resetEmployees} className="back-home">
              Volver al Inicio
            </span>
          </div>
        </>
      ) : (
        // Pantalla de Inicio (cuando employees es null)
        <div className="home-screen">
          <div className="home-icon">🏢</div>
          <h2>Portal de Empleados</h2>
          <p>Haz clic en el botón para cargar el directorio corporativo.</p>
          <button onClick={fetchEmployees} className="btn-search">
            Cargar Directorio
          </button>
        </div>
      )}
    </div>
  );
}

export default App;