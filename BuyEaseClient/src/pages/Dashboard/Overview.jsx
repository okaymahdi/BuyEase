import useAuth from '../../Hooks/useAuth'

const Overview = () => {
  const { user } = useAuth()
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 className="text-xl font-bold text-Dark_2">{user.email}</h1>
    </div>
  )
}

export default Overview
