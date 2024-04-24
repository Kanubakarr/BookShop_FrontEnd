import { Component, OnInit } from '@angular/core';
import { BookModel} from './book.model';
import { BookService } from './book.service';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
   constructor(private bookService: BookService) { }


  books: any[] = [];
  newBook: BookModel = {bookId: null, title: '', author: '', price: null, quantity: null};

  ngOnInit() {
    this.books = [
      {bookId: 1, title: 'C++', author: 'kanu', price: '200', quantity: '20'}
    ];

  }

  addBook(): void {
    if (this.validateBook(this.newBook)) {
      this.books.push({...this.newBook});
      this.newBook = {bookId: null, title: '', author: '', price: null , quantity: null};
    }
  }

  validateBook(books: BookModel): boolean {
    return (
      typeof books.bookId === 'number' &&
      books.title.length < 20 &&
      books.author.length < 20 &&
      typeof books.price === 'number' &&
      typeof books.quantity === 'number');
  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
  }

  updateBook(index: number): void {
    this.newBook = {...this.books[index]};
    this.deleteBook(index);
  }
}
