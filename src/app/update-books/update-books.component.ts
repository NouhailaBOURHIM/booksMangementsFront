import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-update-books',
  templateUrl: './update-books.component.html',
  styleUrls: ['./update-books.component.scss']
})
export class UpdateBooksComponent implements OnInit{
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
  updateTask(){
    this.bookService.update(this.book).subscribe(()=>{
      this.router.navigate(['/Books']);
    })  }
}
