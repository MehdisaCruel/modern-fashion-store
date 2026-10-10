import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <main className="not-found-page">

      <div className="not-found-content">

        <p className="not-found-code">
          404
        </p>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link
          to="/"
          className="not-found-button"
        >
          Back to Home
        </Link>

      </div>

    </main>
  )
}