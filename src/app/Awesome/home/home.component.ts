import {Component, OnInit} from '@angular/core';
import {AwesomeServiceService} from '../awesome-service.service';
import {Awesome} from '../interface/awesome';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  awesomeList: Awesome[];

  constructor(private awesomeService: AwesomeServiceService) {
  }

  ngOnInit() {
    this.awesomeService.getAwesome().subscribe(next => {
      this.awesomeList = next;
      console.log(this.awesomeList);
    });
  }

}
