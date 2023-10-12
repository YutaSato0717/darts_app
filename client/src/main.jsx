import { MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Top from './pages/Top'
import Recruit_succeed from './pages/Recruit_succeed'
import Zeroone from './pages/Zeroone'
import Cricket from './pages/Cricket'
import Countup from './pages/Countup'
import ProfileSetting from './pages/ProfileSetting'
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
    path: "/recruit_succeed",
    element: <Recruit_succeed />
  },
  {
    path: "/profile-setting",
    element: <ProfileSetting/>
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
