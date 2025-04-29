import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MainComponent } from './main/main.component';
import { BudgetComponent } from './budget/budget.component';
import { GoalComponent } from './goal/goal.component';
import { AccountsComponent } from './accounts/accounts.component';
import { CreatePopupComponent } from './create-popup/create-popup.component';
const routes: Routes = [
   {
      path: '',
      component: MainComponent,
      children: [
         {
            path: '',
            redirectTo : 'home',
            pathMatch: 'full'
         },

         {
            path: 'create',
            component : CreatePopupComponent,
         },

         {
            path: 'home',
            component : HomeComponent
         },

         {
            path: 'transaction',
            component: TransactionComponent
         },

         {
            path : 'budget',
            component: BudgetComponent
         },

         {
            path :'goal',
            component : GoalComponent
         },

         {
            path :'account',
            component : AccountsComponent
         },
      ]
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class DashboardRoutingModule { }
