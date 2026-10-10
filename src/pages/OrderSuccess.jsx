import { Link } from "react-router-dom"

export const OrderSuccess = () => {
  return (
    <main className="order-success-page">

      <div className="order-success-content">

        <div className="success-icon">
          ✓
        </div>

        <p className="success-label">
          ORDER CONFIRMED
        </p>

        <h1>
          Thank You For Your Order
        </h1>

        <p>
          Your order has been successfully placed.
          We appreciate your purchase and hope you enjoy your new pieces.
        </p>

        <Link
          to="/shop"
          className="success-button"
        >
          Continue Shopping
        </Link>

      </div>

    </main>
  )
}