import { Component, OnInit } from '@angular/core';
import {AwesomeServiceService} from '../awesome-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  message = '';

  constructor(private awesomeService: AwesomeServiceService) {
  }

  ngOnInit() {
  }

  createAwesome(awesomeForm) {
    this.awesomeService.awesomeCreate(awesomeForm.value).subscribe(() => {
      this.message = 'Tạo Mới Thành Công';
    }, error => {
      this.message = 'Tạo Mới Thất Bại';
    });
  }

}
