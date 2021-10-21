import React from 'react'

export const Login = () => {


const outsetaLogin = Outseta.on('accessToken.set', function (user) {
            return user
        });
console.log(outsetaLogin)

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
