import { useState } from 'react'
import LoginForm from './components/LoginForm'
import WelcomePage from './components/WelcomePage'
import './App.css'

// Hardcoded valid credentials for frontend-only authentication
const VALID_USERS = [
  { email: 'test@example.com', password: 'Test@1234' },
  { email: 'admin@example.com', password: 'Admin@9876' },
  { email: 'user@demo.com', password: 'User@5678' },
]

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  // Handle login - validates credentials
  const handleLogin = (email, password) => {
    const user = VALID_USERS.find(
      (u) => u.email === email && u.password === password
    )
    
    if (user) {
      setCurrentUser(user.email)
      return { success: true }
    }
    
    // Check if email exists
    const emailExists = VALID_USERS.find((u) => u.email === email)
    
    if (emailExists) {
      return { success: false, error: 'Incorrect password' }
    } else {
      return { success: false, error: 'Email not found' }
    }
  }

  // Handle logout
  const handleLogout = () => {
    setCurrentUser(null)
  }

  return (
    <div className="app">
      {currentUser ? (
        <WelcomePage email={currentUser} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} validEmails={VALID_USERS.map(u => u.email)} />
      )}
    </div>
  )
}

export default App

