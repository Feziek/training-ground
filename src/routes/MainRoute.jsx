import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'

const browserRouter = createBrowserRouter([ 
  PublicRoute,
  PrivateRoute 
])

export function MainRoute() {
  return <RouterProvider router={ browserRouter } />
}