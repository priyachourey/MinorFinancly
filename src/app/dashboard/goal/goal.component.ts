import { Component } from '@angular/core';
import { HttpService } from '../service/htttpservice.service';
import { GoalRes } from '../models/goal';
import { GoalProgress } from '../models/budgetGoalProgress';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent {
  
  activeCardIndex: number | null = null;

  toggleCard(index: number): void {
    if (this.activeCardIndex === index) {
      this.activeCardIndex = null;
    } else {
      this.activeCardIndex = index;
    }
  }


    goals : GoalRes[]= [];
    constructor(private httpService : HttpService , ){
        this.httpService.GetGoal().subscribe((value)=>{
          if(!value || value.length === 0 ){
            console.log(value)
             console.log("no goal yet");
          }else{
            this.goals = value;
          }  
        })
    }

    getGoalProgress(GoalId : string , index : number){

      this.httpService. GetGoalProcess(GoalId).subscribe((value) => {
        console.log(value)
        if (value && this.goals[index]) {
          console.log(value)
          this.goals[index].totalincome = value.totalincome;
          this.goals[index].remainingamount = value.remainingamount;
          this.goals[index].goalprogress =value.goalprogress;
        }
      });

    }

}
