import { useSearchParams } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { useProducts } from "../hooks/useProducts"
import { useState } from "react"
import { Loading } from "../components/Loading"
import { ErrorMessage } from "../components/ErrorMessage"

export const Shop = () => {

  const [searchParams] = useSearchParams()
  const searchTerm = searchParams.get("search") || ""

  const [category, setCategory] = useState("all")
  const [sort, setSort] = useState("default")

  const {
    data: products = [],
    isLoading,
    isError
  } = useProducts()

  if (isLoading) {
    return (
      <main className="shop-page">
        <Loading message="Loading products..." />
      </main>
    )
  }

  if (isError) {
    return (
      <main className="shop-page">
        <ErrorMessage
          title="Something went wrong."
          message="We couldn't load the products."
        />
      </main>
    )
  }

  const categories = [
    "all",
    ...new Set(products.map((product) => product.category))
  ]

  let filteredProducts = products.filter((product) =>
    product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  )

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    )
  }

  if (sort === "price-low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    )
  }

  if (sort === "price-high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    )
  }

  if (sort === "name") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.title.localeCompare(b.title)
    )
  }

  return (
    <main className="shop-page">

      <section className="shop-header">

        <h1>Shop</h1>

        <p>
          Discover our collection.
        </p>

      </section>

      <section className="shop-controls">

        <div className="category-filter">

          {categories.map((item) => (

            <button
              key={item}
              className={category === item ? "active" : ""}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>

          ))}

        </div>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">
            Sort by
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="name">
            Name
          </option>
        </select>

      </section>

      <section className="products-grid">

        {filteredProducts.length > 0 ? (

          filteredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image
              }}
            />

          ))

        ) : (

          <div className="no-results">

            <h2>No products found</h2>

            <p>
              We couldn't find anything matching your filters.
            </p>

          </div>

        )}

      </section>

    </main>
  )
}