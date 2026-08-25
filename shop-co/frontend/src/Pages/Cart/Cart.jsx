import { useCart } from "../../context/context.jsx";

function Cart() {
  const { cartItems, setCartItems } = useCart();

  const removeFromCart = (indexToRemove) => {
    setCartItems((previousItems) =>
      previousItems.filter((_, index) => index !== indexToRemove),
    );
  };

  const updateQuantity = (indexToUpdate, newQuantity) => {
    if (newQuantity < 1) {
      return;
    }

    setCartItems((previousItems) =>
      previousItems.map((item, index) =>
        index === indexToUpdate
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item,
      ),
    );
  };

  return (
    <main>
      <h1>Your Cart</h1>

      <p>
        Total items:{" "}
        {cartItems.reduce((total, item) => total + item.quantity, 0)}
      </p>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={`${item.id}-${index}`}>
            <img src={item.image} alt={item.name} width="120" />

            <h2>{item.name}</h2>

            <p>Price: ${item.price}</p>

            <p>Size: {item.selectedSize || "Not selected"}</p>

            <p>Color: {item.selectedColor || "Not selected"}</p>

            <div>
              <button onClick={() => updateQuantity(index, item.quantity - 1)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => updateQuantity(index, item.quantity + 1)}>
                +
              </button>
            </div>

            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </main>
  );
}

export default Cart;
