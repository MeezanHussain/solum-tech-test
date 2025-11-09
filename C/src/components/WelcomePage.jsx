import './WelcomePage.css'

function WelcomePage({ email, onLogout }) {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        {/* Success Icon */}
        <div className="success-icon-wrapper">
          <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Welcome Message */}
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome!</h1>
          <p className="welcome-message">
            You have successfully logged in as
          </p>
          <p className="welcome-email">{email}</p>
        </div>

        {/* User Info Card */}
        <div className="user-info-card">
          <div className="info-item">
            <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <div>
              <p className="info-label">Account</p>
              <p className="info-value">Active</p>
            </div>
          </div>

          <div className="info-item">
            <svg className="info-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div>
              <p className="info-label">Last Login</p>
              <p className="info-value">{new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <div className="action-buttons">
          <button className="btn-logout" onClick={onLogout}>
            <svg className="btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage

