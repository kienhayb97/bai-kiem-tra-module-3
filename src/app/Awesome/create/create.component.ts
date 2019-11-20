import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  message = '';

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit() {
  }

  createBook(bookForm) {
    this.bookService.bookCreate(bookForm.value).subscribe(() => {
      this.message = 'Tạo Mới Thành Công';
    }, error => {
      this.message = 'Tạo Mới Thất Bại';
    });
  }

}
