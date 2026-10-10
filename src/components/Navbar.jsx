import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  FiShoppingBag,
  FiSearch,
  FiUser,
  FiX,
  FiMenu
} from "react-icons/fi"

export const Navbar = () => {

  const [searchOpen, setSearchOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.items || []
  )

  const cartCount = cartItems.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  )

  const handleSearch = (e) => {

    if (e.key === "Enter" && searchTerm.trim()) {

      navigate(
        `/shop?search=${encodeURIComponent(searchTerm.trim())}`
      )

      setSearchTerm("")
      setSearchOpen(false)
    }
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        Mehdisa
      </Link>


      {/* DESKTOP NAVIGATION */}

      <div className="navbar-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/shop">
          Shop
        </Link>

      </div>


      {/* ACTIONS */}

      <div className="navbar-actions">

        {/* SEARCH */}

        <button
          className="navbar-action-button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
        >
          {searchOpen ? <FiX /> : <FiSearch />}
        </button>


        {/* SEARCH INPUT */}

        {searchOpen && (

          <input
            type="text"
            placeholder="Search products..."
            className="navbar-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            autoFocus
          />

        )}


        {/* ACCOUNT */}

        <Link
          to="/login"
          className="navbar-action-button"
          aria-label="Account"
        >
          <FiUser />
        </Link>


        {/* CART */}

        <Link
          to="/cart"
          className="navbar-cart"
          aria-label="Shopping cart"
        >

          <FiShoppingBag />

          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}

        </Link>


        {/* MOBILE MENU */}

        <button
          className="navbar-menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>


      {/* MOBILE NAVIGATION */}

      {menuOpen && (

        <div className="mobile-menu">

          <Link
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/shop"
            onClick={closeMenu}
          >
            Shop
          </Link>

          <Link
            to="/login"
            onClick={closeMenu}
          >
            Account
          </Link>

          <Link
            to="/cart"
            onClick={closeMenu}
          >
            Cart
          </Link>

        </div>

      )}

    </nav>
  )
}