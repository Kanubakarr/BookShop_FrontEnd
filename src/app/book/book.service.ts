import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookModel } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BookModel[] = [];
  private booksSubject: BehaviorSubject<BookModel[]> = new BehaviorSubject<BookModel[]>(this.books);

  constructor() { }

  getBooks(): Observable<BookModel[]> {
    return this.booksSubject.asObservable();
  }
  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.bookId !== id);
    this.booksSubject.next(this.books);
  }

  updateBook(updatedBook: BookModel): void {
    const index = this.books.findIndex(book => book.bookId === updatedBook.bookId);
    if (index !== -1) {
      this.books[index] = updatedBook;
      this.booksSubject.next(this.books);
    }
  }
}
