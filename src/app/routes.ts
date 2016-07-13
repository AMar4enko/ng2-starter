import { RouterConfig, provideRouter } from '@angular/router';
import { route as homeRoute } from './pages/home'
import { route as testRoute } from './pages/test'

export const routerConfig: RouterConfig = [
  homeRoute,
  testRoute
];
