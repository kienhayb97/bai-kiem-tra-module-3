import {Component, OnInit} from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Book} from '../interface/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bookList: Book[];

  constructor(private bookService: BookServiceService) {
  }

  ngOnInit() {
    this.bookService.getBook().subscribe(next => {
      this.bookList = next;
      console.log(this.bookList);
    });
  }

}
