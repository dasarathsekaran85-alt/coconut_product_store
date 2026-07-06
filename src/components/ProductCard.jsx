function ProductCard({ product, addToCart }) {
  return (
    <div className="card">
      <img src={product.src} alt={product.name} />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <p>₹{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;