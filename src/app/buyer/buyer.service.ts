import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuyerService {
  private cartItems: { title: string, quantity: number }[] = [];
  private cartSubject: BehaviorSubject<{ title: string, quantity: number }[]> = new BehaviorSubject<{ title: string, quantity: number }[]>(this.cartItems);

  constructor() { }

  getCartItems() {
    return this.cartSubject.asObservable();
  }

  addToCart(title: string, quantity: number) {
    const index = this.cartItems.findIndex(item => item.title === title);
    if (index !== -1) {
      this.cartItems[index].quantity += quantity;
    } else {
      this.cartItems.push({ title, quantity });
    }
    this.cartSubject.next(this.cartItems);
  }

  clearCart() {
    this.cartItems = [];
    this.cartSubject.next(this.cartItems);
  }
}
