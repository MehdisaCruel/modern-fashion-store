export const ErrorMessage = ({
  title = "Something went wrong.",
  message = "We couldn't load the content."
}) => {
  return (
    <div className="error-state">

      <h2>{title}</h2>

      <p>{message}</p>

    </div>
  )
}