import { useState, useEffect } from "react";
import productsData from "./data/products.js";
import Navbar from "./components/Navbar.jsx";
import ProductCard from "./components/ProductCard.jsx";
import Cart from "./components/Cart.jsx";
import Orders from "./components/Orders.jsx";
import Success from "./components/Success.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [view, setView] = useState("products");

  // load products once (Day 4: replace with a fetch)
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // count + total, added up with a simple loop
  let cartCount = 0;
  let total = 0;
  for (const item of cart) {
    cartCount = cartCount + item.quantity;
    total = total + item.price * item.quantity;
  }

  // show cart count in the browser tab
  useEffect(() => {
    if (cartCount > 0) {
      document.title = "MyShop (" + cartCount + ")";
    } else {
      document.title = "MyShop";
    }
  }, [cartCount]);

  // ---- cart functions ----
  function addToCart(product) {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updatedCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  function increaseQty(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function decreaseQty(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart.filter((item) => item.quantity > 0));
  }

  function removeFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  function placeOrder() {
    const newOrder = {
      id: orders.length + 1,
      date: new Date().toLocaleString(),
      items: cart,
      total: total,
    };
    setOrders([...orders, newOrder]);
    setCart([]);
    setView("success");
  }

  return (
    <div>
      <Navbar cartCount={cartCount} setView={setView} />

      {view === "products" && (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}

      {view === "cart" && (
        <Cart
          cart={cart}
          total={total}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
          placeOrder={placeOrder}
          setView={setView}
        />
      )}

      {view === "orders" && <Orders orders={orders} setView={setView} />}

      {view === "success" && <Success setView={setView} />}
    </div>
  );
}

export default App;
