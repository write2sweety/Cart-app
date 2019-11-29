import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { ShoppingListService } from '../../shopping-list.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  minVal: number = 0;
  maxVal: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000
  };

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.minVal = this.shoppingListService.getPriceFilterValues().minVal;
    this.maxVal = this.shoppingListService.getPriceFilterValues().maxVal;
  }
  onApplyPriceFilter() {
    this.shoppingListService.setPriceFilterValues(this.minVal, this.maxVal);
  }

}
