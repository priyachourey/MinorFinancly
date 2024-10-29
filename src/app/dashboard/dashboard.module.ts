import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MainComponent } from './main/main.component';
import { BudgetComponent } from './budget/budget.component';
import { GoalComponent } from './goal/goal.component';
import { HttpClientModule } from '@angular/common/http';
import { CreatePopupComponent } from './create-popup/create-popup.component';
import { TransactioncardComponent } from './transactioncard/transactioncard.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    HomeComponent,
    TransactionComponent,
    MainComponent,
    BudgetComponent,
    GoalComponent,
    CreatePopupComponent,
    TransactioncardComponent,
    PieChartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    
  ]

  
})
export class DashboardModule { }
