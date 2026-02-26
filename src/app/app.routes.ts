import { Routes } from '@angular/router';
import { AppComponent } from './app';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./pages/list-pokemon/list-pokemon').then((m) => m.ListPokemon),
  },
  {
    path: 'button-demo',
    loadComponent: () =>
      import('./pages/button-demo/button-demo').then((m) => m.ButtonDemo),
  },
  {
    path: 'form-demo',
    loadComponent: () =>
      import('./pages/form-demo/form-demo').then((m) => m.FormDemo),
  },
  {
    path: 'chart',
    loadComponent: () =>
      import('./pages/stress-test-with-connections-component/stress-test-with-connections-component').then(
        (m) => m.StressTestWithConnectionsComponent,
      ),
  },
];
