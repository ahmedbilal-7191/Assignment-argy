import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import Signup from './pages/Signup.jsx'
import RegistrationForm from './pages/RegistrationForm.jsx'
import FinalPage from './pages/FinalPage.jsx'
import UserDetail from './pages/UserDetail.jsx'




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: (
            <Login/>
        ),
      },
      {
        path: "/signup",
        element: (

            <Signup />

        ),
      },
      {
        path: "/success",
        element: (

            <FinalPage />

        ),
      },
      {
        path: "/loginsucess",
        element: (

            <UserDetail />

        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
