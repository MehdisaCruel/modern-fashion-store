export const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="loading-state">
      <div className="loading-spinner"></div>
      <p>{message}</p>
    </div>
  )
}