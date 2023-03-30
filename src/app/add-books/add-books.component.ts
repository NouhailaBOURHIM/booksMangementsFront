import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent {
  book:Book=new Book();
  constructor(private bookService:BookService,private router:Router){}
 

  persistBook(){
    this.bookService.persist(this.book).subscribe(()=>{
      this.router.navigate(['/Books']);
    })
  }
}
