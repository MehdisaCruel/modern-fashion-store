import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"

const loginSchema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
})

export const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const [loginMessage, setLoginMessage] = useState("")

  const navigate = useNavigate()

  useEffect(() => {

    const message = sessionStorage.getItem("registerMessage")

    if (message) {
      setLoginMessage(message)
      sessionStorage.removeItem("registerMessage")
    }

  }, [])

  const onSubmit = (data) => {

    const savedUser = JSON.parse(
      localStorage.getItem("user")
    )

    if (
      savedUser &&
      savedUser.email === data.email &&
      savedUser.password === data.password
    ) {

      setLoginMessage("Login successful")

      setTimeout(() => {
        navigate("/")
      }, 1000)

    } else {

      setLoginMessage("Invalid email or password")

    }
  }

  return (
    <main className="login-page">

      <div className="login-container">

        <div className="login-header">

          <h1>Welcome Back</h1>

          <p>
            Sign in to your account.
          </p>

        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit(onSubmit)}
        >

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

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password")}
            />

            {errors.password && (
              <p className="form-error">
                {errors.password.message}
              </p>
            )}

          </div>

          {loginMessage && (
            <p className="login-message">
              {loginMessage}
            </p>
          )}

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-link">

          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>

        </p>

      </div>

    </main>
  )
}