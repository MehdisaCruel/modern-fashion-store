import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { Link, useNavigate } from "react-router-dom"

const registerSchema = yup.object({
  name: yup
    .string()
    .required("Name is required"),

  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password")
})

export const Register = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(registerSchema)
  })

  const navigate = useNavigate()

  const onSubmit = (data) => {

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    )

    sessionStorage.setItem(
      "registerMessage",
      "Account created successfully. Please login."
    )

    navigate("/login")
  }

  return (
    <main className="register-page">

      <div className="register-container">

        <div className="register-header">
          <h1>Create Account</h1>
          <p>Create your account to get started.</p>
        </div>

        <form
          className="register-form"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* Name */}

          <div className="form-group">

            <label htmlFor="name">
              Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name")}
            />

            {errors.name && (
              <p className="form-error">
                {errors.name.message}
              </p>
            )}

          </div>

          {/* Email */}

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

          {/* Password */}

          <div className="form-group">

            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              {...register("password")}
            />

            {errors.password && (
              <p className="form-error">
                {errors.password.message}
              </p>
            )}

          </div>

          {/* Confirm Password */}

          <div className="form-group">

            <label htmlFor="confirmPassword">
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              {...register("confirmPassword")}
            />

            {errors.confirmPassword && (
              <p className="form-error">
                {errors.confirmPassword.message}
              </p>
            )}

          </div>

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-link">
          Already have an account?{" "}
          <Link to="/login">
            Login
          </Link>
        </p>

      </div>

    </main>
  )
}