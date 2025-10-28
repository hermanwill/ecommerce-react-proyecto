import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      <img 
        src={product.imagen} 
        alt={product.nombre} 
        className="product-image"
      />
      <h3>{product.nombre}</h3>
      <p>{product.categoria}</p>
      <p className="product-price">${product.precio.toLocaleString()}</p>
      <p className="product-stock">
        {product.stock > 0 ? `Stock: ${product.stock}` : 'Sin stock'}
      </p>
      <button 
        className="btn" 
        onClick={handleAddToCart}
        disabled={product.stock === 0}
      >
        {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
      </button>
    </div>
  );
};

export default ProductCard;
