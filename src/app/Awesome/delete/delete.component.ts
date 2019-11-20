import {Component, OnInit} from '@angular/core';
import {Awesome} from '../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeServiceService} from '../awesome-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  awesome: Awesome;
  sub: Subscription;
  message = '';

  constructor(private awesomeService: AwesomeServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.awesomeService.awesomeDetail(id).subscribe(next => {
        this.awesome = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
  }

  delete() {
    console.log(this.awesome.id);
    this.awesomeService.awesomeDelete(this.awesome.id).subscribe(next => {
      this.message = 'delete';
    }, error => {
      this.message = 'Do not delete ';
    });
  }
}


