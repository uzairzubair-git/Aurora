import { Link } from "react-router-dom";
import { useCart } from "../../context/context.jsx";
import "./Cart.css";

function Cart() {
  const { cartItems, setCartItems } = useCart();

  // Remove product
  const removeFromCart = (indexToRemove) => {
    setCartItems((previousItems) =>
      previousItems.filter((_, index) => index !== indexToRemove),
    );
  };

  // Update quantity
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

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );

  // Delivery
  const deliveryFee = cartItems.length > 0 ? 15 : 0;

  // Total
  const total = subtotal + deliveryFee;

  return (
    <main className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>

          <p>You haven't added anything to your cart yet.</p>

          <Link to="/shop">Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-content">
          {/* Cart Products */}
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item" key={`${item.id}-${index}`}>
                {/* Product Image */}
                <img src={item.image} alt={item.name} />

                {/* Product Information */}
                <div className="cart-item-info">
                  <h2>{item.name}</h2>

                  <p>Price: ${item.price}</p>

                  <p>Size: {item.selectedSize || "Not selected"}</p>

                  <p>Color: {item.selectedColor || "Not selected"}</p>

                  {/* Quantity */}
                  <div className="cart-quantity">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>

                {/* Item Total */}
                <strong className="item-total">
                  ${Number(item.price) * item.quantity}
                </strong>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div>
              <span>Subtotal</span>

              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div>
              <span>Delivery</span>

              <span>${deliveryFee.toFixed(2)}</span>
            </div>

            <hr />

            <div>
              <strong>Total</strong>

              <strong>${total.toFixed(2)}</strong>
            </div>

            <Link to="/checkout" className="checkout-button">
              Go to Checkout
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}

export default Cart;
