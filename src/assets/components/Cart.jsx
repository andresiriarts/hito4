import { useState } from "react";
import { pizzaCart as initialPizzaCart } from "./pizzas";

const Cart = () => {
  const [cart, setCart] = useState(initialPizzaCart);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0) // Eliminar si count es 0
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="cart">
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width={50} className="cart-image" />
              <span>{item.name} - ${item.price} x {item.count}</span>
              <div className="cart-buttons">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${total.toLocaleString("es-CL")}</h2>
      <button className="pay-button">Pagar</button>
    </div>
  );
};

export default Cart;
