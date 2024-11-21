import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="bg-gray-200 border-r-2 border-Dark_3 border-spacing-1 h-screen">
      <ul className="flex flex-col gap-4 text-Dark_1 p-4">
        <li>
          <Link to="/overview">Overview</Link>
        </li>
        <li>
          <Link to="/viewall">View all</Link>
        </li>
        <li>
          <Link to="/newproduct">Add New Product</Link>
        </li>
        <li>
          <Link to="/updateproduct">Update Product</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <button>Log Out</button>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
