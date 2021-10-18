import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'


export const Login = () => {
    const [ {email, password }, handleInputChange ] = useForm({
        email: 'pcruzmay@yahoo.com',
        password: '123456'
    })
    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
