import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  books: Book[] = [
    { id: 1, title: 'Book 1', author: 'Author 1', price: 10.99 },
    { id: 2, title: 'Book 2', author: 'Author 2', price: 12.99 },
    { id: 3, title: 'Book 3', author: 'Author 3', price: 15.99 }
  ];

  addBook() {
    // Here you can implement logic to add a book
    const newBook: Book = {
      id: this.books.length + 1,
      title: 'New Book',
      author: 'New Author',
      price: 0
    };
    this.books.push(newBook);
  }

  deleteBook() {
    // Here you can implement logic to delete a book
    // For example, let's delete the last book
    this.books.pop();
  }

  updateBook() {
    // Here you can implement logic to update a book
    // For example, let's update the price of the first book
    if (this.books.length > 0) {
      this.books[0].price += 5; // Increase the price by $5
    }
  }
}

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
}
