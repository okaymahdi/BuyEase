/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth/web-extension'
import { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase'

import PropTypes from 'prop-types'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  // State for User
  const [user, setUser] = useState(null)

  // State for Loading
  const [loading, setLoading] = useState(true)

  // Google Provider
  const googleProvider = new GoogleAuthProvider()

  // Create User
  const CreateUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign In
  const Login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // Sign Out
  const LogOut = () => {
    return signOut(auth)
  }

  // Google Sign In
  const GoogleLogin = () => {
    return signInWithPopup(auth, googleProvider)
  }

  // Unsubscribe from Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
      console.log(user)
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  // Export Context
  const authInfo = {
    user,
    loading,
    CreateUser,
    Login,
    LogOut,
    GoogleLogin,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
