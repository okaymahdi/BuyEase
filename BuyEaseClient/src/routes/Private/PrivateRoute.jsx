import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import Loading from '../../pages/Loading/Loading'
import PropTypes from 'prop-types'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()
  if (loading) {
    return <Loading />
  }
  if (user) {
    return children
  }

  return <Navigate to="/" state={{ from: location }} replace />
}

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PrivateRoute
