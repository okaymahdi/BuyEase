import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import Loading from '../../pages/Loading/Loading'
import PropTypes from 'prop-types'
import useUserData from '../../Hooks/useUserData'

const SellerRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  const userData = useUserData()
  if (loading || !userData.role) {
    return <Loading />
  }
  if (user && userData.role === 'seller') {
    return children
  }

  return <Navigate to="/" state={{ from: location }} replace />
}

SellerRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SellerRoute
