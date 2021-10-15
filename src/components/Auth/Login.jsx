import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <input 
            type="text" 
            placeholder="email"
            name="email"
            autoComplete="off"
            />
            <input 
            type="password" 
            placeholder="password"
            name="password"
            autoComplete="off"
            />
            <button
            type="submit"
            >
                Login
            </button>
            <Link to="#">Forgot Password?</Link>
            <Link to="/sing-up">don't have an account? Sing up...</Link>
        </div>
    )
}
