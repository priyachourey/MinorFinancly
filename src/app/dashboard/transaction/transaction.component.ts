import { Component } from '@angular/core';
import { TransactionRes } from '../models/transaction';
import { HttpService } from '../service/htttpservice.service';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

    transaction : TransactionRes[] = []
    constructor(private  httpservice : HttpService ){ 
      this.httpservice.GetTransaction().subscribe((value)=>{
         this.transaction = value;
         console.log(this.transaction);
      })
    }

    
  
}
