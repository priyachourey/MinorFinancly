import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../auth.guard'
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },

  {
    path: 'dashboard',
    loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate : [authGuard]
  },

  { 
    path: '', 
    redirectTo: '/auth', 
    pathMatch: 'full' 
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
