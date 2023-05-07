import { Routes } from '@angular/router';
import { ProblemsDetailsComponent } from './problems/problems-details/problems-details.component';
import { OUTCOMES_ROUTING } from './outcomes/outcomes-routing';

export const routes: Routes = [
  {
    path: 'problems',
    loadComponent: () => import('./problems/problems.component').then((c) => c.ProblemsComponent),
    children: [
      { path: '', redirectTo: 'details', pathMatch: 'full' },
      { path: 'details', component: ProblemsDetailsComponent },
      {path: 'children', loadComponent: () => import('./problems/problems-childern/problems-childern.component').then(m => m.ProblemsChildernComponent)}
    ]
  }, 
  {
    path: 'outcomes',
    loadChildren: () => import('./outcomes/outcomes-routing').then((m) => m.OUTCOMES_ROUTING)
  }
];

