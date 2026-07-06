function Cart({
  cart,
  total,
  increaseQty,
  decreaseQty,
  removeFromCart,
  placeOrder,
  setView,
}) {
  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <button onClick={() => setView("products")}>
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img
                src={item.src}
                alt={item.name}
                width="120"
              />

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <p>Price: ₹{item.price}</p>

              <div className="qty-controls">
                <button
                  onClick={() => decreaseQty(item.id)}
                >
                  -
                </button>

                <span> {item.quantity} </span>

                <button
                  onClick={() => increaseQty(item.id)}
                >
                  +
                </button>
              </div>

              <p>
                Subtotal: ₹
                {item.price * item.quantity}
              </p>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Total Amount: ₹{total}</h2>

          <button onClick={placeOrder}>
            Place Order
          </button>

          <button
            onClick={() => setView("products")}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;