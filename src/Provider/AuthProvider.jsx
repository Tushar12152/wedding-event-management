import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import auth from "../Firebase/Firebase.config";
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext=createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const googleSignUp=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubSignUp=()=>{
        setLoading(true)
        return signInWithPopup(auth,githubProvider)
    }
    
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
       return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
               setUser(currentUser)
               setLoading(false)
        })
        return ()=>{
           return unSubscribe()
        }
    },[])




    const authInfo={
        createUser,
        login,
        user,
        logOut,
        loading,
        googleSignUp,
        githubSignUp


    }


    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes={
    children:PropTypes.node,
}
export default AuthProvider;