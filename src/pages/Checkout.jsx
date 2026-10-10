import { useSelector, useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { clearCart } from "../store/cartSlice"

const checkoutSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  address: yup
    .string()
    .required("Address is required"),

  city: yup
    .string()
    .required("City is required"),

  postalCode: yup
    .string()
    .required("Postal code is required")
})

export const Checkout = () => {

  const cartItems = useSelector((state) => state.cart.items)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(checkoutSchema)
  })

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

    const onSubmit = (data) => {

    console.log("Order information:", data)

    dispatch(clearCart())

    navigate("/order-success")
    }

  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">

        <div className="empty-checkout">

          <h1>Your cart is empty</h1>

          <p>
            Add some products before proceeding to checkout.
          </p>

          <Link to="/shop">
            Continue Shopping
          </Link>

        </div>

      </main>
    )
  }

  return (
    <main className="checkout-page">

      <div className="checkout-header">

        <h1>Checkout</h1>

        <p>
          Complete your order.
        </p>

      </div>

      <div className="checkout-container">

        <section className="checkout-form-section">

          <h2>Shipping Information</h2>

          <form
            className="checkout-form"
            onSubmit={handleSubmit(onSubmit)}
          >

            <div className="form-group">

              <label htmlFor="name">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                {...register("name")}
              />

              {errors.name && (
                <p className="form-error">
                  {errors.name.message}
                </p>
              )}

            </div>

            <div className="form-group">

              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register("email")}
              />

              {errors.email && (
                <p className="form-error">
                  {errors.email.message}
                </p>
              )}

            </div>

            <div className="form-group">

              <label htmlFor="address">
                Address
              </label>

              <textarea
                id="address"
                placeholder="Enter your address"
                {...register("address")}
              />

              {errors.address && (
                <p className="form-error">
                  {errors.address.message}
                </p>
              )}

            </div>

            <div className="checkout-row">

              <div className="form-group">

                <label htmlFor="city">
                  City
                </label>

                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  {...register("city")}
                />

                {errors.city && (
                  <p className="form-error">
                    {errors.city.message}
                  </p>
                )}

              </div>

              <div className="form-group">

                <label htmlFor="postalCode">
                  Postal Code
                </label>

                <input
                  id="postalCode"
                  type="text"
                  placeholder="Postal code"
                  {...register("postalCode")}
                />

                {errors.postalCode && (
                  <p className="form-error">
                    {errors.postalCode.message}
                  </p>
                )}

              </div>

            </div>

            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
            </button>

          </form>

        </section>

        <section className="checkout-summary">

          <h2>Order Summary</h2>

          {cartItems.map((item) => (

            <div
              className="checkout-item"
              key={item.id}
            >

              <div>

                <h3>{item.name}</h3>

                <p>
                  Quantity: {item.quantity}
                </p>

              </div>

              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>

            </div>

          ))}

          <div className="checkout-total">

            <span>Total</span>

            <strong>
              ${total.toFixed(2)}
            </strong>

          </div>

        </section>

      </div>

    </main>
  )
}