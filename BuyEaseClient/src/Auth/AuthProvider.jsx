/* eslint-disable react-refresh/only-export-components */
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { app } from '../Firebase/Firebase'

import axios from 'axios'
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

  // Github Provider
  const githubProvider = new GithubAuthProvider()

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

  // GitHub Sign In
  const GitHubLogin = () => {
    return signInWithPopup(auth, githubProvider)
  }

  // Unsubscribe from Auth State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      if (user) {
        axios
          .post(`http://localhost:4000/authentication`, {
            email: user.email,
          })
          .then((data) => {
            if (data.data) {
              localStorage.setItem('access-token', data?.data?.token)
              setLoading(false)
            }
          })
      } else {
        localStorage.removeItem('access-token')
        setLoading(false)
      }
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
    GitHubLogin,
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AuthProvider
