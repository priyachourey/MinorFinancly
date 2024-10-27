import { Component } from '@angular/core';
import { Transaction } from '../models/transaction';
import { ExtractokenService } from '../service/extractoken.service';
import { HttpService } from '../service/htttpservice.service';
import { Budget } from '../models/budget';
import { Goal } from '../models/goal';
import { FormControl, FormGroup } from '@angular/forms';
import { CategoryReq , CategoryRes} from '../models/category.model';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.css'],
})
export class CreatePopupComponent {
  activeForm: string = '';

  transationForm = new FormGroup({
    type: new FormControl(''),
    amount: new FormControl(Number()),
    category: new FormControl(''),
    description: new FormControl(''),
    username: new FormControl(''),
  });


  BudgetForm = new FormGroup({
    name : new FormControl(''),
    amount: new FormControl(Number()),
    category: new FormControl(''),
    description: new FormControl(''),
    expiry : new FormControl(''),
    username: new FormControl(''),
  });


  GoalForms = new FormGroup({
    amount: new FormControl(Number()),
    summary: new FormControl(''),
    expiry : new FormControl(),
    username: new FormControl(''),
  });

  CategoryForm = new FormGroup({
    name : new FormControl(''),
    username: new FormControl('')
  });


  categories: CategoryRes[] = [];

  createForm(formType: string) {
    this.activeForm = formType;
  }

  constructor(
    private extract: ExtractokenService,
    private transaction: HttpService
  ) {
    this.transaction.GetCategory().subscribe((value) => {
      this.categories = value;
    });
  }

  alertVisible: boolean = false;
  asideVisible: boolean = false;
  showAlert() {
    this.alertVisible = true;
  }
  closeAlert() {
    this.alertVisible = false;
  }

  showAside() {
    this.asideVisible = true;
  }
  closeAside() {
    this.asideVisible = false;
  }

  createTransaction() {
    let reqObj: Transaction = this.transationForm.getRawValue();
    this.transaction.AddTransaction(reqObj).subscribe((value) => {
      this.showAlert();
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    });
  }

  createBudget() {
    debugger;
    let reqObj: Budget = this.BudgetForm.getRawValue();
    this.transaction.AddBudget(reqObj).subscribe((value)=>{
      this.showAlert();
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    })
  }

  createGoal(){
    let reqObj: Goal = this.GoalForms.getRawValue();
    this.transaction.AddGoal(reqObj).subscribe((value)=>{
      this.showAlert();
      setTimeout(() => {
        this.closeAlert();
      }, 3000);
    })
  }

  createCategory(){
    let reqObj: CategoryReq = this.CategoryForm.getRawValue();
    this.transaction.AddCategory(reqObj).subscribe((value)=>{
        this.refreshCategory()
    })
  }

  refreshCategory(){
    this.transaction.GetCategory().subscribe((value)=>{
       this.categories = value;
    })
  }
}
