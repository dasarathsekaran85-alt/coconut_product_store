function Orders({ orders, setView }) {
  if (orders.length === 0) {
    return (
      <div className="page">
        <div className="empty">
          <h2>No orders yet 📦</h2>
          <p>Place an order and it will show up here.</p>
          <button onClick={() => setView("products")}>Start Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <h2>My Orders</h2>

      {orders.map((order) => (
        <div key={order.id} className="order-card">
          <div className="order-head">
            <strong>Order #{order.id}</strong>
            <span className="order-date">{order.date}</span>
          </div>

          <div className="order-items">
            {order.items.map((item) => (
              <p key={item.id}>{item.name} × {item.quantity}</p>
            ))}
          </div>

          <div className="order-total">Total: ₹{order.total}</div>
        </div>
      ))}

      <button onClick={() => setView("products")}>Continue Shopping</button>
    </div>
  );
}

export default Orders;
