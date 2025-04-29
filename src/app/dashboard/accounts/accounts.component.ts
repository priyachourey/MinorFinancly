import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account,AccountRes } from '../models/account.model';
import { HttpService } from '../service/htttpservice.service';
import { searchModel } from '../models/search.model';
import { TransactionRes } from '../models/transaction';
@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  constructor(private httpservice : HttpService){
      this.httpservice.GetAccountList().subscribe((value)=>{
        this.accounts = value.accounts;
      })
  }
  showSuccessMessage : boolean = false;

  searchInput = '';

  transaction : TransactionRes[]=[];
  
  searchResults: searchModel[] = [];

  accounts :AccountRes []=[] ;

  selectMembers: any[] = [];

  accountForm = new FormGroup({
    name  : new FormControl(''),
    owner : new FormControl(''),
  });

  searchForm = new FormGroup({
    query : new FormControl(''),
    accountId : new FormControl('')
  });
  
  createAccount(){
     let reqObj: Account = this.accountForm.getRawValue();
        this.httpservice.AddAccount(reqObj).subscribe({
          next:(value)=>{
            this.accountForm.reset();
            this.showSuccessMessage = true;     // create a flag to show success
            setTimeout(() => this.showSuccessMessage = false, 3000); // hide after 3s
          }
        });
  }

selectedAccountId: string | null = null;

selectAccount(account: any) {
  this.selectedAccountId = account._id;
  if(!this.selectedAccountId){
    return;
  }
  this.httpservice.GetAccountTransactionList(this.selectedAccountId).subscribe((value)=>{
      this.transaction = value
      console.log(value)
  })
}

  searchUsers() {
    const formValue = this.searchForm.getRawValue();
    const query = formValue.query?.trim();
  
    if (!query) {
      console.log("Empty query");
      return;
    }
  
    this.httpservice.searchUser(query).subscribe({
      next: (value) => {
        console.log("Search result:", value);
        this.searchResults = value;
      },
      error: (err) => {
        console.error("Search error:", err);
      }
    });
  }

  selectedMember() {
    const accountId = this.searchForm.get('accountId')!.value;
    const members = this.selectMembers;
  
    if (!accountId) return;
  
    this.httpservice.addMember(accountId, members).subscribe({
      next: () => {
        // Reset form and state
        this.searchForm.reset();            // clear form
        this.selectMembers = [];            // clear selected members
        this.searchResults = [];            // clear search results if needed
        console.log("success!!!!")
        // Show success alert/toast
        this.showSuccessMessage = true;     // create a flag to show success
        setTimeout(() => this.showSuccessMessage = false, 3000); // hide after 3s
      },
      error: (err) => {
        console.error(err);
        // optionally show error message
      }
    });
  }

  addMember(user: any) {
    if (!this.selectMembers.some(m => m.email === user.email)) {
      this.selectMembers.push(user);
    }
  }

  removeMember(user: any) {
    this.selectMembers = this.selectMembers.filter(m => m.email !== user.email);
  }
}
