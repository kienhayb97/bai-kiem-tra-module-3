import {Component, OnInit} from '@angular/core';
import {Book} from '../interface/book';
import {Subscription} from 'rxjs';
import {BookServiceService} from '../book-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  book: Book;
  sub: Subscription;
  message = '';

  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.bookService.bookDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        this.message = 'can not retrieve customer detail. ' + error;
      });
    });
  }

  delete() {
    console.log(this.book.id);
    this.bookService.bookDelete(this.book.id).subscribe(next => {
      this.message = 'Đã xóa sách';
    }, error => {
      this.message = 'Xóa Không Thành Công';
    });
  }
}


