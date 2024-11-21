import { BiLogOut } from 'react-icons/bi'
import { GrOverview } from 'react-icons/gr'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineInventory2 } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import useUserData from '../../Hooks/useUserData'

// Seller Routes
const sellerRoutes = [
  {
    id: 1,
    route: '/dashboard/add-product',
    icon: <IoMdAddCircleOutline size={25} />,
    title: 'Add Product',
  },
  {
    id: 2,
    route: '/dashboard/my-products',
    icon: <MdOutlineInventory2 size={25} />,
    title: 'My Products',
  },
]

const Sidebar = () => {
  const { LogOut } = useAuth()

  const userData = useUserData()
  console.log(userData)

  return (
    <div className=" bg-gray-200 border-r-2 border-Dark_3 border-spacing-1 h-screen px-6 py-16 ">
      <NavLink
        to="/"
        className="flex justify-center text-2xl text-Red font-Secondary font-bold mb-8"
      >
        Buy<span className="text-Dark_1">Ease</span>
      </NavLink>

      <ul className="flex flex-col justify-center items-center text-Dark_2 gap-2">
        <li className="w-full">
          <NavLink
            to="/dashboard/overview"
            className={({ isActive }) =>
              isActive
                ? 'flex items-center justify-center gap-2 py-3 border border-Red rounded-lg  text-Red text-lg font-semibold'
                : 'flex items-center justify-center gap-2 py-3 font-semibold text-lg text-Dark_2 border border-Dark_3 rounded-lg hover:border-Red hover:text-Red  transition-all duration-1000 delay-75 ease-in-out'
            }
          >
            <>
              <GrOverview size={25} />
            </>
            <p>Overview</p>
          </NavLink>
        </li>
        {userData?.role === 'seller' &&
          sellerRoutes.map((route) => (
            <li key={route.id} className="w-full">
              <NavLink
                to={route.route}
                className={({ isActive }) =>
                  isActive
                    ? 'flex items-center justify-center gap-2 border border-Red rounded-lg py-3 px-4 text-Red text-lg font-semibold'
                    : 'flex items-center justify-center gap-2 font-semibold text-lg text-Dark_2 py-3 border border-Dark_3 rounded-lg hover:border-Red hover:text-Red  transition-all duration-1000 delay-75 ease-in-out'
                }
              >
                {route.icon}
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
      </ul>
      <button
        onClick={() => LogOut()}
        type="submit"
        className="btn mt-8 w-full text-xl bg-Red text-gray-50 hover:border-Red outline-none hover:bg-gray-50 hover:text-Red transition-all duration-1000 delay-500 ease-in-out"
      >
        <BiLogOut size={25} />
        Logout
      </button>
    </div>
  )
}

export default Sidebar
