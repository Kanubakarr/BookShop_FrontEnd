import { Component } from '@angular/core';
import {BookModel} from "../book/book.model";
import {BookService} from "../book/book.service";

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {
  bookId: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
  orderPlaced: boolean = false;


  constructor(private bookService: BookService) { }
  books: any[] = [];
  newBook: BookModel = {bookId: null, title: '', author: '', price: null, quantity: null};


  ngOnInit() {
    this.books = [
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
