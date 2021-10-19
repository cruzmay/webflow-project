import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'


export const Login = () => {

    const logiInfo = () => {
        window.Outseta && Outseta.on('accessToken.set', function (user) {
            return ({
                name: user.name,
            })
        });
    }   
   logiInfo()

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
