import { addDoc, collection } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config'

export const Login = () => {

const [user, setuser] = useState({})

useEffect(() => {
    new Promise ((resolve) => {
       resolve(Outseta.getUser())
    }).then(data => ({name: data.FirstName,
        lastname: data.LastName,
        email: data.Email,
        loginId: data.Uid
    } )
        ).then( data => setuser(data) )
}, [])

console.log(user)

// try {
//     const docRef = await addDoc( collection(db, 'users'), user)
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("error adding dcument: ", e)
// }

    return (
        <div className="ww-comp-button">
            <h3 className="ww-type-paragraph color-secondary typebold primarybutton">{user.FullName}</h3>
        </div>
    )
}
