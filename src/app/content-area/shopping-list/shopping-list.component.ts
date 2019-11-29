import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';
import { ShoppingList } from '../../shopping-list.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.sass']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingListCart: Array<ShoppingList> = [];
  shoppingCartAddedData: Array<ShoppingList> = [];
  orderByKey = 'price';
  orderByOrder = false;
  minVal = 0;
  maxVal = 10000;
  searchKey = '';

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.searchKey = this.shoppingListService.getSearchKey();
    this.shoppingListService.$searchKeySub.subscribe(data => {
      this.searchKey = data;
    });

    this.minVal = this.shoppingListService.getPriceFilterValues().minVal;
    this.maxVal = this.shoppingListService.getPriceFilterValues().maxVal;
    this.shoppingListService.$priceFilterSub.subscribe(data => {
      this.minVal = data.minVal;
      this.maxVal = data.maxVal;
    });

    this.orderByKey = this.shoppingListService.getOderByKeys().orderByKey;
    this.orderByOrder = this.shoppingListService.getOderByKeys().orderByOrder;

    this.shoppingListService.$sortSub.subscribe(data => {
      this.orderByKey = data.orderByKey;
      this.orderByOrder = data.orderByOrder;
    });

    this.shoppingListService.getShoppingList()
      .subscribe((data: Array<ShoppingList>) => {
        this.shoppingListCart = data;
      });
  }

  addToCartList(addedCartItem) {
    this.shoppingCartAddedData.push(addedCartItem);
    this.shoppingListService.setCartData(this.shoppingCartAddedData)
  }

  ngOnDestroy() {
    this.shoppingListService.setCartData(this.shoppingCartAddedData);
  }


}
