import { publicRoute } from './paths'

import { PublicRoot } from '@pages/PublicRoot'

import { NotFound, LogIn, Register, Home, Products, Contact  } from '@pages'

export const PublicRoute = {
  path: publicRoute.pages.ROOT,
  element: <PublicRoot />,
  errorElement: <NotFound />,
  children: [ 
    {
      index: true,
      element: <Home />
    },
    {
      path: publicRoute.pages.PRODUCTS,
      element: <Products />,
    },
    {
      path: publicRoute.pages.CONTACT,
      element: <Contact />,
    },
    {
      path: publicRoute.auth.LOG_IN,
      element: <LogIn />,
    },
    {
      path: publicRoute.auth.REGISTER,
      element: <Register />,
    },
  ]
}