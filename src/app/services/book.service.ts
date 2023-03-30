import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  findAll(){
    return this.http.get<Book[]>("http://localhost:8080/books");
  }
  delete(id:number){
    return this.http.delete(`http://localhost:8080/books/${id}`);
  }
  persist(book:Book){
    return this.http.post("http://localhost:8080/books",book);
  }
  show(id:number){
    return this.http.get<Book>(`http://localhost:8080/books/${id}`);
  }
  update(book:Book){
    return this.http.put<Book>("http://localhost:8080/books",book);
  }

  searchByName(name:string){
    return this.http.get<Book[]>(`http://localhost:8080/books/name/${name}`);
  }
  searchByCategory(category:string){
    return this.http.get<Book[]>(`http://localhost:8080/books/category/${category}`)
  }
  searchByAuthor(author:string){
    return this.http.get<Book[]>(`http://localhost:8080/books/author/${author}`);
  }
}
