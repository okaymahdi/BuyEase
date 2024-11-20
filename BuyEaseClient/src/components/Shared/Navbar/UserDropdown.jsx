import { Link } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'

const UserDropdown = () => {
  const { user, LogOut } = useAuth()
  const handleLogOut = () => {
    LogOut()
  }
  return (
    <div className="dropdown dropdown-bottom dropdown-end">
      <div tabIndex={0} role="button" className=" m-1">
        <div className="avatar">
          <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
            <img src={`${user?.photoURL || '/user.png'}`} />
          </div>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <Link to={'#'}>Dashboard</Link>
        </li>
        <li>
          <button
            onClick={handleLogOut}
            type="submit"
            className="btn bg-Red text-gray-50 py-2 px-4 rounded-md border border-Red hover:border-Red outline-none hover:bg-gray-50 hover:text-Red transition-all duration-1000 delay-75 ease-in-out"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  )
}

export default UserDropdown
