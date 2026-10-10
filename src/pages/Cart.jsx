import { useSelector, useDispatch } from "react-redux"
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../store/cartSlice"
import { Link } from "react-router-dom"

export const Cart = () => {

  const cartItems = useSelector((state) => state.cart.items)
  const dispatch = useDispatch()

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <main className="cart-page">

      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p>Review your selected pieces.</p>
      </div>

    <section className="cart-items">

        {cartItems.length === 0 ? (

            <div className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>Discover our collection and find something you love.</p>

            <Link to="/shop" className="continue-shopping">
            Continue Shopping
            </Link>
            </div>

        ) : (

            cartItems.map((item) => (

            <div className="cart-item" key={item.id}>

                <div className="cart-item-image">
                <img
                    src={item.image}
                    alt={item.name}
                />
                </div>

                <div className="cart-item-info">
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                </div>

                <div className="cart-item-quantity">

                <button
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                    -
                </button>

                <span>{item.quantity}</span>

                <button
                    onClick={() => dispatch(increaseQuantity(item.id))}
                >
                    +
                </button>

                </div>

                <div className="cart-item-subtotal">
                ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                className="cart-item-remove"
                onClick={() => dispatch(removeFromCart(item.id))}
                >
                Remove
                </button>

            </div>

            ))
        )}

    </section>

      <section className="cart-summary">

        <h2>
          Total: ${total.toFixed(2)}
        </h2>

      <Link to="/checkout" className="checkout-button">
        Checkout
      </Link>

      </section>

    </main>
  )
}
