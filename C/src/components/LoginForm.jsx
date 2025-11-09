import { useState } from 'react'
import './LoginForm.css'

function LoginForm({ onLogin, validEmails }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  /**
   * Password Validation Function
   * Checks if password meets all requirements:
   * - 8-16 characters
   * - At least one uppercase letter
   * - At least one lowercase letter
   * - At least one number
   * - At least one symbol
   */
  const validatePassword = (pwd) => {
    const errors = []
    
    if (pwd.length < 8 || pwd.length > 16) {
      errors.push('Password must be 8-16 characters')
    }
    if (!/[A-Z]/.test(pwd)) {
      errors.push('Must contain at least one uppercase letter')
    }
    if (!/[a-z]/.test(pwd)) {
      errors.push('Must contain at least one lowercase letter')
    }
    if (!/[0-9]/.test(pwd)) {
      errors.push('Must contain at least one number')
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)) {
      errors.push('Must contain at least one symbol')
    }
    
    return errors
  }

  /**
   * Email Validation Function
   * Checks if email is not empty and has valid format
   */
  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required'
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    
    return null
  }

  /**
   * Handle form submission
   * Validates both fields and attempts login
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Reset previous errors
    const newErrors = {}
    
    // Validate email
    const emailError = validateEmail(email)
    if (emailError) {
      newErrors.email = emailError
    } else if (!validEmails.includes(email)) {
      newErrors.email = "This email doesn't exist in our system"
    }
    
    // Validate password
    const passwordErrors = validatePassword(password)
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (passwordErrors.length > 0) {
      newErrors.password = passwordErrors[0] // Show first error
      newErrors.passwordDetails = passwordErrors
    }
    
    // If there are validation errors, display them
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }
    
    // Attempt login
    const result = onLogin(email, password)
    
    if (!result.success) {
      setErrors({ general: result.error })
    }
    
    setIsSubmitting(false)
  }

  /**
   * Handle input changes and clear errors
   */
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (errors.email || errors.general) {
      setErrors({ ...errors, email: null, general: null })
    }
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
    if (errors.password || errors.general) {
      setErrors({ ...errors, password: null, passwordDetails: null, general: null })
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        {/* Header */}
        <div className="login-header">
          <div className="icon-wrapper">
            <svg
              className="lock-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="login-title">Login Page</h1>
          <p className="login-subtitle">Sign in to your account</p>
        </div>

        {/* General Error Message */}
        {errors.general && (
          <div className="alert alert-error">
            <svg className="alert-icon" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {errors.general}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
            {errors.email && (
              <p className="error-message">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-wrapper">
              <svg className="input-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-toggle"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <div className="error-message">
                {errors.passwordDetails ? (
                  <ul className="error-list">
                    {errors.passwordDetails.map((err, idx) => (
                      <li key={idx}>{err}</li>
                    ))}
                  </ul>
                ) : (
                  errors.password
                )}
              </div>
            )}
            
            {/* Password Requirements Hint */}
            {!errors.password && password && (
              <div className="password-hint">
                Password must be 8-16 chars with uppercase, lowercase, number & symbol
              </div>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="form-footer">
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`btn-submit ${isSubmitting ? 'btn-loading' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <svg className="spinner" viewBox="0 0 24 24">
                  <circle
                    className="spinner-circle"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="demo-credentials">
          <p className="demo-title">Demo Credentials:</p>
          <div className="demo-list">
            <code>test@example.com / Test@1234</code>
            <code>admin@example.com / Admin@9876</code>
            <code>user@demo.com / User@5678</code>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm

