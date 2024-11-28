import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart , registerables} from 'chart.js';
import { HttpService } from '../service/htttpservice.service';
import { statusRes } from '../models/stateRes';
Chart.register(...registerables);
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements  AfterViewInit {

  @ViewChild ('piecanvas') piecanvas!: ElementRef<any>

  status :  statusRes[] = [];
  public categoryName : null| String = ''
  constructor(private httpService : HttpService){
   
  }
 
  
  ngAfterViewInit(): void {
    this.httpService.GetStatus().subscribe((value)=>{
      this.status = value;
      this.createChart(this.status);  
    })

    
   
  }

  createChart(status:statusRes[]){
    console.log(status)
    const labels = status.map((item: any) => item._id); // Category names
    const amounts = status.map((item: any) => item.totalamount); // Total expenses

   
    const ctx = this.piecanvas.nativeElement.getContext('2d')
    if (ctx) {
      new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {
              data: amounts,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#4BC0C0',
                '#9966FF'
              ],
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.label || '';
                  if (label) label += ': ';
                  label += context.raw; 
                  return label;
                }
              }
            },
            title:{
              display:true,
              text : "Expenses per category",
              position : 'bottom'
            }
          }
        }
      });

      console.log("chart created")
    }
  }
}
  



 


