import { Component, OnInit } from '@angular/core';
import {Awesome} from '../interface/awesome';
import {Subscription} from 'rxjs';
import {AwesomeServiceService} from '../awesome-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
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
        console.log(error);
      });
    });
  }

  editAwesome(awesomeForm) {
    this.awesomeService.editAwesome(this.awesome.id, awesomeForm.value).subscribe(next => {
      this.message = ' update oke';
    }, error => {
      this.message = 'Cập Nhật Không Thành công';
    });
  }
}
