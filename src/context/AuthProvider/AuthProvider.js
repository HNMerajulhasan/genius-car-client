import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth';

export const AuthContext=createContext();
const auth=getAuth(app)

const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);//user paoar age loading hbe.tai setlaoding ekhane true.

const createUser=(email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}

const login=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
  }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
}

useEffect(()=>{
    const unsbscribe=onAuthStateChanged(auth,currentUser=>{
        console.log(currentUser);
        setUser(currentUser);
        setLoading(false);//user paoar por Loading ar hbe na tai ekhane setlaoding false.
    });
    return ()=>{
        return unsbscribe();
    }
},[])

const authInfo={user,loading,createUser,login,logOut}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;