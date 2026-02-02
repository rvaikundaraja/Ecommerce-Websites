import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div>
      {cart.map(item => (
        <p key={item._id}>{item.name} x {item.quantity}</p>
      ))}
      <h2>Total: ${total}</h2>
    </div>
  );
};

export default Cart;
