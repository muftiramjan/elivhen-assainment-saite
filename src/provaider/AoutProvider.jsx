import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AoutContext = createContext();
import Auth from "../firebase/firebase.config";
import axios from 'axios';

const googleProvaider = new GoogleAuthProvider()

const AoutProvider = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loding, setLoding] = useState(true);
    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(Auth, email, password)

    }
    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const googleLogin = () => {
        setLoding(true)
        return signInWithPopup(Auth, googleProvaider)
    }
    const logOut = () => {
        setLoding(true)
        return signOut(Auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, currentcuser => {
            setuser(currentcuser);
            setLoding(false)
            // if (currentcuser) {
            //     const loggrUser={ email: currentcuser.email}
            //     axios.post('http://localhost:5000/jwt',loggrUser,{withCredentials: true })
            //         .then(res => {
            //             console.log('token res pons',res.data);
            //         })
            // }
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const Aoutinfo = {
        user,
        loding,
        createUser,
        signIn,
        logOut,
        googleLogin
    }
    return (
        <AoutContext.Provider value={Aoutinfo}>
            {children}
        </AoutContext.Provider>
    );
};

export default AoutProvider;