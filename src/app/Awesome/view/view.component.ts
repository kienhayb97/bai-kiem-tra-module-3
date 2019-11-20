import {Component, OnInit} from '@angular/core';
import {Awesome} from '../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeServiceService} from '../awesome-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  awesome: Awesome;
  sub: Subscription;

  constructor(private awesomeService: AwesomeServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.awesomeService.awesomeDetail(id).subscribe(next => {
        this.awesome = next;
      }, error => {
        console.log(error);
      });
    });
    console.log(this.awesome);
  }

}
