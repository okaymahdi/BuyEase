import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import GoogleLogin from '../../components/GoogleLogin/GoogleLogin'
import useAuth from '../../Hooks/useAuth'

const Register = () => {
  const { CreateUser } = useAuth()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()
  const handleForm = (data) => {
    console.log(data)
    CreateUser(data.email, data.password, navigate)
    navigate('/')
  }
  return (
    <div className="w-full my-24 max-w-md mx-auto p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-Dark_1">
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Create an account
      </h2>
      <p className="text-sm text-center dark:text-Dark_2">
        Already have an account?{' '}
        <Link
          to="/login"
          rel="noopener noreferrer"
          className="focus:underline hover:underline text-Red font-light"
        >
          Login here
        </Link>
      </p>
      <div className="my-6 space-y-4">
        <GoogleLogin />
        <button
          aria-label="Login with GitHub"
          role="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-Dark_2 focus:dark:ring-Red"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
          </svg>
          <p>Login with GitHub</p>
        </button>
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
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Confirm Password
              </label>
            </div>
            <input
              type="password"
              name="confermPassword"
              id="confermPassword"
              placeholder="********"
              className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-Dark_1 focus:dark:border-Red"
              {...register('confermPassword', {
                required: true,
                validate: (value) => {
                  if (value !== watch('password')) {
                    return 'passwords do not match'
                  }
                },
              })}
            />
            {errors.confermPassword && (
              <p className="text-sm font-light text-red-500">
                both password must match...!
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md dark:bg-Red dark:text-gray-50 btn bg-Red text-white border border-Red hover:border-Red outline-none hover:bg-white hover:text-Red transition-all duration-1000 delay-75 ease-in-out"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register
