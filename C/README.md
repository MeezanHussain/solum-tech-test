# Problem C: Login Page - Frontend Test

## Overview

A modern, responsive login page built with **React** and **Vite**, featuring comprehensive form validation, beautiful UI/UX, and frontend-only authentication.

## Features

### Requirements Met

1. **Clean Layout**
   - Centered login form with gradient background
   - Email input, password input, login button
   - "Forgot password?" link
   - Fully responsive (desktop & mobile)

2. **Email Validation**
   - Non-empty check
   - Valid email format validation
   - Checks if email exists in system
   - Real-time error feedback

3. **Password Validation**
   - Length: 8-16 characters
   - Must contain: uppercase, lowercase, number, symbol
   - Real-time error display
   - Show/hide password toggle

4. **Authentication**
   - Frontend-only (no backend)
   - Validates credentials against hardcoded list
   - Displays welcome page on success
   - Logout returns to login page

### Bonus Features

- **Modern Design**: Beautiful gradient background, smooth animations
- **Interactive UI**: Hover effects, loading states, shake animations on error
- **Show/Hide Password**: Toggle password visibility
- **Accessibility**: Proper labels, ARIA attributes
- **Demo Credentials**: Visible on login page for easy testing
- **Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)

## Quick Start

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation & Running

```bash
# 1. Navigate to the C directory
cd C

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

The app will open at **http://localhost:5173**

### Building for Production

```bash
npm run build
npm run preview
```

## Demo Credentials

Use any of these credentials to test the login:

| Email | Password |
|-------|----------|
| `test@example.com` | `Test@1234` |
| `admin@example.com` | `Admin@9876` |
| `user@demo.com` | `User@5678` |

## Project Structure

```
C/
├── src/
│   ├── components/
│   │   ├── LoginForm.jsx       # Login form component with validation
│   │   ├── LoginForm.css       # Login form styles
│   │   ├── WelcomePage.jsx     # Welcome page after login
│   │   └── WelcomePage.css     # Welcome page styles
│   ├── App.jsx                 # Main app component (auth logic)
│   ├── App.css                 # App styles
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles & variables
├── index.html                  # HTML entry point
├── package.json                # Dependencies & scripts
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## Technical Implementation

### Validation Logic

#### Email Validation
```javascript
// 1. Check if empty
// 2. Validate email format (regex)
// 3. Check if email exists in valid users list
```

#### Password Validation
```javascript
// 1. Length: 8-16 characters
// 2. Must contain:
//    - At least one uppercase letter (A-Z)
//    - At least one lowercase letter (a-z)
//    - At least one number (0-9)
//    - At least one symbol (!@#$%^&*...)
```

### Authentication Flow

```
1. User enters credentials
   ↓
2. Frontend validates format
   ↓
3. Check against hardcoded users
   ↓
4a. Valid → Show welcome page
4b. Invalid → Show error message
   ↓
5. Logout → Return to login page
```

### Hardcoded User Data

Located in `src/App.jsx`:

```javascript
const VALID_USERS = [
  { email: 'test@example.com', password: 'Test@1234' },
  { email: 'admin@example.com', password: 'Admin@9876' },
  { email: 'user@demo.com', password: 'User@5678' },
]
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool & dev server
- **CSS3** - Styling with custom properties
- **SVG Icons** - Inline SVG for icons
- **ES6+** - Modern JavaScript

---

**Built with ❤️ for the Frontend Technical Test**

