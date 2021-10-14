import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <h1>Login!!!</h1>
            <Link to="/sing-up">don't have an account? Sing up...</Link>
        </div>
    )
}
