import React from 'react'

export const Login = () => {

    const logiInfo = () => {
        Outseta.on('accessToken.set', function (user) {
            return user
        });
    }   
const dataLogin = logiInfo()

    console.log(dataLogin)

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
