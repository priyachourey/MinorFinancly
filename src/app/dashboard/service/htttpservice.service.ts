import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Transaction, TransactionRes } from '../models/transaction';
import { Budget, BudgetRes } from '../models/budget';
import { Goal, GoalRes } from '../models/goal';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { Token } from 'src/app/models/token.model';
import { CategoryReq } from '../models/category.model';
import { CategoryRes } from '../models/category.model';
import { BudgetProgress, GoalProgress } from '../models/budgetGoalProgress';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private token: any;
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    let authinfo = window.localStorage.getItem('token');
    if (authinfo) {
      this.token = JSON.parse(authinfo);
    }
    this.headers = new HttpHeaders().set(
      'Authorization',
      `${this.token.message}`
    );
  }

  AddTransaction(reqestobj: Transaction): Observable<any> {
    reqestobj.username = this.token.username;

    return this.httpClient.post(
      'http://localhost:8000/transactions/transaction',
      reqestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  AddBudget(reqestobj: Budget) {
    reqestobj.username = this.token.username;

    return this.httpClient.post(
      'http://localhost:8000/budgets/budget',
      reqestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  AddGoal(reqestobj: Goal) {
    reqestobj.username = this.token.username;
    return this.httpClient.post('http://localhost:8000/goals/goal', reqestobj, {
      responseType: 'json',
      headers: this.headers,
    });
  }

  AddCategory(reqestobj: CategoryReq) {
    reqestobj.username = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/categories/category',
      reqestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  GetTransaction(): Observable<any> {
    
    const transaction = this.httpClient.get<TransactionRes[]>(
      'http://localhost:8000/transactions/transaction',
      { responseType: 'json', headers: this.headers }
    );
    return transaction;
  }

  GetBudget(): Observable<any> {
    const budget = this.httpClient.get<Budget[]>(
      'http://localhost:8000/budgets/budget',
      { responseType: 'json', headers: this.headers }
    );
    return budget;
  }

  GetGoal(): Observable<any> {
    const goal = this.httpClient.get<GoalRes[]>(
      'http://localhost:8000/goals/goal',
      { responseType: 'json', headers: this.headers }
    );
    return goal;
   
  }

  GetCategory(): Observable<CategoryRes[]> {
    const category = this.httpClient.get<CategoryRes[]>(
      'http://localhost:8000/categories/category',
      { responseType: 'json', headers: this.headers }
    );
    return category;
  }

  GetBudgetProcess(BudgetId:string|null|undefined): Observable<BudgetProgress> {
    if(BudgetId == null){
      BudgetId = ''
    }
    let params = new HttpParams().set('BudgetId', BudgetId)
    let budgetProgress = this.httpClient.get<BudgetProgress>(
      'http://localhost:8000/manage/budget',
      { responseType: 'json', headers: this.headers, params:params }
    );
    return budgetProgress;
  }

  GetGoalProcess(GoalId:string|null|undefined): Observable<GoalProgress> {
    if(GoalId == null){
      GoalId = ''
    }
    let params = new HttpParams().set('GoalId', GoalId)
    let goalProgress = this.httpClient.get<GoalProgress>(
      'http://localhost:8000/manage/goal',
      { responseType: 'json', headers: this.headers , params : params}
    );
    return goalProgress;
  }

  GetCategoryById(categoryId: string| null |undefined) : Observable<CategoryRes>{
    if (categoryId == null){
      categoryId=''
    }
    let params = new HttpParams().set('categoryid',categoryId)
    const category = this.httpClient.get<CategoryRes>(
      'http://localhost:8000/categories/category',
      { responseType: 'json', headers: this.headers,params: params }
    );
    return category;
  }
}
