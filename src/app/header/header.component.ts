import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  books = [ /* Your book data */ ];
  filteredBooks: any[] = []; // To store filtered results
  searchTerm: string = '';

  ngOnInit() {
    this.filteredBooks = this.books; // Initially show all books
  }
}

