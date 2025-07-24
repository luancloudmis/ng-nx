import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'todos',
    loadComponent: () =>
      import('@angular-monorepo/ui').then((m) => m.Todo),
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full',
  },

];
