function Navbar({ cartCount, setView }) {
  return (
    <nav className="navbar">
      <h2 className="brand">MyShop</h2>

      <div className="nav-actions">
        <button onClick={() => setView("orders")}>
          Orders
        </button>

        <button onClick={() => setView("cart")}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;