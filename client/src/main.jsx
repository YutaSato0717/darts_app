import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Top from './pages/Top'
import Record_succeed from './pages/Record_succeed'
import Zeroone from './pages/Zeroone'
import Cricket from './pages/Cricket'
import Countup from './pages/Countup'
import Signup from './pages/Signup'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Top />,
    errorElement: <NotFound  />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />
  },
  
  {
    path: "/record_succeed",
    element: <Record_succeed />
  },
  {
    path: "/signup",
    element: <Signup/>
  },

{
  path: "/zeroone",
  element: <Zeroone />
},
{
  path: "/cricket",
  element: <Cricket />
},
{
  path: "/countup",
  element: <Countup />
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{
        fontSizes: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        },
        spacing: {
          xs: 20,
          sm: 22,
          md: 24,
          lg: 26,
          xl: 30,
        }
      }}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
)
