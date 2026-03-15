"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);

    // Simulate network request
    setTimeout(() => {
      setIsSigningIn(false);
      setIsSuccess(true);
      
      const isTeacher = email.toLowerCase().includes('teacher');
      const isParent = email.toLowerCase().includes('parent');

      // Reset state after showing success
      setTimeout(() => {
        setIsSuccess(false);
        if (isTeacher) {
          router.push('/teacher');
        } else if (isParent) {
          router.push('/parent');
        } else {
          router.push('/student');
        }
      }, 1500);
    }, 1000);
  };

  return (
    <>
      <div className="background-pattern"></div>

      <div className="login-wrapper">
        <div className="login-card">
          <div className="brand-header">
            <div className="logo-box">
              <img src="/logo-blue.png" alt="Lumen Logo" />
            </div>
            <h1 className="brand-title">Lumen</h1>
            <p className="brand-subtitle">School Management Platform</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="userId">Email or Student ID</label>
              <input 
                type="text" 
                id="userId" 
                placeholder="Enter your email or ID" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>

            <button 
              type="submit" 
              className="primary-btn"
              disabled={isSigningIn || isSuccess}
              style={{
                opacity: isSigningIn ? 0.8 : 1,
                backgroundColor: isSuccess ? '#10B981' : undefined
              }}
            >
              {isSigningIn ? 'Signing In...' : isSuccess ? 'Signed In!' : 'Sign In'}
            </button>

            <div className="form-actions">
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
          </form>

          <div className="divider"></div>

          <div className="demo-accounts">
            <p className="demo-title">Demo accounts:</p>
            <div className="demo-list">
              <p>student@lumen.edu | teacher@lumen.edu</p>
              <p>parent@lumen.edu | admin@lumen.edu</p>
            </div>
          </div>
        </div>
      </div>

      <button className="help-btn" aria-label="Help">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#111827" />
          <path d="M12 16V16.5M12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );
}
