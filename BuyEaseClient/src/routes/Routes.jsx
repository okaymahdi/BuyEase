import { createBrowserRouter } from 'react-router-dom'
import Dashboard from '../layouts/Dashboard'
import { Main } from '../layouts/Main'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Overview from '../pages/Dashboard/Overview'
import ErrorPage from '../pages/ErrorPage'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Products from '../pages/Products/Products'
import Register from '../pages/Register/Register'
import AddProduct from '../pages/Seller/AddProduct'
import MyProducts from '../pages/Seller/MyProducts'
import PrivateRoute from './Private/PrivateRoute'
import SellerRoute from './Private/SellerRoute'

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      ),
      children: [
        {
          path: '/dashboard/overview',
          element: <Overview />,
        },

        // seller routes
        {
          path: '/dashboard/add-product',
          element: (
            <SellerRoute>
              <AddProduct />
            </SellerRoute>
          ),
        },
        {
          path: '/dashboard/my-products',
          element: (
            <SellerRoute>
              <MyProducts />
            </SellerRoute>
          ),
        },
      ],
    },
  ],

  {
    future: {
      v7_partialHydration: true,
      v7_normalizeFormMethod: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,

      v5Compat: true,
    },
  }
)
