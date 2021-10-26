import { collection, doc, getDoc, setDoc } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config'

export const Login = () => {

const [user, setuser] = useState({})
const [dbUser, setdbUser] = useState({})

useEffect(() => {
    new Promise ((resolve) => {
       resolve(Outseta.getUser())
    }).then( data => ({
        loginId:  data.Uid,
        name: data.FirstName,
        lastname: data.LastName,
        email: data.Email,
    } )
        ).then( data => setuser(data) )
}, [])


useEffect(() => {

    const createUser = async () => {

        const docRef = doc(db, "users", `${user.loginId}`);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const dbUser = docSnap.data()
            setdbUser(dbUser)
        } else {
            const userRef = collection(db, "users");
            await setDoc(doc(userRef,`${user.loginId}`), user);

            const docRef = doc(db, "users", `${user.loginId}`);
            const docSnap = await getDoc(docRef);
            const dbUser = docSnap.data()
            setdbUser(dbUser)
        }
    }
    createUser()
}, [user, setuser])

console.log('state', dbUser)

    return (
        <>
        {
            user.loading ? "loading ..." 
            : <div className="ww-comp-button">
               <h3 className="ww-type-paragraph color-secondary typebold primarybutton">{`${user.name} ${user.lastname}`}</h3>
             </div>
        }
        </>
    )
}
