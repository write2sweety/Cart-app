import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ShoppingList } from './shopping-list.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ItemUrl = 'https://api.myjson.com/bins/qzuzi';

  shoppingCartAddedData: Array<ShoppingList> = [];
  orderByKeys = { orderByKey: 'price', orderByOrder: false };
  priceFilterValues = {
    minVal: 0,
    maxVal: 1000
  };
  searchKey: '';

  constructor(private http: HttpClient) { }

  $cartPageDataSub = new Subject<Array<ShoppingList>>();
  $sortSub = new Subject<{ orderByKey: string; orderByOrder: boolean }>();
  $priceFilterSub = new Subject<{ minVal: number; maxVal: number }>();
  $searchKeySub = new Subject<string>();

  getShoppingList() {
    return this.http.get(this.ItemUrl);
  }

  setCartData(cartDataList: Array<ShoppingList>) {
    console.log("this.cartDataList", cartDataList);
    this.shoppingCartAddedData = [...cartDataList];
    this.$cartPageDataSub.next(this.shoppingCartAddedData);
  }

  getShoppingCartPageData() {
    console.log("this.shoppingCartData", this.shoppingCartAddedData);
    return [...this.shoppingCartAddedData];
  }

  getOderByKeys() {
    return this.orderByKeys;
  }

  setOrderByKeys(key, order) {
    this.orderByKeys.orderByKey = key;
    this.orderByKeys.orderByOrder = order;

    this.$sortSub.next(this.orderByKeys);
  }

  getPriceFilterValues() {
    return this.priceFilterValues;
  }

  setPriceFilterValues(minVal, maxVal) {
    this.priceFilterValues.minVal = minVal;
    this.priceFilterValues.maxVal = maxVal;

    this.$priceFilterSub.next(this.priceFilterValues);
  }

  getSearchKey() {
    return this.searchKey;
  }

  setSearchKey(searchKey) {
    this.searchKey = searchKey;
    this.$searchKeySub.next(this.searchKey);
  }
}
