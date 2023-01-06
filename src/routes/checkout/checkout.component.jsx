import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>Checkout Section</h1>
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;

        return (
          <div key={id}>
            <h2>{name}</h2>
            <span onClick={() => addItemToCart(cartItem)}>increment</span>
            <span>{quantity}</span>
            <span>decrement</span>
          </div>
        );
      })}
    </div>
  );
};

export default Checkout;
