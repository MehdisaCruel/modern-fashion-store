import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useProducts } from "../hooks/useProducts"
import { addToCart } from "../store/cartSlice"

export const ProductDetails = () => {

  const { id } = useParams()

  const dispatch = useDispatch()

    const {
    data: products = [],
    isLoading,
    isError
    } = useProducts()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  if (isLoading) {
    return (
      <main className="product-details-message">
        <h2>Loading product...</h2>
      </main>
    )
  }

  if (isError) {
    return (
      <main className="product-details-message">
        <h2>Something went wrong.</h2>
        <p>We couldn't load this product.</p>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="product-details-message">
        <h2>Product not found</h2>
        <p>This product doesn't exist.</p>
      </main>
    )
  }

  const formattedProduct = {
    id: product.id,
    name: product.title,
    price: product.price,
    image: product.image
  }

  return (
    <main className="product-details">

      <div className="product-details-image">

        <img
          src={formattedProduct.image}
          alt={formattedProduct.name}
        />

      </div>

      <div className="product-details-info">

        <p className="product-details-category">
          {product.category}
        </p>

        <h1>
          {formattedProduct.name}
        </h1>

        <p className="product-details-price">
          ${formattedProduct.price}
        </p>

        <p className="product-details-description">
          {product.description}
        </p>

        <button
          onClick={() => dispatch(addToCart(formattedProduct))}
        >
          Add to Cart
        </button>

      </div>

    </main>
  )
}