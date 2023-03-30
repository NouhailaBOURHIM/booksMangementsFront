import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { AddBooksComponent } from './add-books/add-books.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule }  from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListBooksComponent,
    UpdateBooksComponent,
    AddBooksComponent,
    ViewBookComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
