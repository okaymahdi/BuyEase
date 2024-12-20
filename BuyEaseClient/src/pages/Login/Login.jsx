import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import GoogleLogin from '../../components/SocialsLogin/GoogleLogin'

const Login = () => {
  const { Login } = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()

  const handleForm = (data) => {
    console.log(data)
    Login(data.email, data.password).then(() => {
      navigate('/')
    })
  }
  return (
    <div className="w-full my-24 max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-Dark_1">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
      <p className="text-sm text-center dark:text-Dark_2">
        Dont have account?{' '}
        <Link
          to="/register"
          rel="noopener noreferrer"
          className="focus:underline hover:underline text-Red font-light"
        >
          Sign up here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <GoogleLogin />
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full dark:text-Dark_2" />
        <p className="px-3 dark:text-Dark_2">OR</p>
        <hr className="w-full dark:text-Dark_2" />
      </div>
      <form onSubmit={handleSubmit(handleForm)} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@address.com"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <p className="text-sm font-light text-red-500">
                Email is Required...!
              </p>
            )}
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
              {...register('password', { required: true, minLength: 8 })}
            />
            {errors.password?.type === 'required' && (
              <p className="text-sm font-light text-red-500">
                password is Required...!
              </p>
            )}
            {errors.password?.type === 'minLength' && (
              <p className="text-sm font-light text-red-500">
                password mast have at least 8 characters...!
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-Red dark:text-gray-50 btn bg-Red text-white border border-Red hover:border-Red outline-none hover:bg-white hover:text-Red transition-all duration-1000 delay-75 ease-in-out"
        >
          Sign in
        </button>
      </form>
    </div>
  )
}

export default Login
