import { Link } from "react-router-dom"

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/shop/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <h3>{product.name}</h3>

        <p>${product.price}</p>
      </div>
    </Link>
  )
}