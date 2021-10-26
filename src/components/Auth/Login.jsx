import { addDoc, collection, doc, getDoc, getDocs, query, setDoc, where } from '@firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config'

export const Login = () => {

const [user, setuser] = useState({
        loading: true,
        loginId:'',
        name: '',
        lastname: '',
        email: '',})

useEffect(() => {
    new Promise ((resolve) => {
       resolve(Outseta.getUser())
    }).then( data => ({
        loading: false,
        loginId:  data.Uid,
        name: data.FirstName,
        lastname: data.LastName,
        email: data.Email,
    } )
        ).then( data => setuser(data) )
}, [])


// const addUser = async () => {
//     try {
//         const docRef = await addDoc( collection(db, 'users'), user)
//         console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//         console.error("error adding document: ", e)
//     }
// }
// addUser()

useEffect(() => {

    


    const createUser = async () => {

        const userRef = collection(db, "users");

        await setDoc(doc(userRef,`${user.loginId}`), user);

        const docRef = doc(db, "users", `${user.loginId}`);
        const docSnap = await getDoc(docRef);
           if(docSnap.exist()) {
               console.log("exist")
           } else {
               console.log('dont exist')
           }
    }
    createUser()
}, [user, setuser])


useEffect(() => {
const getUsers = async () => {
    const userDashboard = collection(db, "users");
            const userQuery =  query(userDashboard, where("loginId", "==", `${user.loginId}` ));
                    const querySnapshot = await getDocs(userQuery)
                    querySnapshot.forEach( (doc) => {
                        console.log(doc.id , ' => ', doc.data())
                    })
}
getUsers()
}, [user, setuser])

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
