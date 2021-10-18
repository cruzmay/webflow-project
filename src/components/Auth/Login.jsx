import React, { useEffect } from 'react'


export const Login = () => {

    useEffect(() => {
      Outseta.on('accessToken.set', function (user) {
        console.log('accessToken.set', user);
        });
    }, [])

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">Paragraph</h3>
        </div>
    )
}
