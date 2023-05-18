import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const AuthenticationContext = createContext();

const AuthenticationProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const logout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const allInfo = {
        user,
        loading,
        login,
        register,
        googleLogin,
        githubLogin,
        logout,
    }
    return (
        <AuthenticationContext.Provider value={allInfo}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationProvider;