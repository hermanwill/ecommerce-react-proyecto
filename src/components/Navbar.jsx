import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { getCartItemsCount } = useCart();
  const { isAuthenticated, logout } = useAuth();
  const cartCount = getCartItemsCount();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link to="/">
          <h1>🛒 TechStore</h1>
        </Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={({ isActive }) => isActive ? 'active' : ''}>
            Productos
          </NavLink>
          <NavLink to="/carrito" className={({ isActive }) => isActive ? 'active' : ''}>
            Carrito
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/perfil" className={({ isActive }) => isActive ? 'active' : ''}>
                Mi Perfil
              </NavLink>
              <button 
                onClick={logout} 
                style={{ 
                  background: 'transparent', 
                  border: '1px solid white', 
                  color: 'white', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '5px', 
                  cursor: 'pointer' 
                }}
              >
                Cerrar Sesión
              </button>
            </>
          ) : (
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
