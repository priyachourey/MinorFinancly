import { Component } from '@angular/core';
import { HttpService } from '../service/htttpservice.service';
import { BudgetRes } from '../models/budget';
import { BudgetProgress } from '../models/budgetGoalProgress';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css'],
})
export class BudgetComponent {

  fieldvisible : boolean = false;

  readjustForm = new FormGroup({
      amount : new FormControl(Number())
  })

  

  activeCardIndex: number | null = null;

  toggleCard(index: number): void {
    if (this.activeCardIndex === index) {
      this.activeCardIndex = null;
    } else {
      this.activeCardIndex = index;
    }
  }

  budgets: BudgetRes[] = [];
  constructor(private httpService: HttpService) {
    this.httpService.GetBudget().subscribe((value) => {
      this.budgets = value;
      console.log(this.budgets);
    });
  }

  readjustBudgetAmount(BudgetId: string , index: number){

  }

  getBudgetProgress(BudgetId: string, index: number) {
    this.httpService.GetBudgetProcess(BudgetId).subscribe((value) => {
      if (value && this.budgets[index]) {
        console.log(value)
        this.budgets[index].totalexpense = value.totalexpense;
        this.budgets[index].remainingAmount = value.remainingamount;
        this.budgets[index].remainingbudgetPercent =value.remainingBudget;
      }
    });
  }
}
