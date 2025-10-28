import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Profile = () => {
  const { user } = useAuth();
  const { cart, getCartTotal } = useCart();

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        padding: '2rem', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        marginBottom: '2rem'
      }}>
        <h1 style={{ marginBottom: '1rem', color: '#1a1a2e' }}>Mi Perfil</h1>
        <p style={{ color: '#666', fontSize: '1.1rem' }}>
          <strong>Correo:</strong> {user?.email}
        </p>
      </div>

      <div style={{ 
        background: 'white', 
        borderRadius: '8px', 
        padding: '2rem', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
      }}>
        <h2 style={{ marginBottom: '1rem', color: '#1a1a2e' }}>
          Resumen de Compras
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '1.5rem',
          marginTop: '1.5rem'
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16c79a' }}>
              {cart.length}
            </p>
            <p style={{ color: '#666' }}>Productos en carrito</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16c79a' }}>
              ${getCartTotal().toLocaleString()}
            </p>
            <p style={{ color: '#666' }}>Total en carrito</p>
          </div>
          
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '2rem', fontWeight: 'bold', color: '#16c79a' }}>
              0
            </p>
            <p style={{ color: '#666' }}>Órdenes completadas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
