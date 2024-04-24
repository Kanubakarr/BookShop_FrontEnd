import {Component, OnInit} from '@angular/core';
import {BuyerService} from "./buyer.service";

@Component({
  selector: 'app-cart',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OnInit{
  bookTitle: string;
  quantity: number;
  addedToCart: boolean = false;


   cartItems: { title: string, quantity: number }[] = [];

  constructor(private cartService: BuyerService) { }

  ngOnInit() {


  }

  addToCart() {
    if (this.bookTitle && this.quantity > 0) {
      this.cartService.addToCart(this.bookTitle, this.quantity);
      this.bookTitle = '';
      this.quantity = 0;
    }

    this.addedToCart = true;
  }
}
