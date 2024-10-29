import {  Component, OnInit } from '@angular/core';
import { Chart , registerables} from 'chart.js';
import { HttpService } from '../service/htttpservice.service';
import { statusRes } from '../models/stateRes';
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent {

 constructor(private httpService : HttpService){
  this.httpService.GetStatus().subscribe((value)=>{
       this.processData(value)
  })
 }

 processData(data:any){
  console.log(data)
    const label = data.map((item:any)=> item.name);
    const amount = data.map((item:any)=> item.totalamount);
    console.log(label , amount);
 }
 
 
 
}
