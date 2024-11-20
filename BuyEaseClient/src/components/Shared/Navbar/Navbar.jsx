import { Link, NavLink } from 'react-router-dom'
import useAuth from '../../../Hooks/useAuth'
import UserDropdown from './UserDropdown'

const NavItems = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
]

const NavLinks = () => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {NavItems.map((item, idx) => (
        <li key={idx}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? 'text-Red font-bold'
                : 'font-semibold text-lg text-Dark_2 hover:text-Red transition-all duration-1000 delay-75 ease-in-out'
            }
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

const Navbar = () => {
  const { user } = useAuth()
  return (
    <div className="navbar bg-base-100 fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLinks />
          </ul>
        </div>
        <Link to="/" className="text-2xl text-Red font-Secondary font-bold">
          Buy<span className="text-Dark_1">Ease</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks />
        </ul>
      </div>
      {user ? (
        <div className="navbar-end">
          <UserDropdown />
        </div>
      ) : (
        <div className="navbar-end">
          <div className="flex items-center gap-2">
            <Link to="/login">
              <button
                type="submit"
                className="btn bg-Dark_1 text-gray-50 py-2 px-4 rounded-md border border-Dark_1 hover:border-Dark_1 outline-none hover:bg-gray-50 hover:text-Dark_1 transition-all duration-1000 delay-75 ease-in-out"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                type="submit"
                className="btn bg-[#9836FF] text-gray-50 py-2 px-4 rounded-md border border-Red hover:border-Red outline-none hover:bg-gray-50 hover:text-Red transition-all duration-1000 delay-75 ease-in-out"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
