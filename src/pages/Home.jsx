import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 0' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#1a1a2e' }}>
        Bienvenido a TechStore
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
        Tu tienda de confianza para productos electrónicos
      </p>
      <Link to="/productos">
        <button className="btn" style={{ maxWidth: '300px', margin: '0 auto' }}>
          Ver Productos
        </button>
      </Link>
      
      <div style={{ 
        marginTop: '4rem', 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '2rem' 
      }}>
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a1a2e' }}>
            📱 Electrónicos
          </h3>
          <p style={{ color: '#666' }}>
            Encuentra los mejores monitores, notebooks y televisores
          </p>
        </div>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a1a2e' }}>
            🚚 Envío Gratis
          </h3>
          <p style={{ color: '#666' }}>
            Envío gratuito en compras mayores a $50.000
          </p>
        </div>
        
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '8px', 
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1a1a2e' }}>
            💳 Pago Seguro
          </h3>
          <p style={{ color: '#666' }}>
            Todas tus transacciones están protegidas
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
