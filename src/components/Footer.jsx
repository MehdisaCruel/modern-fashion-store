import { Link } from "react-router-dom"

export const Footer = () => {

  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">

          <h2>
            Mehdisa
          </h2>

          <p>
            Timeless pieces for modern everyday living.
          </p>

        </div>


        <div className="footer-column">

          <h3>
            Shop
          </h3>

          <Link to="/shop">
            New Arrivals
          </Link>

          <Link to="/shop">
            Collection
          </Link>

          <Link to="/shop">
            Accessories
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            Customer Care
          </h3>

          <Link to="/shop">
            Shipping
          </Link>

          <Link to="/shop">
            Returns
          </Link>

          <Link to="/shop">
            Contact
          </Link>

        </div>


        <div className="footer-column">

          <h3>
            Follow
          </h3>

          <a href="#">
            Instagram
          </a>

          <a href="#">
            Pinterest
          </a>

          <a href="#">
            LinkedIn
          </a>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 Mehdisa. All rights reserved.
        </p>

        <p>
          Designed with intention.
        </p>

      </div>

    </footer>
  )
}