import { Component, Input,OnInit } from '@angular/core';
import { Transaction, TransactionRes } from '../models/transaction';
import { HttpService } from '../service/htttpservice.service';

@Component({
  selector: 'app-transactioncard',
  templateUrl: './transactioncard.component.html',
  styleUrls: ['./transactioncard.component.css']
})
export class TransactioncardComponent implements OnInit {
    @Input() transaction: TransactionRes
    @Input() isGroupCard: boolean = false;
    public categoryName: String |null = ''
    constructor(private httpService: HttpService){
       this.transaction = {
        _id: null,
        username : null,
        amount : null,
        description :'',
        category : null,
        type: null,
        createdAt: null
       }
    }

   ngOnInit(){
    this.httpService.GetCategoryById(this.transaction.category).subscribe(value =>{
      this.categoryName = value.name
    })
   }
}
