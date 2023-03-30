import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit{
  book:Book=new Book();
  id!:number;
  constructor(private route:ActivatedRoute,private bookService:BookService,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.showTask(this.id);
  }

  showTask(id:number){
    this.bookService.show(id).subscribe(book=>this.book=book)
  }
}
