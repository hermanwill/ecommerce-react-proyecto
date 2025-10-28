import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Tu carrito está vacío</h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          ¡Agrega productos para comenzar tu compra!
        </p>
        <Link to="/productos">
          <button className="btn">Ver Productos</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 style={{ marginBottom: '2rem', color: '#1a1a2e' }}>
        Carrito de Compras
      </h1>
      
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img 
            src={item.imagen} 
            alt={item.nombre}
            className="cart-item-image"
          />
          
          <div className="cart-item-info">
            <h3>{item.nombre}</h3>
            <p style={{ color: '#666' }}>{item.categoria}</p>
            <p className="product-price">${item.precio.toLocaleString()}</p>
            
            <div className="cart-item-controls">
              <div className="quantity-control">
                <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              
              <p style={{ fontWeight: '500' }}>
                Subtotal: ${(item.precio * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
          
          <button 
            className="btn btn-danger"
            onClick={() => removeFromCart(item.id)}
            style={{ maxWidth: '150px' }}
          >
            Eliminar
          </button>
        </div>
      ))}
      
      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span>${getCartTotal().toLocaleString()}</span>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button 
            className="btn btn-secondary"
            onClick={clearCart}
            style={{ flex: 1 }}
          >
            Vaciar Carrito
          </button>
          <button className="btn" style={{ flex: 1 }}>
            Proceder al Pago
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
