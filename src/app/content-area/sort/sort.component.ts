import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.sass']
})
export class SortComponent implements OnInit {
  orderByKey = 'price';
  orderByOrder = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.orderByKey = this.shoppingListService.getOderByKeys().orderByKey;
    this.orderByOrder = this.shoppingListService.getOderByKeys().orderByOrder;
  }
  setOrderByKeys(orderBy, order) {
    this.orderByKey = orderBy;
    this.orderByOrder = order;
    this.shoppingListService.setOrderByKeys(this.orderByKey, this.orderByOrder);
  }

}
