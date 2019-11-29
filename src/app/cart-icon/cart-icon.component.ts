import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { ShoppingList } from '../shopping-list.model';

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.sass']
})
export class CartIconComponent implements OnInit, OnDestroy {
  shoppingListCartData: Array<ShoppingList> = [];
  totalCost;
  totalDiscount;
  totalItems;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListCartData = [...this.shoppingListService.getShoppingCartPageData()];
    this.shoppingListCartData.forEach(data => {
      if (!data.count) {
        data.count = 1;
      }
    });
  }

  removeOneItem(id) {
    this.shoppingListCartData.forEach((cartData, index) => {
      if (cartData.id === id) {
        if (cartData.count === 1) {
          this.shoppingListCartData.splice(index, 1);
        } else {
          cartData.count = +cartData.count - 1;
        }
      }
    });
  }

  addOneItem(id) {
    this.shoppingListCartData.forEach((cartData) => {
      if (cartData.id === id) {
        cartData.count = +cartData.count + 1;
      }
    });
  }

  removeCartItem(id) {
    this.shoppingListCartData.forEach((data, index) => {
      if (data.id === id) {
        this.shoppingListCartData.splice(index, 1);
        data.count = 0;
      }
    });
    this.shoppingListService.setCartData(this.shoppingListCartData);
  }

  getTotalCost() {
    this.totalCost = 0;
    this.shoppingListCartData.forEach((data, index) => {
      this.totalCost = this.totalCost + data.price * data.count;
    });
    return this.totalCost;
  }

  getTotalDiscount() {
    this.totalDiscount = 0;
    this.shoppingListCartData.forEach((data, index) => {
      this.totalDiscount =
        this.totalDiscount + (data.price * data.count * data.discount) / 100;
    });
    return this.totalDiscount * -1;
  }

  getTotalItems() {
    this.totalItems = 0;
    this.shoppingListCartData.forEach((data, index) => {
      this.totalItems = this.totalItems + data.count;
    });
    return 'Items (' + this.totalItems + ')';
  }

  ngOnDestroy() {
    this.shoppingListService.setCartData(this.shoppingListCartData);
  }

}
