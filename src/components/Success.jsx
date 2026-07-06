function Success({ setView }) {
  return (
    <div className="page">
      <div className="success">
        <div className="big">✅</div>
        <h2>Order placed successfully!</h2>
        <p>Thank you for shopping with us.</p>
        <div className="btn-row">
          <button onClick={() => setView("orders")}>View Orders</button>
          <button onClick={() => setView("products")}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Success;
