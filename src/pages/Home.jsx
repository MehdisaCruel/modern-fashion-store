import { Link } from "react-router-dom"
import { ProductCard } from "../components/ProductCard"
import { Loading } from "../components/Loading"
import { ErrorMessage } from "../components/ErrorMessage"
import { useProducts } from "../hooks/useProducts"

export const Home = () => {

  const {
    data: products = [],
    isLoading,
    isError
  } = useProducts()

  if (isLoading) {
    return (
      <main>
        <Loading message="Loading collection..." />
      </main>
    )
  }

  if (isError) {
    return (
      <main>
        <ErrorMessage
          title="Something went wrong."
          message="We couldn't load our collection."
        />
      </main>
    )
  }

  const featuredProducts = products.slice(0, 4)
  const newArrivals = products.slice(4, 8)

  return (
    <main className="home-page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="hero-content">

          <p className="hero-label">
            THE NEW COLLECTION
          </p>

          <h1>
            Timeless Style.
            <br />
            Modern Living.
          </h1>

          <p className="hero-description">
            Discover carefully selected pieces designed
            to become part of your everyday wardrobe.
          </p>

          <Link
            to="/shop"
            className="hero-button"
          >
            Explore Collection
          </Link>

        </div>

      </section>


      {/* SHOP BY CATEGORY */}

      <section className="categories-section">

        <div className="section-heading">

          <p>
            EXPLORE
          </p>

          <h2>
            Shop by Category
          </h2>

        </div>

        <div className="category-grid">

          <Link
            to="/shop"
            className="category-card category-women"
          >
            <div>
              <span>01</span>
              <h3>Women</h3>
              <p>Explore collection</p>
            </div>
          </Link>

          <Link
            to="/shop"
            className="category-card category-new"
          >
            <div>
              <span>02</span>
              <h3>New Arrivals</h3>
              <p>Discover what's new</p>
            </div>
          </Link>

          <Link
            to="/shop"
            className="category-card category-accessories"
          >
            <div>
              <span>03</span>
              <h3>Accessories</h3>
              <p>Complete your look</p>
            </div>
          </Link>

        </div>

      </section>


      {/* FEATURED PRODUCTS */}

      <section className="featured-products">

        <div className="section-heading">

          <p>
            OUR EDIT
          </p>

          <h2>
            Featured Pieces
          </h2>

          <span>
            Timeless essentials selected for you.
          </span>

        </div>

        <div className="products-grid">

          {featuredProducts.map((product) => (

            <ProductCard
              key={product.id}
              product={{
                id: product.id,
                name: product.title,
                price: product.price,
                image: product.image
              }}
            />

          ))}

        </div>

        <div className="section-action">

          <Link to="/shop">
            View All Products →
          </Link>

        </div>

      </section>


      {/* EDITORIAL */}

      <section className="editorial-section">

        <div className="editorial-content">

          <p>
            THE MEHDISA EDIT
          </p>

          <h2>
            Designed for
            <br />
            everyday moments.
          </h2>

          <p>
            Simple silhouettes, thoughtful details,
            and timeless pieces made to stay with you.
          </p>

          <Link to="/shop">
            Discover More
          </Link>

        </div>

      </section>


      {/* NEW ARRIVALS */}

      {newArrivals.length > 0 && (

        <section className="featured-products new-arrivals">

          <div className="section-heading">

            <p>
              JUST IN
            </p>

            <h2>
              New Arrivals
            </h2>

          </div>

          <div className="products-grid">

            {newArrivals.map((product) => (

              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: product.title,
                  price: product.price,
                  image: product.image
                }}
              />

            ))}

          </div>

        </section>

      )}


      {/* NEWSLETTER */}

      <section className="newsletter-section">

        <div className="newsletter-content">

          <p>
            STAY IN THE KNOW
          </p>

          <h2>
            Join our world.
          </h2>

          <span>
            Sign up for new arrivals, exclusive pieces
            and stories from Mehdisa.
          </span>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Your email address"
            />

            <button type="submit">
              →
            </button>

          </form>

        </div>

      </section>

    </main>
  )
}