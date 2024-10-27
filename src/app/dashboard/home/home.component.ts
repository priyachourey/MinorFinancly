import { Component } from '@angular/core';
import { ExtractokenService } from '../service/extractoken.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private extract : ExtractokenService){}

  username = this.extract.GetUsername();

}
