import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { UpdateBooksComponent } from './update-books/update-books.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
  {path:'Books',component:ListBooksComponent},
  {path:'addBook',component:AddBooksComponent},
  {path:'updateBook/:id',component:UpdateBooksComponent},
  {path:'viewBook/:id',component:ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
