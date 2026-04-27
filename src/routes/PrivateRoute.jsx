import { privateRoute } from './paths'

import { PublicRoot } from '@pages/PublicRoot'

import { Tools, Dashboard } from '@pages'

import { NotFound, Home } from '@pages'

export const PrivateRoute = {
  path: privateRoute.ROOT,
  element: <PublicRoot />,
  errorElement: <NotFound />,
  children: [ 
    {
      index: true,
      element: <Home />
    },
    {
      path: privateRoute.DASHBOARD,
      element: <Dashboard />,
    },
    {
      path: privateRoute.TOOLS,
      element: <Tools />,
    }
  ]
}