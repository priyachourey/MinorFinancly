import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MainComponent } from './main/main.component';
import { BudgetComponent } from './budget/budget.component';
import { GoalComponent } from './goal/goal.component';


@NgModule({
  declarations: [
    HomeComponent,
    TransactionComponent,
    MainComponent,
    BudgetComponent,
    GoalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
