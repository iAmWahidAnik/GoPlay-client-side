import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import ErrorElement from './ErrorElements/ErrorElement.jsx'
import Home from './SinglePages/HomeComponents/Home/Home.jsx'
import Login from './AuthenticationPages/Login/Login'
import Register from './AuthenticationPages/Register/Register'
import AllToys from './SinglePages/AllToys/AllToys'
import AddAToy from './SinglePages/AddAToy/AddAToy'
import MyToys from './SinglePages/MyToys/MyToys'
import AuthenticationProvider from './AuthenticationProvider/AuthenticationProvider'
import PrivateRoutes from './PrivateRoutes/PrivateRoutes'
import Blogs from './SinglePages/Blogs/Blogs'
import SingleToy from './SinglePages/SingleToy/SingleToy'
import UpdateAToy from './SinglePages/MyToys/UpdateAToy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'alltoys',
        element: <AllToys></AllToys>,
        loader: () => fetch('https://go-play-server-side.vercel.app/alltoys')
      },
      {
        path: 'toy/:id',
        element: <PrivateRoutes><SingleToy></SingleToy></PrivateRoutes>,
        loader: ({params}) => fetch(`https://go-play-server-side.vercel.app/alltoys/${params.id}`)
      },
      {
        path: 'addtoy',
        element: <PrivateRoutes><AddAToy></AddAToy></PrivateRoutes>
      },
      {
        path: 'updateatoy/:id',
        element: <UpdateAToy></UpdateAToy>,
        loader: ({params}) => fetch(`https://go-play-server-side.vercel.app/alltoys/${params.id}`)
      },
      {
        path: 'mytoys',
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
)
