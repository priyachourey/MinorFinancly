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
import { Account } from '../models/account.model';
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

  AddTransaction(requestobj: Transaction): Observable<any> {
    requestobj.username = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/transactions/transaction',
      requestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  // create account http request ==========================================================>
  AddAccount(requestobj: Account): Observable<any> {
    console.log("httprequest hit")
    requestobj.owner = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/accounts/account',
      requestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  //GetAccountlist ==================================================================>
  GetAccountList(): Observable<any> {
    const transaction = this.httpClient.get<TransactionRes[]>(
      'http://localhost:8000/accounts/account',
      { responseType: 'json', headers: this.headers }
    );
    return transaction;
  }

  GetAccountTransactionList(accountId : string):Observable<any>{
    const params = {accountId}
    const AccountTransaction = this.httpClient.get<TransactionRes[]>(
      'http://localhost:8000/transactions/transaction',
      { responseType: 'json', headers: this.headers , params }
    );
    console.log(AccountTransaction)
    return AccountTransaction
  }

  AddBudget(requestobj: Budget) {
    requestobj.username = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/budgets/budget',
      requestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  AddGoal(requestobj: Goal) {
    requestobj.username = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/goals/goal',
      requestobj,
      {
        responseType: 'json',
        headers: this.headers,
      }
    );
  }

  AddCategory(requestobj: CategoryReq) {
    requestobj.username = this.token.username;
    return this.httpClient.post(
      'http://localhost:8000/categories/category',
      requestobj,
      { responseType: 'json', headers: this.headers }
    );
  }

  GetTransaction(): Observable<any> {
    const transaction = this.httpClient.get<TransactionRes[]>(
      'http://localhost:8000/transactions/transaction',
      { responseType: 'json', headers: this.headers }
    );
    console.log(transaction)
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

  GetBudgetProcess(
    BudgetId: string | null | undefined
  ): Observable<BudgetProgress> {
    if (BudgetId == null) {
      BudgetId = '';
    }
    let params = new HttpParams().set('BudgetId', BudgetId);
    let budgetProgress = this.httpClient.get<BudgetProgress>(
      'http://localhost:8000/manage/budget',
      { responseType: 'json', headers: this.headers, params: params }
    );

    console.log(budgetProgress);
    return budgetProgress;
  }

  GetGoalProcess(GoalId: string | null | undefined): Observable<GoalProgress> {
    if (GoalId == null) {
      GoalId = '';
    }
    let params = new HttpParams().set('GoalId', GoalId);
    let goalProgress = this.httpClient.get<GoalProgress>(
      'http://localhost:8000/manage/goal',
      { responseType: 'json', headers: this.headers, params: params }
    );
    console.log(goalProgress);
    return goalProgress;
  }

  GetCategoryById(
    categoryId: string | null | undefined
  ): Observable<CategoryRes> {
    if (categoryId == null) {
      categoryId = '';
    }
    let params = new HttpParams().set('categoryid', categoryId);
    const category = this.httpClient.get<CategoryRes>(
      'http://localhost:8000/categories/category',
      { responseType: 'json', headers: this.headers, params: params }
    );
    return category;
  }

  GetStatus(): Observable<any> {
    const status = this.httpClient.get<any>(
      'http://localhost:8000/status/state',
      { responseType: 'json', headers: this.headers }
    );

    return status;
  }

  // search user http request===============================================================>
  searchUser(query: any): Observable<any> {
   
    const searchResults = this.httpClient.get<any>(
      'http://localhost:8000/accounts/searchmember',
      { responseType: 'json', headers: this.headers , params : {query} }
    );
    
    return searchResults;
  }

  //add members into groups
  addMember(accountId : string , memberList : any[]):Observable<any>{
      return this.httpClient.post(`http://localhost:8000/accounts/members/${accountId}`,{ memberList},
        { responseType: 'json', headers: this.headers   }
      )
  }
}
