import {Component, OnInit} from '@angular/core';
import {Book} from '../interface/book';
import {Subscription} from 'rxjs';
import {BookServiceService} from '../book-service.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  book: Book;
  sub: Subscription;

  constructor(private bookService: BookServiceService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      console.log(id);
      this.bookService.bookDetail(id).subscribe(next => {
        this.book = next;
      }, error => {
        console.log(error);
      });
    });
    console.log(this.book);
  }

}
