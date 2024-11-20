import { FaTimes } from 'react-icons/fa'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'

import { useState } from 'react'

const NavItems = [
  { path: '/', label: 'Home' },
  { path: '/products', label: 'Products' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
]

const NavItem = ({ handleMenu }) => {
  return (
    <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
      {NavItems.map((item, idx) => (
        <li key={idx} onClick={handleMenu}>
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
  const [toggleMenu, setToggleMenu] = useState(false)
  const handleMenu = () => {
    setToggleMenu((prevState) => !prevState)
  }
  return (
    <header>
      <nav className="container mx-auto max-w-screen-2xl flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <Link to="/" className="text-2xl text-Red font-Secondary font-bold">
          Buy<span className="text-Dark_1">Ease</span>
        </Link>

        {/* Hamberger */}
        <div
          onClick={handleMenu}
          className="md:hidden cursor-pointer text-xl text-Dark_2 hover:text-Red"
        >
          {toggleMenu ? null : <FaBarsStaggered />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-white flex flex-col justify-center items-center space-y-8 transition-transform transform ${
            toggleMenu ? 'translate-x-0' : '-translate-x-full'
          } md:hidden`}
        >
          <div
            className="cursor-pointer py-3 text-2xl text-Dark_2 hover:text-Red absolute top-4 right-4"
            onClick={handleMenu}
          >
            <FaTimes />
          </div>
          <div onClick={handleMenu}>
            <NavItem />

            <div className="flex flex-col gap-8 mt-8">
              <Link to="/login">
                <button
                  type="submit"
                  className="w-full font-bold bg-Dark_1 text-gray-50 py-2 px-4 rounded-md border border-Dark_1 hover:border-Dark_1 outline-none hover:bg-gray-50 hover:text-Dark_1 transition-all duration-1000 delay-75 ease-in-out"
                >
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button
                  type="submit"
                  className="font-bold text-Red py-2 px-4 rounded-md border border-Red bg-gray-50 hover:bg-Red outline-none hover:text-gray-50 transition-all duration-1000 delay-75 ease-in-out"
                >
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <NavItem />
        </div>

        {/* Login Register Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Link to="/login">
            <button
              type="submit"
              className="font-bold bg-Dark_1 text-gray-50 py-2 px-4 rounded-md border border-Dark_1 hover:border-Dark_1 outline-none hover:bg-gray-50 hover:text-Dark_1 transition-all duration-1000 delay-75 ease-in-out"
            >
              Login
            </button>
          </Link>
          <Link to="/register">
            <button
              type="submit"
              className="font-bold text-Red py-2 px-4 rounded-md border border-Red bg-gray-50 hover:bg-Red outline-none hover:text-gray-50 transition-all duration-1000 delay-75 ease-in-out"
            >
              Register
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
