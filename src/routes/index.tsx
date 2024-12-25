import { createBrowserRouter, RouteObject } from 'react-router'
import { RouteConfig } from './types'
import { routes } from './config'
import { AuthGuard } from './AuthGuard'

const processRouteConfig = (routes: RouteConfig[]): RouteObject[] => {
  return routes.map((route) => ({
    path: route.path,
    element: route.auth?.required ? <AuthGuard>{route.element}</AuthGuard> : route.element,
    ...(route.children && { children: processRouteConfig(route.children) }),
  }))
}

export const router = createBrowserRouter(processRouteConfig(routes))
