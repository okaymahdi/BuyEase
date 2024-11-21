import axios from 'axios'
import { useEffect, useState } from 'react'
import useAuth from './useAuth'

const useUserData = () => {
  const { user, loading } = useAuth()
  const [userdata, setUserdata] = useState({})

  useEffect(() => {
    const userFetch = async () => {
      const res = await axios.get(`http://localhost:4000/user/${user.email}`)
      setUserdata(res.data)
    }
    if (user?.email && !loading) {
      userFetch()
    }
  }, [user, loading])
  return userdata
}

export default useUserData
