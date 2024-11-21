import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Dashboard/Sidebar'

const Dashboard = () => {
  return (
    <div className="grid lg:grid-cols-12 gap-2">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
