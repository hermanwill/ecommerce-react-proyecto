import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Error al cargar el producto');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    addToCart(product);
    navigate('/carrito');
  };

  if (loading) {
    return <div className="loading">Cargando producto...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!product) {
    return <div className="error">Producto no encontrado</div>;
  }

  return (
    <div className="product-detail">
      <button 
        onClick={() => navigate('/productos')}
        className="btn btn-secondary"
        style={{ marginBottom: '2rem', maxWidth: '200px' }}
      >
        ← Volver a Productos
      </button>
      
      <div className="product-detail-content">
        <div>
          <img 
            src={product.imagen} 
            alt={product.nombre}
            className="product-detail-image"
          />
        </div>
        
        <div className="product-detail-info">
          <h1>{product.nombre}</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '1rem' }}>
            {product.categoria}
          </p>
          <p className="product-price">
            ${product.precio.toLocaleString()}
          </p>
          <p className="product-stock">
            {product.stock > 0 ? `Stock disponible: ${product.stock}` : 'Sin stock'}
          </p>
          <p>{product.descripcion || 'Excelente producto de alta calidad.'}</p>
          <button 
            className="btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Agregar al Carrito' : 'Sin Stock'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
