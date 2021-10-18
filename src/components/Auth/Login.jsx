import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForms'


export const Login = () => {
    
    useEffect(() => {
      Outseta.on('accessToken.set', function (user) {
        console.log('accessToken.set', user);
        });
    }, []

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
