import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../models/Book';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.scss']
})
export class ListBooksComponent implements OnInit{
  books: Book[]=[];
  name!:string;
  category!:string;
  author!:string;
  constructor(private bookService:BookService,private router:Router){}
 ngOnInit(): void {
  this.getBooks();
 }
  getBooks(){
    this.bookService.findAll().subscribe(books=>this.books=books);
    console.log(this.books);
  }
  deleteBook(id:number){
    console.log(id);
    this.bookService.delete(id).subscribe(data=>{
      this.getBooks();
    })
  }
  updateBook(id:number){
    this.router.navigate(['/updateBook',id]);
  }
  viewBook(id:number){
    this.router.navigate(['/viewBook',id]);
  }

  searchByName(){
    this.bookService.searchByName(this.name).subscribe(books=>this.books=books);
  }
  searchByCategory(){
    this.bookService.searchByCategory(this.category).subscribe(books=>this.books=books);
  }
  searchByAuthor(){
    this.bookService.searchByAuthor(this.author).subscribe(books=>this.books=books)
  }
}

